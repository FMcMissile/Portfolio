"use client";
import { useEffect, useRef, useState } from "react";

interface ModelViewerProps {
  /** Path to a .glb file under public/ */
  src: string;
  dark?: boolean;
}

/** Interactive glTF model viewer with orbit controls and auto-rotate. */
export default function ModelViewer({ src, dark = true }: ModelViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | null = null;

    (async () => {
      try {
        const THREE = await import("three");
        const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
        const { DRACOLoader } = await import("three/addons/loaders/DRACOLoader.js");
        const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
        const mount = mountRef.current;
        if (disposed || !mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.01, 100);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        mount.appendChild(renderer.domElement);

        scene.add(new THREE.HemisphereLight(0xffffff, 0x444455, 2.2));
        const key = new THREE.DirectionalLight(0xffffff, 2.5);
        key.position.set(3, 5, 4);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xaaccff, 1.2);
        rim.position.set(-4, 2, -3);
        scene.add(rim);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.2;

        const draco = new DRACOLoader();
        draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
        const loader = new GLTFLoader();
        loader.setDRACOLoader(draco);

        const gltf = await loader.loadAsync(src);
        if (disposed) return;

        // Center and frame the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3()).length();
        gltf.scene.position.sub(center);
        scene.add(gltf.scene);
        camera.position.set(0, size * 0.25, size * 0.9);
        controls.target.set(0, 0, 0);
        controls.update();

        let raf = 0;
        const tick = () => {
          raf = requestAnimationFrame(tick);
          controls.update();
          renderer.render(scene, camera);
        };
        tick();
        setStatus("ready");

        const onResize = () => {
          camera.aspect = mount.clientWidth / mount.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener("resize", onResize);

        cleanup = () => {
          cancelAnimationFrame(raf);
          window.removeEventListener("resize", onResize);
          controls.dispose();
          renderer.dispose();
          draco.dispose();
          mount.removeChild(renderer.domElement);
        };
      } catch (err) {
        console.error("ModelViewer failed to load model:", err);
        if (!disposed) setStatus("error");
      }
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [src]);

  return (
    <div
      className={`relative h-[560px] max-[734px]:h-[380px] w-full overflow-hidden rounded-[1.75rem] ${
        dark ? "bg-night2" : "bg-paper2"
      }`}
    >
      <div ref={mountRef} className="absolute inset-0" />
      {status === "loading" && (
        <div className={`absolute inset-0 flex items-center justify-center text-[13px] ${dark ? "text-snow-muted" : "text-ink-muted"}`}>
          Loading model…
        </div>
      )}
      {status === "error" && (
        <div className={`absolute inset-0 flex items-center justify-center text-[13px] ${dark ? "text-snow-muted" : "text-ink-muted"}`}>
          The model could not be loaded.
        </div>
      )}
      {status === "ready" && (
        <div className={`pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[12px] backdrop-blur-md ${
          dark ? "bg-[rgba(255,255,255,0.1)] text-snow" : "bg-[rgba(0,0,0,0.06)] text-ink-muted"
        }`}>
          Drag to orbit · Scroll to zoom
        </div>
      )}
    </div>
  );
}
