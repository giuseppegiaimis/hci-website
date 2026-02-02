import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Iterations() {
  return (
    <>
      <Head>
        <title>Iteration - Group Project</title>
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
            <h1 className="analysis-page-title">Iteration</h1>
            <h2 className="analysis-subtitle">Refining the Experience Through Evidence-Based Design Decisions</h2>
            <p className="analysis-intro">
              This phase consolidates insights from research, testing, and earlier prototypes into a coherent 
              final solution through iteration and critical design decisions.
            </p>
          </section>

          {/* Design Decisions Overview */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Design Decisions</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              This section documents the key interaction, flow, and functional decisions that shaped the final 
              prototype, each grounded in user research and ethical considerations.
            </p>
            <div className="decisions-emphasis">
              <p>
                <strong>The goal was not to add features, but to improve clarity, trust, and cognitive protection.</strong>
              </p>
            </div>
          </section>

          {/* Interaction Decisions */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Interaction Decisions</h2>
            
            <div className="decision-block">
              <h3 className="decision-subtitle">Intentional Focus Sessions</h3>
              <p className="analysis-intro">
                The experience is structured around intentional focus sessions, actively started by the user. 
                This makes system behaviour explicit and predictable. It responds directly to users&apos; need for 
                control and transparency.
              </p>
            </div>

            <div className="decision-block">
              <h3 className="decision-subtitle">Notification Bundling</h3>
              <p className="analysis-intro">
                Notifications are bundled instead of blocked during focus sessions. This reduces interruptions 
                while avoiding anxiety caused by complete silence. It directly addresses users&apos; fear of missing 
                important information.
              </p>
            </div>

            <div className="decision-block">
              <h3 className="decision-subtitle">Post-Session Summary</h3>
              <p className="analysis-intro">
                A post-session summary was introduced. It shows which notifications were delayed and why. 
                It makes system behaviour visible and explainable. It directly supports trust and ethical transparency.
              </p>
            </div>
          </section>

          {/* Flow Decisions */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Flow Refinement</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The final interaction flow: <strong>Start focus session → study context detected → notifications 
              bundled → summary displayed</strong>
            </p>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The rationale:
            </p>
            <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
              <li>The flow is intentionally linear and minimal.</li>
              <li>All configuration and reflection happen outside the active study phase.</li>
              <li>No decisions or confirmations are required during focus time.</li>
            </ul>
            <div className="flow-note">
              <p>
                <strong>Explicitly stated:</strong> Real-time system feedback was avoided to prevent additional 
                interruptions. Transparency is provided through consolidation in the final summary.
              </p>
            </div>
          </section>

          {/* Functional Prioritisation */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Functional Priorities</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Priorities were defined based on user needs and feasibility, not technical ambition.
            </p>
            <div className="priorities-block">
              <h3 className="priorities-subtitle">Primary Priorities</h3>
              <ul className="analysis-list">
                <li>Notification bundling during focus sessions</li>
                <li>Transparent summaries to reduce uncertainty and FOMO</li>
                <li>Basic prioritisation logic (urgent vs non-urgent)</li>
              </ul>
            </div>
            <div className="priorities-block" style={{ marginTop: '2rem' }}>
              <h3 className="priorities-subtitle">Secondary Features (Intentionally Deprioritised)</h3>
              <ul className="analysis-list">
                <li>Advanced customisation</li>
                <li>Long-term analytics</li>
                <li>Complex rule-setting</li>
              </ul>
              <p className="analysis-intro" style={{ marginTop: '1.5rem' }}>
                <strong>Research showed that excessive configuration increases setup fatigue and discourages adoption.</strong>
              </p>
            </div>
          </section>

          {/* Compromises and Exclusions */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Compromises and Exclusions</h2>
            
            <div className="exclusion-block">
              <h3 className="exclusion-title">Full automation without user visibility</h3>
              <p className="analysis-intro">
                Excluded due to trust, autonomy, and ethical concerns.
              </p>
            </div>

            <div className="exclusion-block">
              <h3 className="exclusion-title">Fine-grained manual configuration</h3>
              <p className="analysis-intro">
                Excluded to avoid replicating the complexity of existing tools.
              </p>
            </div>

            <div className="exclusion-block">
              <h3 className="exclusion-title">Real-time adaptive feedback during focus sessions</h3>
              <p className="analysis-intro">
                Excluded to prevent additional interruptions.
              </p>
            </div>

            <div className="exclusions-emphasis">
              <p>
                <strong>These exclusions represent a conscious trade-off favouring clarity, trust, and cognitive 
                protection over feature completeness.</strong>
              </p>
            </div>
          </section>

          {/* Iterating the Prototype */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">From First Prototype to Final Version</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              The final prototype represents a consolidation of insights rather than a radical redesign.
            </p>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Compared to the first Figma prototype, Prototype HCI v3 introduces:
            </p>
            <ul className="analysis-list" style={{ marginBottom: '3rem' }}>
              <li>A clearer and calmer start focus screen with limited choices</li>
              <li>A dedicated focus state with minimal visual and cognitive stimuli</li>
              <li>A structured and explicit focus session summary</li>
            </ul>

            {/* First Prototype */}
            <div className="prototype-comparison">
              <h3 className="prototype-comparison-title">First Figma Prototype (v1)</h3>
              <div className="figma-image-container">
                <img src="/figmav1.png" alt="First Figma Prototype v1" className="figma-image" />
              </div>
              <p className="figma-caption">Initial prototype - Figma v1</p>
            </div>

            {/* Final Prototype v3 */}
            <div className="prototype-comparison" style={{ marginTop: '4rem' }}>
              <h3 className="prototype-comparison-title">Final Figma Prototype (HCI v3)</h3>
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
            </div>
          </section>

          {/* Role of the Summary Screen with Prototype GIF */}
          <section className="analysis-section">
            <div className="summary-with-gif">
              <div className="summary-content">
                <h2 className="analysis-section-title">The Summary as a Moment of Trust</h2>
                <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
                  The summary screen is central to the final design:
                </p>
                <ul className="analysis-list" style={{ marginBottom: '2rem' }}>
                  <li>It reassures the user</li>
                  <li>It visualises system behaviour</li>
                  <li>It shows how many notifications were handled, grouped, and prioritised</li>
                  <li>It enables reflection without interrupting focus</li>
                </ul>
                <div className="summary-clarification">
                  <p>
                    <strong>Clarification:</strong> Transparency is delivered after the study session, not during it.
                  </p>
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

          {/* Key Learning */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Key Learning</h2>
            <div className="key-learning-statement">
              <p className="key-learning-text">
                By simplifying choices during the focus session and concentrating explanation at the end, 
                the prototype balances interruption reduction with trust and user control.
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
          <Link href="/development" className="step-nav-button step-nav-prev">
            <svg className="step-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="step-nav-label">Previous: Development</span>
          </Link>
          <Link href="/final-prototype" className="step-nav-button step-nav-next">
            <span className="step-nav-label">Next: Final Prototype</span>
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

