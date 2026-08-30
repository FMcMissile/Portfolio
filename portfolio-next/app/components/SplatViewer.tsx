"use client";
import { useEffect, useRef, useState } from "react";

interface SplatViewerProps {
  /** Path to a .splat / .ksplat / .ply file under public/ */
  src: string;
  dark?: boolean;
}

/** Interactive Gaussian splat viewer. Drag to orbit, scroll to zoom. */
export default function SplatViewer({ src, dark = false }: SplatViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let disposed = false;
    let viewer: { dispose?: () => void; start?: () => void } | null = null;

    (async () => {
      try {
        const GS = await import("@mkkellogg/gaussian-splats-3d");
        if (disposed || !mountRef.current) return;

        const v = new GS.Viewer({
          rootElement: mountRef.current,
          cameraUp: [0, 1, 0],
          initialCameraPosition: [0, 0.6, 3.2],
          initialCameraLookAt: [0, 0, 0],
          selfDrivenMode: true,
          useBuiltInControls: true,
          sharedMemoryForWorkers: false,
          antialiased: true,
        });
        viewer = v;

        await v.addSplatScene(src, {
          showLoadingUI: false,
          progressiveLoad: true,
          splatAlphaRemovalThreshold: 5,
        });
        if (disposed) return;
        v.start();
        setStatus("ready");
      } catch (err) {
        console.error("SplatViewer failed to load scene:", err);
        if (!disposed) setStatus("error");
      }
    })();

    return () => {
      disposed = true;
      try {
        viewer?.dispose?.();
      } catch {
        /* viewer may already be torn down */
      }
    };
  }, [src]);

  return (
    <div
      className={`relative h-[560px] max-[734px]:h-[380px] w-full overflow-hidden rounded-[1.75rem] ${
        dark ? "bg-night2" : "bg-paper2"
      }`}
    >
      <div ref={mountRef} className="absolute inset-0 [&>canvas]:!h-full [&>canvas]:!w-full" />
      {status === "loading" && (
        <div className={`absolute inset-0 flex items-center justify-center text-[13px] ${dark ? "text-snow-muted" : "text-ink-muted"}`}>
          Loading 3D scan…
        </div>
      )}
      {status === "error" && (
        <div className={`absolute inset-0 flex items-center justify-center text-[13px] ${dark ? "text-snow-muted" : "text-ink-muted"}`}>
          The 3D scan could not be loaded.
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
