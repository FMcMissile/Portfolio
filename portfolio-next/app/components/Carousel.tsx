"use client";
import { useState, useCallback, useEffect, useRef } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  /** Tailwind class controlling the container size, e.g. "aspect-[4/3]" */
  containerClass?: string;
  /** object-contain keeps full image visible; object-cover fills the frame */
  fit?: "contain" | "cover";
  /** Auto-advance interval in ms (default 3500). Pass 0 to disable. */
  autoPlay?: number;
}

export default function Carousel({
  images,
  containerClass = "aspect-[4/3]",
  fit = "contain",
  autoPlay = 3500,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  const single = images.length === 1;

  // Auto-advance when visible
  useEffect(() => {
    if (single || autoPlay === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const interval = setInterval(() => {
      if (visibleRef.current && !paused) {
        setCurrent((c) => (c + 1) % images.length);
      }
    }, autoPlay);

    return () => { observer.disconnect(); clearInterval(interval); };
  }, [single, autoPlay, paused, images.length]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-bg ${containerClass}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide track */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map(({ src, alt }) => (
          <div key={src} className="relative w-full h-full flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} block`}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next — hidden when single image */}
      {!single && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-0 top-0 h-full px-3 flex items-center text-gray-500 hover:text-gray-900 bg-gradient-to-r from-white/60 to-transparent transition-colors duration-200 cursor-pointer"
          >
            <span className="font-mono text-[18px] leading-none select-none">←</span>
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-0 top-0 h-full px-3 flex items-center text-gray-500 hover:text-gray-900 bg-gradient-to-l from-white/60 to-transparent transition-colors duration-200 cursor-pointer"
          >
            <span className="font-mono text-[18px] leading-none select-none">→</span>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {!single && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-1.5 h-1.5 transition-all duration-200 cursor-pointer ${
                i === current ? "bg-red scale-125" : "bg-black/25 hover:bg-black/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {!single && (
        <div className="absolute top-3 right-3 font-mono text-[10px] text-gray-500 tracking-[0.15em] bg-white/70 px-2 py-0.5">
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
