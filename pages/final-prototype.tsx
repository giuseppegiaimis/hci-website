import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function FinalPrototype() {
  const [currentSketch, setCurrentSketch] = useState(0);
  const sketches = [
    { src: "/Sketch_pt1.png", alt: "Sketch Part 1" },
    { src: "/Sketch_pt_2.png", alt: "Sketch Part 2" },
    { src: "/Sketch_pt_3.png", alt: "Sketch Part 3" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSketch((prev) => (prev + 1) % sketches.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sketches.length]);

  return (
    <>
      <Head>
        <title>Final Prototype Progression - Group Project</title>
      </Head>
      <div className="animated-gradient">
        {/* Header */}
        <div className="header">
          <Link href="/" className="home-button">
            <svg className="home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            Giuseppe Giaimis
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/about" className="nav-link">
            About me
          </Link>
        </div>

        {/* Main Content */}
        <div className="analysis-page">
          {/* Page Header (Hero section) */}
          <section className="analysis-hero">
            <h1 className="analysis-page-title">Final Prototype Progression</h1>
            <h2 className="analysis-subtitle">From Exploration to a Coherent, Ethical Interaction Model</h2>
            <p className="analysis-intro">
              This section documents the evolution of the prototype from early sketches to the final Figma version, 
              highlighting how each iteration refined the concept in response to user insights.
            </p>
          </section>

          {/* Evolution Across Versions */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Evolution Across Versions</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The progression focuses on conceptual refinement, not visual styling.
            </p>
            
            <div className="evolution-list">
              <div className="evolution-item">
                <h3 className="evolution-subtitle">Sketches</h3>
                <ul className="analysis-list">
                  <li>Explored the problem space.</li>
                  <li>Tested the narrative of delayed and bundled notifications.</li>
                  <li>Allowed rapid comparison of interaction ideas without commitment.</li>
                </ul>
              </div>

              <div className="evolution-item">
                <h3 className="evolution-subtitle">First Figma Prototype</h3>
                <ul className="analysis-list">
                  <li>Validated the feasibility of the interaction flow.</li>
                  <li>Revealed issues related to trust, transparency, and system visibility.</li>
                  <li>Highlighted the need for clearer feedback and reassurance.</li>
                </ul>
              </div>

              <div className="evolution-item">
                <h3 className="evolution-subtitle">Final Figma Prototype (HCI v3)</h3>
                <ul className="analysis-list">
                  <li>Resolves trust and transparency issues.</li>
                  <li>Prioritises calm interaction and reduced cognitive load.</li>
                  <li>Makes system behaviour explicit through structured feedback.</li>
                </ul>
              </div>
            </div>

            <div className="evolution-emphasis" style={{ marginTop: '2rem' }}>
              <p>
                <strong>Each prototype directly responds to insights from the previous one, ensuring that the final 
                solution is grounded in user needs rather than aesthetic decisions.</strong>
              </p>
            </div>
          </section>

          {/* Prototype Progression Visuals */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Prototype Progression</h2>
            
            {/* Sketches */}
            <div className="prototype-progression-group">
              <h3 className="prototype-group-title">Sketches</h3>
              <div className="sketches-carousel-container">
                <div className="sketches-carousel-wrapper">
                  <div 
                    className="sketches-carousel"
                    style={{ transform: `translateX(-${currentSketch * 33.333}%)` }}
                  >
                    {sketches.map((sketch, index) => (
                      <div key={index} className="sketch-slide">
                        <div className="sketch-image-container">
                          <img src={sketch.src} alt={sketch.alt} className="sketch-image" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-indicators">
                  {sketches.map((_, index) => (
                    <span
                      key={index}
                      className={`carousel-dot ${index === currentSketch ? "active" : ""}`}
                      onClick={() => setCurrentSketch(index)}
                    />
                  ))}
                </div>
              </div>
              <p className="prototype-group-caption">Early exploration of interaction ideas and notification bundling concepts</p>
            </div>

            {/* First Figma Prototype */}
            <div className="prototype-progression-group" style={{ marginTop: '4rem' }}>
              <h3 className="prototype-group-title">First Figma Prototype</h3>
              <div className="figma-image-container">
                <img src="/figmav1.png" alt="First Figma Prototype v1" className="figma-image" />
              </div>
              <p className="prototype-group-caption">Initial digital prototype validating interaction flow and identifying trust issues</p>
            </div>

            {/* Final Figma Prototype */}
            <div className="prototype-progression-group" style={{ marginTop: '4rem' }}>
              <h3 className="prototype-group-title">Final Figma Prototype (HCI v3)</h3>
              <div className="prototype-v3-gallery">
                <div className="prototype-v3-item">
                  <div className="figma-image-container">
                    <img src="/Prototype%20HCI%20v3_1.png" alt="Prototype HCI v3 - Screen 1" className="figma-image" />
                  </div>
                  <p className="figma-caption">App launch</p>
                </div>
                <div className="prototype-v3-item">
                  <div className="figma-image-container">
                    <img src="/Prototype%20HCI%20v3_2.png" alt="Prototype HCI v3 - Screen 2" className="figma-image" />
                  </div>
                  <p className="figma-caption">Start focus screen</p>
                </div>
                <div className="prototype-v3-item">
                  <div className="figma-image-container">
                    <img src="/Prototype%20HCI%20v3_5.png" alt="Prototype HCI v3 - Screen 5" className="figma-image" />
                  </div>
                  <p className="figma-caption">Focus state</p>
                </div>
                <div className="prototype-v3-item">
                  <div className="figma-image-container">
                    <img src="/Prototype%20HCI%20v3_6.png" alt="Prototype HCI v3 - Screen 6" className="figma-image" />
                  </div>
                  <p className="figma-caption">Session summary</p>
                </div>
              </div>
              <p className="prototype-group-caption">Final refined prototype with improved transparency, trust, and cognitive protection</p>
            </div>
          </section>

          {/* Final Prototype – Overview */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Explanation of the Final Prototype</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              This section provides a step-by-step explanation of how the final prototype works and how it reflects 
              research insights and user needs.
            </p>
            
            <div className="figma-link-container">
              <a 
                href="https://www.figma.com/design/VvTCNJ71CRZZrT9rcJD8vM/Prototype-HCI-v2?node-id=0-1&t=KleE0jne8MoycNSO-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="figma-link-button"
              >
                FINAL PROTOTYPE FIGMA LINK
              </a>
            </div>
          </section>

          {/* How It Works */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">How It Works</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The system addresses notification fatigue by bundling notifications during focus sessions. 
              Notifications are shown only at the end in a summary screen.
            </p>
            
            <p className="analysis-intro" style={{ marginBottom: '1.5rem' }}>
              Users can choose:
            </p>
            <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
              <li>focus session duration,</li>
              <li>which apps are bundled,</li>
              <li>whether urgent calls can break focus.</li>
            </ul>

            <p className="analysis-intro" style={{ marginBottom: '1.5rem' }}>
              <strong>Key Features:</strong>
            </p>
            <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
              <li>Focus session setup</li>
              <li>Notification bundling during focus</li>
              <li>Focus session summary with explanations</li>
            </ul>

            <div className="core-goal-box">
              <p>
                <strong>Core Goal:</strong> Minimise disruptions while keeping users informed without anxiety or overload.
              </p>
            </div>
          </section>

          {/* User Flow */}
          <section className="analysis-section">
            <div className="summary-with-gif">
              <div className="summary-content">
                <h2 className="analysis-section-title">User Flow</h2>
                
                <div className="user-flow-steps">
                  <div className="flow-step">
                    <h3 className="flow-step-title">1. Start Focus Session</h3>
                    <p className="flow-step-description">
                      User selects duration (25, 45, 60 minutes). User configures allowed notifications.
                    </p>
                    <div className="flow-need-solution">
                      <p className="flow-label"><strong>User Need:</strong></p>
                      <p>Control over when and how interruptions occur.</p>
                      <p className="flow-label" style={{ marginTop: '1rem' }}><strong>Design Solution:</strong></p>
                      <p>Intentional setup that gives users agency and predictability.</p>
                    </div>
                  </div>

                  <div className="flow-step">
                    <h3 className="flow-step-title">2. Focus Mode Active</h3>
                    <p className="flow-step-description">
                      Countdown timer is displayed. Notifications are visually dimmed or replaced with a 
                      &quot;Notifications are being bundled&quot; message.
                    </p>
                    <div className="flow-need-solution">
                      <p className="flow-label"><strong>User Need:</strong></p>
                      <p>Assurance without distraction.</p>
                      <p className="flow-label" style={{ marginTop: '1rem' }}><strong>Design Solution:</strong></p>
                      <p>Calm visual feedback that confirms background processing without interruptions.</p>
                    </div>
                  </div>

                  <div className="flow-step">
                    <h3 className="flow-step-title">3. Focus Session Summary</h3>
                    <p className="flow-step-description">
                      Summary screen shows: total notifications handled, breakdown by app, bundled vs important 
                      notifications, option to schedule next session.
                    </p>
                    <div className="flow-need-solution">
                      <p className="flow-label"><strong>User Need:</strong></p>
                      <p>Transparency and reassurance.</p>
                      <p className="flow-label" style={{ marginTop: '1rem' }}><strong>Design Solution:</strong></p>
                      <p>Explicit, structured feedback after the session.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prototype-gif-side">
                <h3 className="prototype-gif-title">Prototype in Action</h3>
                <div className="gif-container-small">
                  <img src="/prototypegif.gif" alt="Prototype demonstration" className="prototype-gif" />
                </div>
                <p className="figma-caption">Interactive prototype demonstration</p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Flow Rationale */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Step-by-Step Flow Rationale</h2>
            
            <div className="flow-rationale">
              <div className="rationale-step">
                <h3 className="rationale-step-title">Start</h3>
                <p className="analysis-intro">
                  <strong>What happens:</strong> User configures session parameters before starting.
                </p>
                <p className="analysis-intro">
                  <strong>Why it is needed:</strong> Provides control and sets clear expectations.
                </p>
              </div>

              <div className="rationale-step">
                <h3 className="rationale-step-title">Focus</h3>
                <p className="analysis-intro">
                  <strong>What happens:</strong> System bundles notifications silently in the background.
                </p>
                <p className="analysis-intro">
                  <strong>Why it is needed:</strong> Protects focus time from interruptions while maintaining awareness.
                </p>
              </div>

              <div className="rationale-step">
                <h3 className="rationale-step-title">Summary</h3>
                <p className="analysis-intro">
                  <strong>What happens:</strong> User reviews what was handled after the session ends.
                </p>
                <p className="analysis-intro">
                  <strong>Why it is needed:</strong> Delivers transparency and enables reflection without disrupting focus.
                </p>
              </div>
            </div>

            <div className="flow-rationale-emphasis" style={{ marginTop: '2rem' }}>
              <p>
                <strong>Focus time is protected from interaction; reflection happens only after the session.</strong>
              </p>
            </div>
          </section>

          {/* Alignment with User Needs */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Alignment with User Needs</h2>
            
            <div className="alignment-pillars">
              <div className="alignment-pillar">
                <h3 className="alignment-pillar-title">Reducing Interruptions</h3>
                <p className="analysis-intro">
                  Bundling prevents constant disruption. Users stay focused without disconnecting.
                </p>
              </div>

              <div className="alignment-pillar">
                <h3 className="alignment-pillar-title">Transparency and Control</h3>
                <p className="analysis-intro">
                  Summary screen explains system behaviour. Users know what happened and why.
                </p>
              </div>

              <div className="alignment-pillar">
                <h3 className="alignment-pillar-title">User Agency</h3>
                <p className="analysis-intro">
                  Users decide what is allowed. No forced automation.
                </p>
              </div>
            </div>
          </section>

          {/* Ethical & Social Considerations */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Ethical & Social Considerations</h2>
            
            <div className="ethical-considerations">
              <div className="ethical-item">
                <h3 className="ethical-item-title">Privacy</h3>
                <p className="analysis-intro">
                  Minimal data collection (no notification content stored). Clear communication of processing. 
                  Full user control.
                </p>
                <p className="ethical-explanation">
                  This matters for trust: users need assurance that their data is not being stored or analyzed 
                  beyond what is necessary for the system to function.
                </p>
              </div>

              <div className="ethical-item">
                <h3 className="ethical-item-title">Bias</h3>
                <p className="analysis-intro">
                  No opaque automated prioritisation. Human decision-making remains central. Design informed by 
                  diverse user input.
                </p>
                <p className="ethical-explanation">
                  This reduces algorithmic bias: by keeping users in control of prioritisation decisions, the 
                  system avoids encoding potentially biased automated rules.
                </p>
              </div>

              <div className="ethical-item">
                <h3 className="ethical-item-title">User Wellbeing</h3>
                <p className="analysis-intro">
                  Reduced cognitive load and stress. Transparency reduces anxiety and guilt. Trust supports 
                  emotional wellbeing.
                </p>
              </div>

              <div className="ethical-item">
                <h3 className="ethical-item-title">Social Impact</h3>
                <p className="analysis-intro">
                  Supports focused study environments. Reduces FOMO-driven anxiety. Encourages healthier digital 
                  habits.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations of the System */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Limitations</h2>
            
            <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
              <li>Dependence on user setup.</li>
              <li>Exclusion of non-app-based interruptions.</li>
              <li>Intentional simplification over advanced filtering.</li>
            </ul>

            <div className="limitations-emphasis">
              <p>
                <strong>These limitations are conscious trade-offs to preserve usability and cognitive protection.</strong>
              </p>
            </div>
          </section>

          {/* Visuals & Diagrams */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Supporting Visuals & Diagrams</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Visuals were used to clarify user journeys, explain system behaviour, and support communication of 
              design decisions.
            </p>
            
            <div className="symbolic-cost-section">
              <h3 className="symbolic-cost-title">Symbolic Cost Table</h3>
              <p className="analysis-intro" style={{ marginBottom: '1rem' }}>
                <strong>Purpose of the table:</strong> To quantify the design complexity and resource allocation 
                for different system elements.
              </p>
              <p className="analysis-intro" style={{ marginBottom: '1rem' }}>
                <strong>Total symbolic cost:</strong> €111
              </p>
              <p className="analysis-intro">
                <strong>Distinction:</strong> The table distinguishes between essential (E) and optional (O) 
                elements, helping prioritise development efforts and understand the core vs. extended feature set.
              </p>
            </div>
          </section>
        </div>

        {/* Step Navigation */}
        <div className="step-navigation">
          <Link href="/iterations" className="step-nav-button step-nav-prev">
            <svg className="step-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="step-nav-label">Previous: Iterations</span>
          </Link>
          <div className="step-nav-spacer"></div>
        </div>

        {/* Footer */}
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-text">Your message is private — no data is stored.</span>
            <svg className="lock-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M3.79167 5.95837V3.79171C3.79167 3.07341 4.07701 2.38454 4.58492 1.87663C5.09283 1.36872 5.78171 1.08337 6.5 1.08337C7.21829 1.08337 7.90717 1.36872 8.41508 1.87663C8.92299 2.38454 9.20833 3.07341 9.20833 3.79171V5.95837M2.70833 5.95837H10.2917C10.89 5.95837 11.375 6.4434 11.375 7.04171V10.8334C11.375 11.4317 10.89 11.9167 10.2917 11.9167H2.70833C2.11002 11.9167 1.625 11.4317 1.625 10.8334V7.04171C1.625 6.4434 2.11002 5.95837 2.70833 5.95837Z" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="footer-right">
            <span className="footer-text">LOTS OF PROJECTS[]</span>
            <span className="footer-text">20 Years [age]</span>
            <span className="footer-text">40% [failed Projects]</span>
          </div>
        </div>
      </div>
    </>
  );
}

