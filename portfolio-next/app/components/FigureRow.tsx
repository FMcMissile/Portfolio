import Image from "next/image";
import type { Figure } from "./FigureStack";

interface FigureRowProps {
  figures: Figure[];
  dark?: boolean;
  /** Taller frames, for a row that leads a chapter */
  tall?: boolean;
}

/**
 * Side by side figures on one row, stacking on phones. Suits a pair meant to
 * be compared, where the horizontal Gallery would put them in separate views.
 */
export default function FigureRow({ figures, dark = false, tall = false }: FigureRowProps) {
  const caption = dark ? "text-snow-muted" : "text-ink-muted";
  const frame = dark ? "bg-night2" : "bg-paper2";
  const size = tall
    ? "h-[520px] max-[900px]:h-[400px] max-[734px]:h-[400px]"
    : "h-[420px] max-[900px]:h-[340px] max-[734px]:h-[380px]";

  return (
    <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 px-6 max-[734px]:grid-cols-1 max-[734px]:gap-10">
      {figures.map(({ src, alt, width, height, caption: text }) => (
        <figure key={src} className="m-0">
          <div className={`flex items-center justify-center overflow-hidden rounded-[1.5rem] p-6 ${frame}`}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 734px) 88vw, 520px"
              className={`w-auto max-w-full object-contain ${size}`}
            />
          </div>
          {text && (
            <figcaption className={`mt-4 text-center text-[14px] leading-[1.5] ${caption}`}>
              {text}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
