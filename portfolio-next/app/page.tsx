import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Gallery from "./components/Gallery";
import Chapter from "./components/Chapter";
import SplatViewer from "./components/SplatViewer";
import ModelViewer from "./components/ModelViewer";

const modelsDir = path.join(process.cwd(), "public", "models");
function findModel(names: string[]): string | null {
  const hit = names.find((n) => existsSync(path.join(modelsDir, n)));
  return hit ? `/models/${hit}` : null;
}

export default function Home() {
  const raptorSplat = findModel(["raptor.ksplat", "raptor.splat", "raptor.ply"]);
  const uprightModel = findModel(["upright.glb", "upright.gltf"]);

  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="relative flex h-[100svh] flex-col justify-end overflow-hidden bg-night">
        <Image
          src="/images/IMG_5975.jpg"
          alt="Julian in the SCU FSAE car"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "45% 20%" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 38%, rgba(0,0,0,0.08) 65%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1100px] px-6 pb-24 max-[734px]:pb-16">
          <p
            className="mb-3 text-[14px] font-semibold text-white/95"
            style={{ textShadow: "0 1px 14px rgba(0,0,0,0.85)" }}
          >
            Mechanical Engineering · Santa Clara University · Class of 2029
          </p>
          <h1
            className="mb-5 font-semibold tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", lineHeight: 1.02 }}
          >
            Julian Trotzenberg
          </h1>
          <p className="mb-9 max-w-[560px] text-[1.15rem] leading-[1.55] text-[#e8e8ed]">
            Wind tunnels, 3D printed parts, machined aluminum. Aiming at aerospace, propulsion,
            and electric vehicles.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-azure px-7 py-3 text-[15px] font-medium text-white no-underline transition-colors duration-200 hover:bg-azure-bright"
            >
              See the work
            </a>
            <a
              href="mailto:jtrotzenberg@scu.edu"
              className="rounded-full border border-[rgba(255,255,255,0.4)] px-7 py-3 text-[15px] font-medium text-white no-underline backdrop-blur-sm transition-colors duration-200 hover:border-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      {/* PROJECTS INTRO */}
      <section id="projects" className="bg-paper2 py-24 max-[734px]:py-16">
        <Reveal>
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <h2
              className="mb-4 font-semibold tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}
            >
              Selected work.
            </h2>
            <p className="mx-auto max-w-[560px] text-[1.1rem] leading-[1.6] text-ink-muted">
              Seven projects, from a homemade wind tunnel to a first machined part.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 01 WIND TUNNEL (light) */}
      <Chapter
        eyebrow="Aerodynamics Research"
        title="A wind tunnel, built from scratch."
        intro="Seven 3D printed airfoils, three wind speeds, and over a thousand data points to find the wing sweep angle that maximizes lift to drag. The same variable sweep logic that shaped the F-14 Tomcat."
        stats={[
          { value: "1,000+", label: "Data points" },
          { value: "3", label: "Wind speeds" },
          { value: "7", label: "Airfoils tested" },
        ]}
        highlights={[
          {
            lead: "Designed in Fusion 360.",
            body: "Seven NACA 0015 airfoils spanning 0° to 60° of sweep, printed to 0.2 mm accuracy on a Bambu X1 Carbon.",
          },
          {
            lead: "Engineered for clean data.",
            body: "Two tunnel iterations with a laminar flow straw inlet, pulley based drag measurement, and a rail mounted force isolation cart.",
          },
          {
            lead: "A real result.",
            body: "Drag falls off sharply past 30° of sweep while lift follows a cos squared relationship, supporting variable sweep aircraft design.",
          },
        ]}
        reportHref="/Aerodynamics Research Project Julian.pdf"
      >
        <Gallery
          items={[
            { src: "/images/wind-tunnel-setup.jpg", alt: "Full wind tunnel setup" },
            { src: "/images/wind-tunnel-building.jpg", alt: "Building the wind tunnel" },
            { src: "/images/wind-tunnel-inlet.jpg", alt: "Straw laminar flow inlet" },
            { src: "/images/wind-tunnel-airfoils.jpg", alt: "Seven NACA 0015 airfoils", wide: true },
          ]}
        />
      </Chapter>

      {/* 02 PENSAFE (dark) */}
      <Chapter
        dark
        eyebrow="Product Design"
        title="PenSafe. Small part, big savings."
        intro="A school IT department was losing eight peripherals a year at about €120 each. One interview, six concepts, and four prototype iterations later: a tested retention device that costs €0.86 to print."
        stats={[
          { value: "€0.86", label: "Unit cost" },
          { value: "10 N", label: "Pull test passed" },
          { value: "20", label: "Drop tests survived" },
        ]}
        highlights={[
          {
            lead: "Started with an interview.",
            body: "Conversations with the IT director produced a 16 point design specification covering child safety, ergonomics, and material toxicity.",
          },
          {
            lead: "Chosen by scoring.",
            body: "Six competing concepts modeled in Fusion 360, narrowed through a weighted decision matrix and client feedback.",
          },
          {
            lead: "Proven by testing.",
            body: "The final PLA print passed a 10 N magnetic pull test and survived 20 drops from 1.5 m, with no sharp edges or choking hazards.",
          },
        ]}
        reportHref="/Apple Pencil Project Julian - Engineering Portfolio.pdf"
      >
        <Gallery
          dark
          items={[
            { src: "/images/pencil-device.png", alt: "PenSafe retention device", fit: "contain" },
            { src: "/images/pencil-held.png", alt: "Device held showing mount", fit: "contain" },
            { src: "/images/pencil-cad.png", alt: "Exploded CAD diagram", fit: "contain" },
            { src: "/images/pencil-iterations.png", alt: "Design iteration sheet", fit: "contain", wide: true },
          ]}
        />
      </Chapter>

      {/* 03 FPV DRONE (light) */}
      <Chapter
        eyebrow="Composites and Flight"
        title="A drone on a carbon fiber chassis."
        intro="An FPV drone built together with a friend, flying on a chassis we laid up ourselves in carbon fiber. From raw cloth and resin to a stiff, lightweight frame with the full flight stack mounted on top."
        highlights={[
          {
            lead: "Laid up by hand.",
            body: "Woven carbon fiber wrapped and cured over a printed core, giving a one piece frame instead of flat cut plates.",
          },
          {
            lead: "Built in two halves.",
            body: "Constructed as two shells with curvature designed for maximum roll rigidity to weight ratio.",
          },
          {
            lead: "A full flight stack.",
            body: "Flight controller and ESC stack, FPV camera, and four brushless motors wired directly onto the frame.",
          },
        ]}
      >
        <Gallery
          items={[
            { src: "/images/drone-sunset.jpg", alt: "FPV drone in a field at sunset", wide: true },
            { src: "/images/drone-skyline.jpg", alt: "FPV drone in front of the Long Beach skyline", wide: true },
            { src: "/images/drone-electronics.jpg", alt: "Flight controller stack mounted on the bare chassis" },
            { src: "/images/drone-chassis.jpg", alt: "Carbon fiber chassis fresh out of layup", wide: true },
            { src: "/images/drone-iterations.jpg", alt: "Two chassis iterations side by side" },
          ]}
        />
      </Chapter>

      {/* 04 RC AIRCRAFT (dark) */}
      <Chapter
        dark
        eyebrow="Avionics and Systems"
        title="An aircraft, part by part."
        intro="An Eclipson Model G1 Wolf, 3D printed on a Bambu X1 Carbon and fitted with a full avionics stack: brushless motor, ESC, servos, FlySky receiver, and LiPo power. An ongoing build, currently waiting for me back in Germany."
      >
        <Gallery
          dark
          items={[
            { src: "/images/rc-aircraft-complete.jpg", alt: "Completed Eclipson Wolf", wide: true },
            { src: "/images/rc-aircraft-assembly.jpg", alt: "Aircraft assembly" },
            { src: "/images/rc-aircraft-fuselage.jpg", alt: "Fuselage assembly" },
            { src: "/images/rc-aircraft-wing.jpg", alt: "Wing section" },
            { src: "/images/rc-aircraft-prop.jpg", alt: "Carbon fiber prop and motor" },
          ]}
        />
      </Chapter>

      {/* 05 CNC / AMD (light) */}
      <Chapter
        eyebrow="CNC Machining"
        title="Machined in aluminum."
        intro="As Co-STEAM Chair of Alpha Kappa Psi, I organized a company visit to AMD. To mark the event, I designed and CNC machined a custom aluminum piece engraved AMD × AKΨ."
        highlights={[
          {
            lead: "First chips.",
            body: "CAM setup, workholding, and toolpaths for a first machined part, cut in 6061 aluminum.",
          },
          {
            lead: "Engraved to mark the event.",
            body: "Custom AMD × AKΨ engraving designed to commemorate the visit, hosted by Jerry Wong of AMD.",
          },
          {
            lead: "Beyond the shop.",
            body: "Coordinated the visit end to end with Co-STEAM Chair Justin Shao, from outreach to the on-site program.",
          },
        ]}
      >
        <Gallery
          items={[
            { src: "/images/amd-cnc-part.jpg", alt: "CNC machined AMD x AKPsi aluminum block" },
            { src: "/images/amd-cnc-car.jpg", alt: "Sitting in the FSAE car at the AMD event" },
            { src: "/images/amd-event-group.jpg", alt: "With Co-STEAM Chair Justin Shao and Jerry Wong from AMD", portrait: true },
            { type: "video", src: "/images/amd-cnc-video1.mp4" },
            { type: "video", src: "/images/amd-cnc-video2.mp4" },
          ]}
        />
      </Chapter>

      {/* 06 RAPTOR (dark) */}
      <Chapter
        dark
        eyebrow="Propulsion"
        title="Desktop Raptor."
        intro="A multi-part scale model of the SpaceX Raptor engine, printed in black and white PLA with turbopumps, plumbing, and bell geometry. Driven by an interest in full flow staged combustion."
        highlights={[
          {
            lead: "Multi-material print.",
            body: "Black and white PLA passes capturing the turbomachinery, plumbing runs, and nozzle bell.",
          },
          {
            lead: "Printed to learn.",
            body: "The easiest way to figure out how a rocket engine actually works is to put one on your desk.",
          },
          {
            lead: "Scanned in 3D.",
            body: raptorSplat
              ? "Captured as a Gaussian splat so you can orbit the real object right here on the page."
              : "A Gaussian splat capture is in the works, so you can soon orbit the real object right on this page.",
          },
        ]}
      >
        {raptorSplat ? (
          <div className="mx-auto max-w-[1100px] px-6">
            <SplatViewer src={raptorSplat} dark />
          </div>
        ) : (
          <>
            <Gallery
              dark
              items={[
                { src: "/images/raptor-model.jpg", alt: "SpaceX Raptor engine model", wide: true },
                { src: "/images/raptor-model-held.jpg", alt: "Raptor model held" },
              ]}
            />
            <p className="mt-6 text-center text-[13px] text-snow-muted">
              Interactive 3D scan coming soon.
            </p>
          </>
        )}
      </Chapter>

      {/* 07 SUGAR FUEL (light) */}
      <Chapter
        eyebrow="Chemistry"
        title="Sugar fuel. A bit of dangerous fun."
        intro="A potassium nitrate and sugar caramel propellant, mixed, cast, and ignited in the backyard. A first experiment in oxidizer to fuel ratios and burn behavior."
        highlights={[
          {
            lead: "KNO₃ and sugar.",
            body: "Caramelized propellant compound mixed to a controlled oxidizer to fuel ratio.",
          },
          {
            lead: "No questions asked.",
            body: "Thankfully none of my neighbors questioned the massive plume of smoke in the sky.",
          },
          {
            lead: "Ignition tested.",
            body: "Burn rate and plume behavior observed across test firings.",
          },
        ]}
      >
        <Gallery
          items={[
            { type: "video", src: "/images/rocket-ignition.mov" },
            { src: "/images/rocket-fuel-cooking.jpg", alt: "Cooking the sugar fuel mixture" },
            { src: "/images/rocket-fuel-kno3.jpg", alt: "Potassium nitrate oxidizer" },
            { src: "/images/rocket-fuel-ingredients.jpg", alt: "Fuel ingredients setup" },
          ]}
        />
      </Chapter>

      {/* FSAE UPRIGHT (dark, appears when the model file exists) */}
      {uprightModel && (
        <Chapter
          dark
          eyebrow="Formula SAE"
          title="The upright, in 3D."
          intro="A corner assembly designed and simulated in SolidWorks for the SCU Formula SAE car: upright, hub, and tire. Rendered here as an interactive model. Drag it around."
        >
          <div className="mx-auto max-w-[1100px] px-6">
            <ModelViewer src={uprightModel} dark />
          </div>
        </Chapter>
      )}

      {/* SKILLS */}
      <section id="skills" className="bg-paper2 py-28 max-[734px]:py-20">
        <Reveal>
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <h2
              className="mb-4 font-semibold tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08 }}
            >
              Skills and tools.
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-3 gap-5 px-6 max-[900px]:grid-cols-1">
            {[
              {
                title: "CAD and Simulation",
                items: [
                  "Fusion 360 and SolidWorks",
                  "FEA structural analysis",
                  "Ansys transient thermal analysis",
                  "SolidWorks topology optimization",
                  "CFD familiarization",
                  "NACA airfoil design",
                  "Assembly and tolerance design",
                ],
              },
              {
                title: "Manufacturing",
                items: [
                  "FDM 3D printing (Bambu X1 Carbon)",
                  "CNC milling (aluminum)",
                  "Carbon fiber layup",
                  "PLA and PETG printing",
                  "Gas engine disassembly and rebuild",
                  "Rapid prototyping",
                ],
              },
              {
                title: "Engineering Practice",
                items: [
                  "Experimental design and testing",
                  "Data collection and analysis",
                  "Avionics integration",
                  "Design spec scoring",
                  "Technical documentation",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="rounded-[1.5rem] bg-paper p-8">
                <h3 className="mb-5 text-[1.1rem] font-semibold text-ink">{title}</h3>
                <ul className="flex list-none flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="text-[15px] leading-[1.5] text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-paper py-28 max-[734px]:py-20">
        <Reveal>
          <div className="mx-auto max-w-[720px] px-6 text-center">
            <h2
              className="mb-8 font-semibold tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08 }}
            >
              I like to build things.
            </h2>
            <div className="text-[1.1rem] leading-[1.7] text-ink-muted">
              <p className="mb-5">
                I&apos;m a mechanical engineering student at Santa Clara University. Most of what
                I&apos;ve learned came from projects: a wind tunnel in my bedroom, a torn down 100cc
                engine, a half printed RC plane waiting for me back in Germany.
              </p>
              <p>
                These days most of my time goes to the SCU Formula SAE team, where I design and
                simulate suspension components. I&apos;m looking for{" "}
                <strong className="font-semibold text-ink">summer 2027 internships</strong> in
                aerospace, EVs, product design, or defense.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-night py-28 max-[734px]:py-20">
        <Reveal>
          <div className="mx-auto max-w-[720px] px-6 text-center">
            <p className="mb-3 text-[14px] font-semibold text-azure-bright">Available summer 2027</p>
            <h2
              className="mb-10 font-semibold tracking-[-0.02em] text-snow"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", lineHeight: 1.05 }}
            >
              Get in touch.
            </h2>
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jtrotzenberg@scu.edu"
                className="rounded-full bg-azure px-7 py-3 text-[15px] font-medium text-white no-underline transition-colors duration-200 hover:bg-azure-bright"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/julian-trotzenberg-b5a53b2a8"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[rgba(255,255,255,0.4)] px-7 py-3 text-[15px] font-medium text-snow no-underline transition-colors duration-200 hover:border-white"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[14px] text-snow-muted">
              <span>jtrotzenberg@scu.edu</span>
              <span>(562) 209-7315</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-night px-6 py-8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-2 border-t border-[rgba(255,255,255,0.14)] pt-6 max-[734px]:flex-col max-[734px]:text-center">
          <span className="text-[12px] text-snow-muted">© 2026 Julian Trotzenberg</span>
          <span className="text-[12px] text-snow-muted">
            Mechanical Engineering · Santa Clara University · Class of 2029
          </span>
        </div>
      </footer>
    </>
  );
}
