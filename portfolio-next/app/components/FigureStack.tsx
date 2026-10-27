import Image from "next/image";

export interface Figure {
  src: string;
  alt: string;
  /** Intrinsic width / height, used to reserve the right space */
  width: number;
  height: number;
  caption?: string;
}

interface FigureStackProps {
  figures: Figure[];
  dark?: boolean;
}

/**
 * Vertical stack of full-width figures with captions underneath. Suits wide
 * plots, which would letterbox badly in the horizontal Gallery tiles.
 */
export default function FigureStack({ figures, dark = false }: FigureStackProps) {
  const caption = dark ? "text-snow-muted" : "text-ink-muted";
  const frame = dark ? "bg-night2" : "bg-paper2";

  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-16 px-6 max-[734px]:gap-10">
      {figures.map(({ src, alt, width, height, caption: text }) => (
        <figure key={src} className="m-0">
          <div className={`overflow-hidden rounded-[1.5rem] ${frame}`}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 734px) 92vw, 1100px"
              className="h-auto w-full"
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
