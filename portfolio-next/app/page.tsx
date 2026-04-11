/* eslint-disable @next/next/no-img-element -- portfolio uses varied aspect ratios; native img matches original layout */
import type { CSSProperties } from "react";
import Link from "next/link";

const windTop: CSSProperties = {
  width: "100%",
  flex: "0 0 300px",
  objectFit: "cover",
  objectPosition: "center top",
  display: "block",
  filter: "brightness(0.9)",
  borderBottom: "1px solid rgba(255,255,255,0.07)",
};

const windBottom: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center center",
  display: "block",
  filter: "brightness(0.82)",
};

const windBottomRight: CSSProperties = {
  ...windBottom,
  objectPosition: "center 20%",
  borderLeft: "1px solid rgba(255,255,255,0.07)",
};

const photoSide: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  filter: "brightness(0.88)",
};

const stripContain: CSSProperties = {
  width: "100%",
  height: "220px",
  objectFit: "contain",
  background: "#f8f8f8",
  display: "block",
};

const stripCover: CSSProperties = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  display: "block",
  filter: "brightness(0.85)",
};

const stripTall: CSSProperties = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
  display: "block",
  filter: "brightness(0.85)",
};

const cardImg: CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  display: "block",
  filter: "brightness(0.8)",
};

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">
          JT // MECH-ENG
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-grid" aria-hidden />
        <div className="hero-tag">
          Freshman · Santa Clara University · Class of 2029
        </div>
        <h1 className="hero-name">
          Julian<span>Trotzenberg</span>
        </h1>
        <p className="hero-desc">
          Mechanical engineering student building <strong>real hardware</strong>{" "}
          — from custom wind tunnels and aerodynamics experiments to 3D-printed
          flight systems. Targeting roles in{" "}
          <strong>aerospace &amp; propulsion</strong> and{" "}
          <strong>electric vehicle</strong> development.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View Work ↓
          </a>
          <a href="mailto:jtrotzenberg@scu.edu" className="btn-outline">
            Get in Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">1K+</div>
            <div className="hero-stat-label">Data Points</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">7</div>
            <div className="hero-stat-label">Airfoils Built</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">6</div>
            <div className="hero-stat-label">Projects</div>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>

      <div className="skills-section">
        <div className="skills-ticker">
          <span className="accent">Fusion 360</span>
          <span>·</span>
          <span>Aerodynamics</span>
          <span>·</span>
          <span className="accent">3D Printing</span>
          <span>·</span>
          <span>CAD / FEA</span>
          <span>·</span>
          <span className="accent">Avionics Integration</span>
          <span>·</span>
          <span>Wind Tunnel Testing</span>
          <span>·</span>
          <span className="accent">Product Design</span>
          <span>·</span>
          <span className="accent">NACA Airfoils</span>
          <span>·</span>
          <span>Rapid Prototyping</span>
          <span>·</span>
          <span className="accent">Data Analysis</span>
          <span>·</span>
          <span>L/D Optimization</span>
          <span>·</span>
          <span className="accent">Gas Engine Rebuild</span>
          <span>·</span>
          <span>Flight Systems</span>
          <span>·</span>
          <span className="accent">Fusion 360</span>
          <span>·</span>
          <span>Aerodynamics</span>
          <span>·</span>
          <span className="accent">3D Printing</span>
          <span>·</span>
          <span>CAD / FEA</span>
          <span>·</span>
          <span className="accent">Avionics Integration</span>
          <span>·</span>
          <span>Wind Tunnel Testing</span>
          <span>·</span>
          <span className="accent">Product Design</span>
          <span>·</span>
          <span className="accent">NACA Airfoils</span>
          <span>·</span>
          <span>Rapid Prototyping</span>
          <span>·</span>
          <span className="accent">Data Analysis</span>
          <span>·</span>
          <span>L/D Optimization</span>
          <span>·</span>
          <span className="accent">Gas Engine Rebuild</span>
          <span>·</span>
          <span>Flight Systems</span>
          <span>·</span>
        </div>
      </div>

      <div className="section-wrap" id="projects">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">Engineering Projects</h2>

        <div className="project-featured">
          <div className="proj-photo-col">
            <img
              src="/images/asset-00.jpg"
              alt="Full wind tunnel setup"
              style={windTop}
            />
            <div className="proj-photo-bottom-row">
              <img
                src="/images/asset-01.jpg"
                alt="Straw laminar flow filter inlet"
                style={windBottom}
              />
              <img
                src="/images/asset-02.jpg"
                alt="7 NACA 0015 airfoils"
                style={windBottomRight}
              />
            </div>
          </div>
          <div className="project-featured-content">
            <div
              style={{
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="proj-num">01 / FEATURED</div>
              <div className="proj-tag">Aerodynamics Research</div>
              <h3 className="proj-title">
                Subsonic Wing Sweep Angle Optimization
              </h3>
              <p className="proj-summary">
                Designed and built a custom wind tunnel from scratch to
                experimentally determine the optimal wing sweep angle for
                maximizing lift-to-drag ratio — corroborating variable-sweep
                logic used in the F-14 Tomcat.
              </p>
              <ul className="proj-bullets">
                <li>
                  Designed 7 NACA 0015 airfoils (0°–60° sweep) in Fusion 360, 3D
                  printed to 0.2mm accuracy on Bambu X1 Carbon
                </li>
                <li>
                  Engineered 2 wind tunnel iterations with laminar flow straw
                  filter, pulley-based drag measurement, and rail-mounted force
                  isolation cart
                </li>
                <li>
                  Drag decreases significantly past 30° sweep; lift follows a
                  cos² relationship — supporting variable-sweep aircraft design
                </li>
                <li>
                  Proposed CFD simulation as validated next step to eliminate
                  experimental uncertainty
                </li>
              </ul>
            </div>
            <div className="proj-bottom">
              <div className="proj-metrics">
                <div className="proj-metric">
                  <div className="proj-metric-val">1,000+</div>
                  <div className="proj-metric-label">Data Points</div>
                </div>
                <div className="proj-metric">
                  <div className="proj-metric-val">3</div>
                  <div className="proj-metric-label">Wind Speeds</div>
                </div>
                <div className="proj-metric">
                  <div className="proj-metric-val">7</div>
                  <div className="proj-metric-label">Airfoils</div>
                </div>
              </div>
              <img
                src="/images/asset-03.png"
                alt="QR wind tunnel"
                className="proj-qr"
              />
            </div>
          </div>
        </div>

        <div className="project-featured">
          <div
            className="proj-photos-side"
            style={{ gridTemplateColumns: "1.2fr 1fr" }}
          >
            <div className="photo-big">
              <img
                src="/images/asset-04.png"
                alt="Apple Pencil retention device"
                style={photoSide}
              />
            </div>
            <div className="photo-right">
              <img
                src="/images/asset-05.png"
                alt="Device held showing mount"
                style={photoSide}
              />
            </div>
            <div className="photo-right">
              <img
                src="/images/asset-06.png"
                alt="Drop test 1.5m"
                style={photoSide}
              />
            </div>
          </div>
          <div className="project-featured-content">
            <div>
              <div className="proj-num">02 / FEATURED</div>
              <div className="proj-tag">Product Design &amp; Prototyping</div>
              <h3 className="proj-title">
                Apple Pencil Retention Device — E-Waste Reduction
              </h3>
              <p className="proj-summary">
                Identified a real problem in a school IT department and
                delivered a full engineering design cycle — from user
                interviews through 4+ prototype iterations to a validated,
                client-approved product.
              </p>
              <ul className="proj-bullets">
                <li>
                  Interviewed school IT director who reported 8 lost/damaged
                  peripherals per year (~€120 each); defined 16-point design
                  specification covering child safety, ergonomics, and material
                  toxicity
                </li>
                <li>
                  Designed 6 competing concepts in Fusion 360 and selected
                  optimal design through scoring and client feedback
                </li>
                <li>
                  Prototyped in cardboard then PLA — passed 10N magnetic pull
                  test and survived 20 drops from 1.5m
                </li>
                <li>
                  Final product: €0.86 in filament, 26.72g, non-toxic PLA, no
                  sharp edges, no choking hazards
                </li>
              </ul>
            </div>
            <div className="proj-bottom">
              <div className="proj-metrics">
                <div className="proj-metric">
                  <div className="proj-metric-val">€0.86</div>
                  <div className="proj-metric-label">Unit Cost</div>
                </div>
                <div className="proj-metric">
                  <div className="proj-metric-val">10N</div>
                  <div className="proj-metric-label">Pull Test ✓</div>
                </div>
                <div className="proj-metric">
                  <div className="proj-metric-val">20</div>
                  <div className="proj-metric-label">Drop Tests ✓</div>
                </div>
              </div>
              <img
                src="/images/asset-07.png"
                alt="Apple Pencil project QR code"
                className="proj-qr"
              />
            </div>
          </div>
        </div>

        <div
          className="project-secondary"
          style={{
            marginTop: "-1.5rem",
            marginBottom: "2rem",
            borderTop: "none",
          }}
        >
          <div
            className="proj-photo-strip"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <img
              src="/images/asset-08.png"
              alt="Exploded CAD diagram"
              style={stripContain}
            />
            <img
              src="/images/asset-09.png"
              alt="Design iteration sheet"
              style={stripContain}
            />
            <img
              src="/images/asset-10.png"
              alt="Drop test second angle"
              style={stripCover}
            />
          </div>
        </div>

        <div className="project-secondary">
          <div
            className="proj-photo-strip"
            style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            <img
              src="/images/asset-11.jpg"
              alt="Completed Eclipson Wolf"
              style={stripCover}
            />
            <img
              src="/images/asset-12.jpg"
              alt="Aircraft assembly"
              style={stripCover}
            />
            <img
              src="/images/asset-13.jpg"
              alt="Fuselage assembly"
              style={stripCover}
            />
            <img
              src="/images/asset-14.jpg"
              alt="Wing section"
              style={stripCover}
            />
            <img
              src="/images/asset-15.jpg"
              alt="Carbon prop and motor"
              style={stripCover}
            />
          </div>
          <div className="project-secondary-content">
            <div className="card-num">03</div>
            <div className="card-tag">Avionics / Systems</div>
            <h3 className="card-title">
              RC Fixed-Wing Aircraft Build — Eclipson G1 Wolf
            </h3>
            <p className="card-desc">
              End-to-end build of a 3D-printed fixed-wing RC aircraft. Printed
              all structural components on a Bambu X1 Carbon, integrated a full
              avionics stack (brushless motor, ESC, servos, FlySky receiver,
              LiPo), and ran full systems checks prior to flight. Performed FEA
              on structural brackets and sourced a carbon-fiber Aeronaut CAM
              prop.
            </p>
            <div className="card-stats">
              <span className="card-stat">Bambu X1 Carbon printed</span>
              <span className="card-stat">Full avionics integration</span>
              <span className="card-stat">Carbon-fiber prop</span>
              <span className="card-stat">FEA structural analysis</span>
              <span className="card-stat">FlySky FS-iA10B</span>
            </div>
          </div>
        </div>

        <div className="project-secondary">
          <div
            className="proj-photo-strip"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            <img
              src="/images/asset-16.jpg"
              alt="100cc go-kart engine"
              style={stripCover}
            />
            <img
              src="/images/asset-17.jpg"
              alt="Engine disassembly"
              style={stripCover}
            />
            <img
              src="/images/asset-18.jpg"
              alt="Engine cylinder head"
              style={stripCover}
            />
          </div>
          <div className="project-secondary-content">
            <div className="card-num">04</div>
            <div className="card-tag">Mechanical Systems</div>
            <h3 className="card-title">
              100cc Go-Kart Engine — Full Disassembly &amp; Rebuild
            </h3>
            <p className="card-desc">
              Fully disassembled and rebuilt a 100cc single-cylinder go-kart
              engine. Removed cylinder head, inspected piston, rings, and
              bearings, cleaned all components, and reassembled to running
              condition. Developed hands-on understanding of combustion engine
              internals, tolerances, and mechanical assembly sequencing.
            </p>
            <div className="card-stats">
              <span className="card-stat">Full teardown &amp; rebuild</span>
              <span className="card-stat">Piston / ring inspection</span>
              <span className="card-stat">NGK spark plug system</span>
              <span className="card-stat">Engine back to running</span>
            </div>
          </div>
        </div>

        <div className="projects-minor">
          <div className="project-card">
            <img
              src="/images/asset-19.jpg"
              alt="Raptor engine model"
              style={cardImg}
            />
            <div className="proj-card-body">
              <div className="card-num">05</div>
              <div className="card-tag">3D Printing / Modeling</div>
              <h3 className="card-title">
                SpaceX Raptor Engine — 3D Printed Scale Model
              </h3>
              <p className="card-desc">
                Sourced and printed a detailed multi-part scale model of the
                SpaceX Raptor engine. Multi-material print in black and white PLA
                capturing turbopumps, plumbing, and bell geometry. Driven by
                interest in full-flow staged combustion propulsion.
              </p>
              <div className="card-stats">
                <span className="card-stat">Multi-material PLA</span>
                <span className="card-stat">Full-flow cycle reference</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/images/asset-20.jpg"
              alt="Lego RC car build"
              style={cardImg}
            />
            <div className="proj-card-body">
              <div className="card-num">06</div>
              <div className="card-tag">Avionics Prototype</div>
              <h3 className="card-title">
                Lego RC Car — Avionics Prototyping Platform
              </h3>
              <p className="card-desc">
                Built a functional RC car from a Lego Technic chassis to
                prototype and validate the aircraft avionics stack before
                installation — ESC, 2200mAh LiPo, steering servo, and FlySky
                FS-iA10B receiver, fully working under radio control.
              </p>
              <div className="card-stats">
                <span className="card-stat">FlySky FS-iA10B</span>
                <span className="card-stat">2200mAh LiPo</span>
                <span className="card-stat">Functional steering</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="project-secondary"
          style={{ marginTop: "1px" }}
        >
          <div
            className="proj-photo-strip"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <img
              src="/images/asset-21.jpg"
              alt="Cooking sugar fuel mixture"
              style={stripTall}
            />
            <img
              src="/images/asset-22.jpg"
              alt="Nozzle ignition test on grill"
              style={stripTall}
            />
          </div>
          <div className="project-secondary-content">
            <div className="card-num">07</div>
            <div className="card-tag">Propulsion / Chemistry</div>
            <h3 className="card-title">
              Solid Rocket Propellant — Sugar Fuel Synthesis &amp; Ignition Test
            </h3>
            <p className="card-desc">
              Researched and synthesized a solid rocket propellant (potassium
              nitrate / sugar caramel mixture). Fabricated a simple nozzle
              casing and conducted a controlled ignition test. Built hands-on
              understanding of oxidizer-fuel ratios, burn characteristics, and
              energetic material handling. Video documentation of ignition
              available on request.
            </p>
            <div className="card-stats">
              <span className="card-stat">KNO₃ / sugar mixture</span>
              <span className="card-stat">Custom nozzle casing</span>
              <span className="card-stat">Ignition tested</span>
              <span className="card-stat">Burn rate observed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="section-wrap" id="skills">
        <div className="section-label">Capabilities</div>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <div className="skills-grid">
          <div className="skill-block">
            <div className="skill-block-title">{`// CAD & Simulation`}</div>
            <ul className="skill-list">
              <li>Fusion 360 (parametric modeling)</li>
              <li>FEA structural analysis</li>
              <li>CFD (familiarization)</li>
              <li>NACA airfoil design</li>
              <li>Assembly &amp; tolerance design</li>
            </ul>
          </div>
          <div className="skill-block">
            <div className="skill-block-title">{`// Manufacturing`}</div>
            <ul className="skill-list">
              <li>FDM 3D printing (Bambu X1 Carbon)</li>
              <li>Multi-material PLA printing</li>
              <li>Gas engine disassembly &amp; rebuild</li>
              <li>Mechanical assembly</li>
              <li>Rapid prototyping</li>
            </ul>
          </div>
          <div className="skill-block">
            <div className="skill-block-title">{`// Engineering Practice`}</div>
            <ul className="skill-list">
              <li>Experimental design &amp; testing</li>
              <li>Data collection &amp; analysis (1K+ pts)</li>
              <li>Avionics integration (ESC / servo / Rx)</li>
              <li>Design spec scoring (16-point matrix)</li>
              <li>Technical documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="section-wrap" id="about">
        <div className="section-label">Background</div>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a{" "}
              <strong>
                freshman mechanical engineering student at Santa Clara University
              </strong>
              , building a track record of hands-on technical projects before my
              first internship. My work spans aerodynamics research, avionics
              integration, engine rebuilds, product design, and propulsion
              chemistry.
            </p>
            <p>
              I&apos;m drawn to engineering problems where{" "}
              <strong>physics meets hardware</strong> — where you can&apos;t just
              simulate your way to an answer and have to build, test, and
              iterate. That instinct led me to build a wind tunnel from scratch,
              fly a 3D-printed aircraft, and tear down a 100cc engine.
            </p>
            <p>
              I&apos;m targeting <strong>summer 2026 internships</strong> in
              aerospace propulsion, vehicle dynamics, structures, or systems
              integration at companies pushing the frontier of flight and
              electrification.
            </p>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: "1rem" }}>
              Target Companies
            </div>
            <div className="target-companies">
              <div className="company-item">
                <div className="company-dot" />
                <span className="company-name">SpaceX</span>
                <span className="company-sector">Launch / Propulsion</span>
              </div>
              <div className="company-item">
                <div className="company-dot" />
                <span className="company-name">Hermeus</span>
                <span className="company-sector">Hypersonic Flight</span>
              </div>
              <div className="company-item">
                <div className="company-dot" />
                <span className="company-name">Anduril Industries</span>
                <span className="company-sector">Defense Tech</span>
              </div>
              <div className="company-item">
                <div className="company-dot" />
                <span className="company-name">JPL / NASA</span>
                <span className="company-sector">Deep Space Systems</span>
              </div>
              <div className="company-item">
                <div className="company-dot" />
                <span className="company-name">Tesla</span>
                <span className="company-sector">EV / Powertrain</span>
              </div>
              <div className="company-item">
                <div className="company-dot" />
                <span className="company-name">Lucid Motors</span>
                <span className="company-sector">EV / Structures</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section" id="contact">
        <div className="contact-inner">
          <div>
            <div
              className="section-label"
              style={{ marginBottom: "0.75rem" }}
            >
              Available Summer 2026
            </div>
            <div className="contact-headline">
              Let&apos;s build
              <br />
              something fast.
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:jtrotzenberg@scu.edu" className="contact-link">
              <div className="contact-link-icon">@</div>
              jtrotzenberg@scu.edu
            </a>
            <a href="tel:5622097315" className="contact-link">
              <div className="contact-link-icon">✆</div>
              (562) 209-7315
            </a>
            <a
              href="https://linkedin.com/in/julian-trotzenberg-b5a53b2a8"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">in</div>
              linkedin.com/in/julian-trotzenberg
            </a>
          </div>
        </div>
      </div>

      <footer>
        <span>© 2026 Julian Trotzenberg</span>
        <span>
          Mechanical Engineering · Santa Clara University · Class of 2029
        </span>
      </footer>
    </>
  );
}
