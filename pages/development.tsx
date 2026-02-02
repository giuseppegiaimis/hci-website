import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Development() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Project Development - Group Project</title>
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
            <h1 className="analysis-page-title">Project Development</h1>
            <h2 className="analysis-subtitle">From User Findings to Early Prototypes</h2>
            <p className="analysis-intro">
              This phase translates research insights into tangible design solutions, moving from 
              low-fidelity exploration to the first digital prototype.
            </p>
          </section>

          {/* Design Inputs */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Design Inputs from User Research</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The development phase started from key quantitative and qualitative findings emerging 
              from the user survey and literature review.
            </p>
            <ul className="analysis-list">
              <li>Notifications frequently interrupt study sessions and make it difficult to regain focus.</li>
              <li>Students experience moderate stress and cognitive overload during interruptions.</li>
              <li>Existing tools (Focus Mode, Do Not Disturb) are perceived as only moderately effective.</li>
              <li>Fear of missing out prevents users from fully silencing notifications.</li>
              <li>Students are open to intelligent filtering, but only if transparency and control are guaranteed.</li>
              <li>Users request context-aware filtering, priority handling, and end-of-session summaries.</li>
            </ul>
            <div className="insights-note">
              <p><strong>These insights directly guided the interaction logic and feature exploration.</strong></p>
            </div>
          </section>

          {/* Translating Findings into Design Goals */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">From Findings to Design Goals</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Insights were transformed into concrete design intentions:
            </p>
            <ul className="analysis-list">
              <li>Protect focus without fully blocking information</li>
              <li>Reduce cognitive load during study sessions</li>
              <li>Prevent FOMO through visibility and summaries</li>
              <li>Maintain user trust through explainability</li>
              <li>Support autonomy rather than enforce automation</li>
            </ul>
            <p className="analysis-intro" style={{ marginTop: '2rem', fontStyle: 'italic' }}>
              This section acts as the bridge between research and ideation.
            </p>
          </section>

          {/* Early Concept Exploration through Sketches */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Sketching the Interaction</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Sketches were used as a low-fidelity, exploratory tool to rapidly test multiple interaction 
              ideas without committing to a final structure.
            </p>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Sketches focused on:
            </p>
            <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
              <li>How a focus session could be started</li>
              <li>How notifications could be bundled instead of blocked</li>
              <li>How transparency could be communicated to the user</li>
              <li>How summaries could reduce anxiety about missed notifications</li>
            </ul>
            <div className="sketches-note">
              <p><strong>Important:</strong> Sketches were iterative and comparative, used to explore alternatives, 
              discuss trade-offs, and align the team on interaction direction.</p>
            </div>

            {/* Sketch Images - Carousel */}
            <div className="sketches-carousel-container">
              <div className="sketches-carousel-wrapper">
                <div 
                  className="sketches-carousel"
                  style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                >
                  <div className="sketch-slide">
                    <div className="sketch-image-container">
                      <img src="/Sketch_pt1.png" alt="Sketch Part 1" className="sketch-image" />
                    </div>
                    <p className="sketch-caption">Sketch exploration - Part 1</p>
                  </div>
                  <div className="sketch-slide">
                    <div className="sketch-image-container">
                      <img src="/Sketch_pt_2.png" alt="Sketch Part 2" className="sketch-image" />
                    </div>
                    <p className="sketch-caption">Sketch exploration - Part 2</p>
                  </div>
                  <div className="sketch-slide">
                    <div className="sketch-image-container">
                      <img src="/Sketch_pt_3.png" alt="Sketch Part 3" className="sketch-image" />
                    </div>
                    <p className="sketch-caption">Sketch exploration - Part 3</p>
                  </div>
                </div>
              </div>
              <div className="carousel-indicators">
                <span 
                  className={`carousel-dot ${currentSlide === 0 ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(0)}
                ></span>
                <span 
                  className={`carousel-dot ${currentSlide === 1 ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(1)}
                ></span>
                <span 
                  className={`carousel-dot ${currentSlide === 2 ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(2)}
                ></span>
              </div>
            </div>

            {/* Logo Sketch */}
            <div className="logo-sketch-section">
              <h3 className="logo-sketch-title">Logo Exploration</h3>
              <div className="sketch-item">
                <div className="sketch-image-container">
                  <img src="/sketch_logo.png" alt="Logo Sketch" className="sketch-image" />
                </div>
                <p className="sketch-caption">Logo concept exploration</p>
              </div>
            </div>
          </section>

          {/* From Sketches to Structured Interaction Logic */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Refining the Concept</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              After reviewing sketches, recurring patterns emerged:
            </p>
            <ul className="analysis-list">
              <li>Focus sessions as a clear temporal boundary</li>
              <li>Context-aware notification handling during sessions</li>
              <li>A post-session summary to restore control and trust</li>
              <li>Minimal interaction during focus, reflection after</li>
            </ul>
            <p className="analysis-intro" style={{ marginTop: '2rem' }}>
              These patterns became the foundation of the first prototype.
            </p>
          </section>

          {/* First Digital Prototype (Figma) */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">First Figma Prototype</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The first Figma prototype translates the sketch-based ideas into a coherent interaction flow, 
              focusing on clarity rather than visual refinement.
            </p>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The prototype demonstrates:
            </p>
            <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
              <li>Starting a focus session</li>
              <li>System detection of study context</li>
              <li>Bundling and delaying notifications</li>
              <li>Transparent explanation of system behaviour</li>
              <li>End-of-session overview of filtered notifications</li>
            </ul>
            <div className="prototype-note">
              <p><strong>Emphasis:</strong> The prototype is exploratory. Visual design is intentionally simple. 
              Priority is on interaction logic and user understanding.</p>
            </div>

            {/* Figma Prototype Image */}
            <div className="figma-prototype-section">
              <div className="figma-image-container">
                <img src="/figmav1.png" alt="Figma Prototype v1" className="figma-image" />
              </div>
              <p className="figma-caption">First digital prototype - Figma v1</p>
            </div>
          </section>

          {/* Why This Prototype Matters */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Design Rationale</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              This prototype represents:
            </p>
            <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
              <li>A direct response to user data</li>
              <li>A shift from reactive blocking to proactive, explainable filtering</li>
              <li>An attempt to balance focus, autonomy, and trust</li>
            </ul>
            <div className="rationale-statement">
              <p>
                <strong>Every interaction choice is grounded in survey insights and supported by existing HCI research.</strong>
              </p>
            </div>
          </section>

          {/* Navigation back */}
          <div className="analysis-navigation">
            <Link href="/group-project" className="back-link">
              ← Back to Full Process
            </Link>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="step-navigation">
          <Link href="/ideation" className="step-nav-button step-nav-prev">
            <svg className="step-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="step-nav-label">Previous: Ideation</span>
          </Link>
          <Link href="/iterations" className="step-nav-button step-nav-next">
            <span className="step-nav-label">Next: Iterations</span>
            <svg className="step-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
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

