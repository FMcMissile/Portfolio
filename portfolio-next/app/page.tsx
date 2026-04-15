import Link from "next/link";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-12 max-[900px]:px-6 py-5 bg-[rgba(255,255,255,0.92)] backdrop-blur-md border-b border-black/8">
        <Link href="/" className="no-underline flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.svg" alt="JT Logo" className="h-10 w-auto" />
        </Link>
        <ul className="flex gap-10 list-none max-[900px]:hidden">
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="font-mono text-[11px] text-muted no-underline tracking-[0.1em] uppercase hover:text-accent transition-colors duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <div className="min-h-screen flex flex-col justify-center pt-28 px-12 max-[900px]:px-6 relative overflow-hidden">
        {/* FSAE photo background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fsae-bg.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ opacity: 0.92, transform: "scaleX(-1)" }}
        />
        {/* dark gradient overlay so text stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(238,244,247,0.88) 40%, rgba(238,244,247,0.2) 75%)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,168,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(91,168,196,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          }}
          aria-hidden
        />
        <div className="hero-tag font-mono text-[13px] text-accent tracking-[0.2em] uppercase mb-6 flex items-center gap-3 relative font-bold">
          Freshman · Santa Clara University · Class of 2029
        </div>
        <h1 className="font-extrabold leading-[0.95] tracking-[-0.03em] mb-6 text-accent relative" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          Julian<span className="text-red block">Trotzenberg</span>
        </h1>
        <p className="text-[1.1rem] text-primary max-w-[540px] mb-12 leading-[1.7] relative">
          Mechanical engineering student building{" "}
          <strong className="text-primary font-semibold">real hardware</strong> — from custom wind
          tunnels and aerodynamics experiments to 3D-printed flight systems. Targeting roles in{" "}
          <strong className="text-primary font-semibold">aerospace &amp; propulsion</strong> and{" "}
          <strong className="text-primary font-semibold">electric vehicle</strong> development.
        </p>
        <div className="flex gap-4 flex-wrap relative">
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-[0.85rem] bg-red text-white font-mono text-[12px] font-bold tracking-[0.1em] uppercase no-underline hover:opacity-85 hover:-translate-y-px transition-all duration-200">
            View Work ↓
          </a>
          <a href="mailto:jtrotzenberg@scu.edu" className="inline-flex items-center gap-2 px-8 py-[0.85rem] bg-transparent text-primary font-mono text-[12px] tracking-[0.1em] uppercase no-underline border border-red/28 hover:border-red hover:text-red transition-all duration-200">
            Get in Touch
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-muted tracking-[0.15em] uppercase">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-red to-transparent animate-scroll-pulse" />
        </div>
      </div>

      {/* SKILLS TICKER */}
      <div className="bg-bg2 border-t border-b border-black/8 py-6 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {[
            "Fusion 360","·","Aerodynamics","·","3D Printing","·","CAD / FEA","·",
            "Avionics Integration","·","Wind Tunnel Testing","·","Product Design","·",
            "NACA Airfoils","·","Rapid Prototyping","·","Data Analysis","·",
            "L/D Optimization","·","Gas Engine Rebuild","·","Flight Systems","·",
            "Fusion 360","·","Aerodynamics","·","3D Printing","·","CAD / FEA","·",
            "Avionics Integration","·","Wind Tunnel Testing","·","Product Design","·",
            "NACA Airfoils","·","Rapid Prototyping","·","Data Analysis","·",
            "L/D Optimization","·","Gas Engine Rebuild","·","Flight Systems","·",
          ].map((item, i) => (
            <span key={i} className={`font-mono text-[12px] tracking-[0.1em] uppercase flex-shrink-0 ${
              ["Fusion 360","3D Printing","Avionics Integration","Product Design","NACA Airfoils","Data Analysis","Gas Engine Rebuild"].includes(item)
                ? "text-red" : "text-muted"
            }`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="px-12 max-[900px]:px-6 py-24 max-w-[1200px] mx-auto" id="projects">
        <div className="section-label font-mono text-[11px] text-red tracking-[0.2em] uppercase mb-3 flex items-center gap-3">Selected Work</div>
        <h2 className="font-extrabold tracking-[-0.03em] leading-[1.05] mb-12 text-accent" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Engineering Projects
        </h2>

        {/* ── Project 01 — Wind Tunnel ── full-width carousel + horizontal text ── */}
        <div className="mb-8">
          {/* Edge-to-edge carousel */}
          <div className="relative w-screen left-1/2 -translate-x-1/2">
            {/* Left fade */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
            <Carousel
              images={[
                { src: "/images/wind-tunnel-setup.jpg", alt: "Full wind tunnel setup" },
                { src: "/images/wind-tunnel-building.jpg", alt: "Building the wind tunnel" },
                { src: "/images/wind-tunnel-inlet.jpg", alt: "Straw laminar flow inlet" },
                { src: "/images/wind-tunnel-airfoils.jpg", alt: "7 NACA 0015 airfoils" },
              ]}
              containerClass="aspect-[3/1] max-[900px]:aspect-[4/3]"
              fit="cover"
            />
          </div>
          {/* Horizontal 3-column text section */}
          <div className="grid grid-cols-3 max-[900px]:grid-cols-1 border border-black/8 border-t-0 transition-colors duration-300 hover:border-red/28">
            {/* Col 1: label + title + stats */}
            <div className="p-8 border-r border-black/8 max-[900px]:border-r-0 max-[900px]:border-b flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-[11px] text-muted tracking-[0.2em] mb-2">01 / FEATURED</div>
                <div className="inline-block font-mono text-[10px] text-red bg-red/7 border border-red/28 px-3 py-1 tracking-[0.15em] uppercase mb-4">Aerodynamics Research</div>
                <h3 className="text-[1.4rem] font-extrabold tracking-[-0.02em] leading-[1.15] text-accent">Subsonic Wing Sweep Angle Optimization</h3>
              </div>
              <div className="flex gap-5 flex-wrap items-end justify-between">
                <div className="flex gap-5 flex-wrap">
                  {[{ val: "1,000+", label: "Data Points" }, { val: "3", label: "Wind Speeds" }, { val: "7", label: "Airfoils" }].map(({ val, label }) => (
                    <div key={label} className="flex flex-col">
                      <span className="font-mono text-[1rem] font-bold text-red">{val}</span>
                      <span className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase mt-0.5">{label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/Aerodynamics Research Project Julian.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-red tracking-[0.1em] uppercase no-underline border border-red/28 px-3 py-2 hover:bg-red hover:text-white transition-all duration-200 flex-shrink-0"
                >
                  View Report →
                </a>
              </div>
            </div>
            {/* Col 2: description */}
            <div className="p-8 border-r border-black/8 max-[900px]:border-r-0 max-[900px]:border-b">
              <p className="text-[0.87rem] text-muted leading-[1.8]">
                Designed and built a custom wind tunnel from scratch to experimentally determine the optimal wing sweep angle for maximizing lift-to-drag ratio — corroborating variable-sweep logic used in the F-14 Tomcat.
              </p>
            </div>
            {/* Col 3: bullets */}
            <div className="p-8">
              <ul className="proj-bullets list-none flex flex-col gap-3">
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Designed 7 NACA 0015 airfoils (0°–60° sweep) in Fusion 360, 3D printed to 0.2mm accuracy on Bambu X1 Carbon</li>
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Engineered 2 wind tunnel iterations with laminar flow straw filter, pulley-based drag measurement, and rail-mounted force isolation cart</li>
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Drag decreases significantly past 30° sweep; lift follows a cos² relationship — supporting variable-sweep aircraft design</li>
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Proposed CFD simulation as validated next step to eliminate experimental uncertainty</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Project 02 — PenSafe ── full-width carousel + horizontal text ── */}
        <div className="mb-8">
          <div className="relative w-screen left-1/2 -translate-x-1/2">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
            <Carousel
              images={[
                { src: "/images/pencil-device.png", alt: "PenSafe retention device" },
                { src: "/images/pencil-held.png", alt: "Device held showing mount" },
                { src: "/images/pencil-cad.png", alt: "Exploded CAD diagram" },
                { src: "/images/pencil-iterations.png", alt: "Design iteration sheet" },
              ]}
              containerClass="aspect-[3/1] max-[900px]:aspect-[4/3]"
              fit="contain"
            />
          </div>
          <div className="grid grid-cols-3 max-[900px]:grid-cols-1 border border-black/8 border-t-0 transition-colors duration-300 hover:border-red/28">
            {/* Col 1: label + title + stats */}
            <div className="p-8 border-r border-black/8 max-[900px]:border-r-0 max-[900px]:border-b flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-[11px] text-muted tracking-[0.2em] mb-2">02 / FEATURED</div>
                <div className="inline-block font-mono text-[10px] text-red bg-red/7 border border-red/28 px-3 py-1 tracking-[0.15em] uppercase mb-4">Product Design &amp; Prototyping</div>
                <h3 className="text-[1.4rem] font-extrabold tracking-[-0.02em] leading-[1.15] text-accent">PenSafe — E-Waste Reduction</h3>
              </div>
              <div className="flex gap-5 flex-wrap items-end justify-between">
                <div className="flex gap-5 flex-wrap">
                  {[{ val: "€0.86", label: "Unit Cost" }, { val: "10N", label: "Pull Test ✓" }, { val: "20", label: "Drop Tests ✓" }].map(({ val, label }) => (
                    <div key={label} className="flex flex-col">
                      <span className="font-mono text-[1rem] font-bold text-red">{val}</span>
                      <span className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase mt-0.5">{label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/Apple Pencil Project Julian - Engineering Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-red tracking-[0.1em] uppercase no-underline border border-red/28 px-3 py-2 hover:bg-red hover:text-white transition-all duration-200 flex-shrink-0"
                >
                  View Report →
                </a>
              </div>
            </div>
            {/* Col 2: description */}
            <div className="p-8 border-r border-black/8 max-[900px]:border-r-0 max-[900px]:border-b">
              <p className="text-[0.87rem] text-muted leading-[1.8]">
                Identified a real problem in a school IT department and delivered a full engineering design cycle — from user interviews through 4+ prototype iterations to a validated, client-approved product.
              </p>
            </div>
            {/* Col 3: bullets */}
            <div className="p-8">
              <ul className="proj-bullets list-none flex flex-col gap-3">
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Interviewed school IT director who reported 8 lost/damaged peripherals per year (~€120 each); defined 16-point design specification covering child safety, ergonomics, and material toxicity</li>
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Designed 6 competing concepts in Fusion 360 and selected optimal design through scoring and client feedback</li>
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Prototyped in cardboard then PLA — passed 10N magnetic pull test and survived 20 drops from 1.5m</li>
                <li className="text-[0.82rem] text-muted flex items-start gap-3 leading-[1.5]">Final product: €0.86 in filament, 26.72g, non-toxic PLA, no sharp edges, no choking hazards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Project 03 — RC Aircraft (5 images, mixed orientations) ──── */}
        <div className="border border-black/8 mb-6 transition-colors duration-300 hover:border-red/28">
          <Carousel
            images={[
              { src: "/images/rc-aircraft-complete.jpg", alt: "Completed Eclipson Wolf" },
              { src: "/images/rc-aircraft-assembly.jpg", alt: "Aircraft assembly" },
              { src: "/images/rc-aircraft-fuselage.jpg", alt: "Fuselage assembly" },
              { src: "/images/rc-aircraft-wing.jpg", alt: "Wing section" },
              { src: "/images/rc-aircraft-prop.jpg", alt: "Carbon prop and motor" },
            ]}
            containerClass="aspect-[4/3]"
            fit="contain"
          />
          <div className="p-8 px-10">
            <div className="font-mono text-[10px] text-muted tracking-[0.2em] mb-1">03</div>
            <div className="inline-block font-mono text-[10px] text-red bg-red/7 border border-red/28 px-2.5 py-0.5 tracking-[0.12em] uppercase mb-3">Avionics / Systems</div>
            <h3 className="text-[1.1rem] font-bold text-accent mb-2 tracking-[-0.01em] leading-[1.2]">RC Fixed-Wing Aircraft Build — Eclipson G1 Wolf</h3>
            <p className="text-[0.85rem] text-muted leading-[1.65] mb-4">
              End-to-end build of a 3D-printed fixed-wing RC aircraft. Printed all structural components on a Bambu X1 Carbon, integrated a full avionics stack (brushless motor, ESC, servos, FlySky receiver, LiPo), and ran full systems checks prior to flight. Performed FEA on structural brackets and sourced a carbon-fiber Aeronaut CAM prop.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {["Bambu X1 Carbon printed", "Full avionics integration", "Carbon-fiber prop", "FEA structural analysis", "FlySky FS-iA10B"].map((s) => (
                <span key={s} className="font-mono text-[10px] text-red tracking-[0.05em] bg-red/7 px-2.5 py-1.5 border border-red/28">{s}</span>
              ))}
            </div>
          </div>
        </div>


        {/* ── Project 05 — Raptor Model ──── */}
        <div className="border border-black/8 mb-6 transition-colors duration-300 hover:border-red/28">
          <Carousel
            images={[
              { src: "/images/raptor-model.jpg", alt: "SpaceX Raptor engine model" },
              { src: "/images/raptor-model-held.jpg", alt: "Raptor model held" },
            ]}
            containerClass="aspect-[4/3]"
            fit="contain"
          />
          <div className="p-8 px-10">
            <div className="font-mono text-[10px] text-muted tracking-[0.2em] mb-1">05</div>
            <div className="inline-block font-mono text-[10px] text-red bg-red/7 border border-red/28 px-2.5 py-0.5 tracking-[0.12em] uppercase mb-3">3D Printing / Modeling</div>
            <h3 className="text-[1.1rem] font-bold text-accent mb-2 tracking-[-0.01em] leading-[1.2]">SpaceX Raptor Engine — 3D Printed Scale Model</h3>
            <p className="text-[0.85rem] text-muted leading-[1.65] mb-4">
              Sourced and printed a detailed multi-part scale model of the SpaceX Raptor engine. Multi-material print in black and white PLA capturing turbopumps, plumbing, and bell geometry. Driven by interest in full-flow staged combustion propulsion.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {["Multi-material PLA", "Full-flow cycle reference"].map((s) => (
                <span key={s} className="font-mono text-[10px] text-red tracking-[0.05em] bg-red/7 px-2.5 py-1.5 border border-red/28">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Project 07 — Rocket Propellant ── */}
        <div className="border border-black/8 border-t-0 mb-6 transition-colors duration-300 hover:border-red/28">
          <Carousel
            images={[
              { src: "/images/rocket-fuel-cooking.jpg", alt: "Cooking sugar fuel mixture" },
              { src: "/images/rocket-fuel-kno3.jpg", alt: "Potassium nitrate oxidizer" },
              { src: "/images/rocket-fuel-ingredients.jpg", alt: "Fuel ingredients setup" },
            ]}
            containerClass="aspect-[4/3]"
            fit="contain"
          />
          {/* Ignition video */}
          <div className="border-t border-black/8 bg-bg2">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full max-h-[420px] object-contain"
            >
              <source src="/images/rocket-ignition.mov" type="video/mp4" />
            </video>
          </div>
          <div className="p-8 px-10">
            <div className="font-mono text-[10px] text-muted tracking-[0.2em] mb-1">07</div>
            <div className="inline-block font-mono text-[10px] text-red bg-red/7 border border-red/28 px-2.5 py-0.5 tracking-[0.12em] uppercase mb-3">Propulsion / Chemistry</div>
            <h3 className="text-[1.1rem] font-bold text-accent mb-2 tracking-[-0.01em] leading-[1.2]">Solid Rocket Propellant — Sugar Fuel Synthesis &amp; Ignition Test</h3>
            <p className="text-[0.85rem] text-muted leading-[1.65] mb-4">
              Researched and synthesized a solid rocket propellant (potassium nitrate / sugar caramel mixture). Fabricated a simple nozzle casing and conducted a controlled ignition test. Built hands-on understanding of oxidizer-fuel ratios, burn characteristics, and energetic material handling.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {["KNO₃ / sugar mixture", "Custom nozzle casing", "Ignition tested", "Burn rate observed"].map((s) => (
                <span key={s} className="font-mono text-[10px] text-red tracking-[0.05em] bg-red/7 px-2.5 py-1.5 border border-red/28">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-black/8 mx-12 max-[900px]:mx-6" />

      {/* SKILLS */}
      <div className="px-12 max-[900px]:px-6 py-24 max-w-[1200px] mx-auto" id="skills">
        <div className="section-label font-mono text-[11px] text-red tracking-[0.2em] uppercase mb-3 flex items-center gap-3">Capabilities</div>
        <h2 className="font-extrabold tracking-[-0.03em] leading-[1.05] mb-12 text-accent" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Skills &amp; Tools
        </h2>
        <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-px bg-black/8">
          {[
            { title: "// CAD & Simulation", items: ["Fusion 360 (parametric modeling)", "FEA structural analysis", "CFD (familiarization)", "NACA airfoil design", "Assembly & tolerance design"] },
            { title: "// Manufacturing", items: ["FDM 3D printing (Bambu X1 Carbon)", "Multi-material PLA printing", "Gas engine disassembly & rebuild", "Mechanical assembly", "Rapid prototyping"] },
            { title: "// Engineering Practice", items: ["Experimental design & testing", "Data collection & analysis (1K+ pts)", "Avionics integration (ESC / servo / Rx)", "Design spec scoring (16-point matrix)", "Technical documentation"] },
          ].map(({ title, items }) => (
            <div key={title} className="bg-bg p-8">
              <div className="font-mono text-[11px] text-red tracking-[0.15em] uppercase mb-5">{title}</div>
              <ul className="skill-list list-none flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="text-[0.9rem] text-muted flex items-center gap-2.5">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-black/8 mx-12 max-[900px]:mx-6" />

      {/* ABOUT */}
      <div className="px-12 max-[900px]:px-6 py-24 max-w-[1200px] mx-auto" id="about">
        <div className="section-label font-mono text-[11px] text-red tracking-[0.2em] uppercase mb-3 flex items-center gap-3">Background</div>
        <h2 className="font-extrabold tracking-[-0.03em] leading-[1.05] mb-12 text-accent" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          About Me
        </h2>
        <div className="max-w-[640px]">
          <div className="text-[1rem] text-muted leading-[1.8]">
            <p className="mb-5">
              I&apos;m a{" "}
              <strong className="text-primary font-semibold">freshman mechanical engineering student at Santa Clara University</strong>
              , building a track record of hands-on technical projects before my first internship. My work spans aerodynamics research, avionics integration, engine rebuilds, product design, and propulsion chemistry.
            </p>
            <p className="mb-5">
              I&apos;m drawn to engineering problems where{" "}
              <strong className="text-primary font-semibold">physics meets hardware</strong> — where you can&apos;t just simulate your way to an answer and have to build, test, and iterate. That instinct led me to build a wind tunnel from scratch, fly a 3D-printed aircraft, and tear down a 100cc engine.
            </p>
            <p>
              I&apos;m targeting{" "}
              <strong className="text-primary font-semibold">summer 2026 internships</strong> in aerospace propulsion, vehicle dynamics, structures, or systems integration at companies pushing the frontier of flight and electrification.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="bg-bg2 border-t border-black/8" id="contact">
        <div className="max-w-[1200px] mx-auto px-12 max-[900px]:px-6 py-20 flex justify-between items-center gap-12 flex-wrap max-[900px]:flex-col">
          <div>
            <div className="section-label font-mono text-[11px] text-red tracking-[0.2em] uppercase mb-3 flex items-center gap-3">Available Summer 2026</div>
            <div className="font-extrabold tracking-[-0.03em] text-accent leading-[1.1]" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              Let&apos;s build<br />something fast.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { href: "mailto:jtrotzenberg@scu.edu", icon: "@", label: "jtrotzenberg@scu.edu" },
              { href: "tel:5622097315", icon: "✆", label: "(562) 209-7315" },
              { href: "https://linkedin.com/in/julian-trotzenberg-b5a53b2a8", icon: "in", label: "linkedin.com/in/julian-trotzenberg", external: true },
            ].map(({ href, icon, label, external }) => (
              <a key={href} href={href} className="flex items-center gap-4 font-mono text-[13px] text-muted no-underline hover:text-red transition-colors duration-200"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <div className="w-9 h-9 border border-black/8 flex items-center justify-center text-[14px] flex-shrink-0">{icon}</div>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-black/8 px-12 max-[900px]:px-6 py-6 flex justify-between items-center max-[900px]:flex-col max-[900px]:gap-2 max-[900px]:text-center">
        <span className="font-mono text-[11px] text-muted tracking-[0.1em]">© 2026 Julian Trotzenberg</span>
        <span className="font-mono text-[11px] text-muted tracking-[0.1em]">Mechanical Engineering · Santa Clara University · Class of 2029</span>
      </footer>
    </>
  );
}
