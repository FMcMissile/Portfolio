import type { ReactNode } from "react";
import Reveal from "./Reveal";

export interface Stat {
  value: string;
  label: string;
}

export interface Highlight {
  lead: string;
  body: string;
}

interface ChapterProps {
  eyebrow: string;
  title: string;
  intro: string;
  dark?: boolean;
  stats?: Stat[];
  highlights?: Highlight[];
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
  stats,
  highlights,
  reportHref,
  children,
}: ChapterProps) {
  const text = dark ? "text-snow" : "text-ink";
  const muted = dark ? "text-snow-muted" : "text-ink-muted";
  const accent = dark ? "text-azure-bright" : "text-azure";
  const divider = dark ? "border-[rgba(255,255,255,0.14)]" : "border-[rgba(0,0,0,0.1)]";

  return (
    <section className={`${dark ? "bg-night" : "bg-paper"} py-28 max-[734px]:py-20`}>
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
