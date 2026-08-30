"use client";
import Link from "next/link";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(22,22,23,0.8)] backdrop-blur-xl backdrop-saturate-[1.8]">
      <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-6">
        <Link href="/" className="flex items-center no-underline" aria-label="Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.svg" alt="" className="h-7 w-auto" />
        </Link>
        <ul className="flex list-none items-center gap-8 max-[734px]:gap-5">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[12px] font-normal tracking-[0.01em] text-[#d6d6d8] no-underline transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
