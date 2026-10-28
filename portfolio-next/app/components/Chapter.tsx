import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import FigureRow from "./FigureRow";
import type { Figure } from "./FigureStack";

export interface Stat {
  value: string;
  label: string;
}

export interface Highlight {
  lead: string;
  body: string;
}

export interface Hero {
  src: string;
  alt: string;
  /** Tailwind aspect class for the frame; defaults to 16/9 */
  aspect?: string;
  /** Tailwind max-width class for the frame; defaults to 1100px */
  maxW?: string;
}

interface ChapterProps {
  eyebrow: string;
  title: string;
  intro: string;
  dark?: boolean;
  /** Large lead image shown above the heading */
  hero?: Hero;
  /** Pair of captioned figures shown above the heading, in place of `hero` */
  heroRow?: Figure[];
  stats?: Stat[];
  highlights?: Highlight[];
  /** Tools and methods, shown as pills at the end of the chapter */
  tags?: string[];
  reportHref?: string;
  /** Media area: gallery, splat viewer, model viewer, videos */
  children?: ReactNode;
}

/** One full-width project chapter in the alternating light/dark rhythm. */
export default function Chapter({
  eyebrow,
  title,
  intro,
  dark = false,
  hero,
  heroRow,
  stats,
  highlights,
  tags,
  reportHref,
  children,
}: ChapterProps) {
  const text = dark ? "text-snow" : "text-ink";
  const muted = dark ? "text-snow-muted" : "text-ink-muted";
  const accent = dark ? "text-azure-bright" : "text-azure";
  const divider = dark ? "border-[rgba(255,255,255,0.14)]" : "border-[rgba(0,0,0,0.1)]";

  return (
    <section className={`${dark ? "bg-night" : "bg-paper"} py-28 max-[734px]:py-20`}>
      {heroRow && heroRow.length > 0 && (
        <Reveal className="mb-16 max-[734px]:mb-10">
          <FigureRow figures={heroRow} dark={dark} tall />
        </Reveal>
      )}

      {hero && (
        <Reveal className="mb-16 max-[734px]:mb-10">
          <div className={`mx-auto ${hero.maxW ?? "max-w-[1100px]"} px-6`}>
            <div
              className={`relative ${hero.aspect ?? "aspect-[16/9]"} w-full overflow-hidden rounded-[1.75rem] ${
                dark ? "bg-night2" : "bg-paper2"
              }`}
            >
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                sizes="(max-width: 734px) 92vw, 1100px"
                className="object-contain"
              />
            </div>
          </div>
        </Reveal>
      )}

      <Reveal>
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <p className={`mb-3 text-[14px] font-semibold ${accent}`}>{eyebrow}</p>
          <h2
            className={`mb-6 font-semibold tracking-[-0.02em] ${text}`}
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08 }}
          >
            {title}
          </h2>
          <p className={`mx-auto max-w-[620px] text-[1.06rem] leading-[1.6] ${muted}`}>{intro}</p>
        </div>
      </Reveal>

      {children && <Reveal className="mt-14 max-[734px]:mt-10">{children}</Reveal>}

      {stats && stats.length > 0 && (
        <Reveal>
          <div className="mx-auto mt-16 flex max-w-[800px] flex-wrap justify-center gap-x-0 gap-y-8 px-6 max-[734px]:mt-12">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex min-w-[160px] flex-1 flex-col items-center px-6 ${
                  i > 0 ? `border-l ${divider} max-[500px]:border-l-0` : ""
                }`}
              >
                <span className={`text-[2rem] font-semibold tracking-[-0.02em] ${text}`}>{value}</span>
                <span className={`mt-1 text-[13px] ${muted}`}>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {highlights && highlights.length > 0 && (
        <Reveal>
          <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-3 gap-10 px-6 max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[734px]:mt-12">
            {highlights.map(({ lead, body }) => (
              <p key={lead} className={`text-[15px] leading-[1.65] ${muted}`}>
                <strong className={`font-semibold ${text}`}>{lead}</strong> {body}
              </p>
            ))}
          </div>
        </Reveal>
      )}

      {tags && tags.length > 0 && (
        <Reveal>
          <div className="mx-auto mt-14 flex max-w-[800px] flex-wrap justify-center gap-3 px-6 max-[734px]:mt-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-4 py-1.5 text-[13px] ${
                  dark
                    ? "bg-[rgba(255,255,255,0.1)] text-snow-muted"
                    : "bg-[rgba(0,0,0,0.05)] text-ink-muted"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      )}

      {reportHref && (
        <Reveal>
          <div className="mt-12 text-center max-[734px]:mt-10">
            <a
              href={reportHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[1.05rem] no-underline hover:underline ${accent}`}
            >
              Read the full report&nbsp;›
            </a>
          </div>
        </Reveal>
      )}
    </section>
  );
}
