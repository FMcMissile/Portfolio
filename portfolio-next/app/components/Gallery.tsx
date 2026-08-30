"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface GalleryItem {
  type?: "image" | "video";
  src: string;
  alt?: string;
  /** cover fills the tile; contain shows the whole asset on a soft background */
  fit?: "cover" | "contain";
  /** wide tiles use a 16/10 aspect instead of 4/3 (videos default to 16/9) */
  wide?: boolean;
  /** portrait tiles use a 3/4 aspect */
  portrait?: boolean;
}

interface GalleryProps {
  items: GalleryItem[];
  dark?: boolean;
  /** Taller tiles, for short galleries that get room to breathe */
  tall?: boolean;
}

/** Apple-style horizontal snap gallery with rounded tiles and paddle controls. */
export default function Gallery({ items, dark = false, tall = false }: GalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  /** true when every tile is visible at once, so the row is centered and paddles are hidden */
  const [fits, setFits] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
    setFits(el.scrollWidth <= el.clientWidth + 1);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const step = slide ? slide.offsetWidth + 20 : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const tileBg = dark ? "bg-night2" : "bg-paper2";
  const paddle = dark
    ? "bg-[rgba(255,255,255,0.1)] text-snow hover:bg-[rgba(255,255,255,0.18)] disabled:opacity-30"
    : "bg-[rgba(0,0,0,0.06)] text-ink hover:bg-[rgba(0,0,0,0.12)] disabled:opacity-30";

  return (
    <div>
      <div
        ref={trackRef}
        className={`no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.5rem,calc((100vw-1100px)/2))] scroll-px-[max(1.5rem,calc((100vw-1100px)/2))] ${
          fits ? "justify-center" : ""
        }`}
      >
        {items.map((item) => {
          const isVideo = item.type === "video";
          const aspect = isVideo
            ? "aspect-[16/9]"
            : item.portrait
              ? "aspect-[3/4]"
              : item.wide
                ? "aspect-[16/10]"
                : "aspect-[4/3]";
          return (
            <div
              key={item.src}
              data-slide
              className={`relative ${
                tall
                  ? "h-[640px] max-[900px]:h-[520px] max-[734px]:h-[420px]"
                  : "h-[420px] max-[734px]:h-[300px]"
              } ${aspect} flex-shrink-0 snap-start overflow-hidden rounded-[1.5rem] ${
                item.fit === "contain" ? "bg-paper2" : tileBg
              }`}
            >
              {isVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt ?? ""}
                  fill
                  sizes="(max-width: 734px) 90vw, 620px"
                  className={item.fit === "contain" ? "object-contain p-4" : "object-cover"}
                />
              )}
            </div>
          );
        })}
      </div>

      {items.length > 1 && !fits && (
        <div className="mx-auto mt-5 flex max-w-[1100px] justify-end gap-3 px-6">
          <button
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label="Previous"
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[15px] transition-all duration-200 ${paddle}`}
          >
            ‹
          </button>
          <button
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label="Next"
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[15px] transition-all duration-200 ${paddle}`}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
