import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Ideation() {
  return (
    <>
      <Head>
        <title>Ideation - Group Project</title>
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
            <h1 className="analysis-page-title">Ideation</h1>
            <h2 className="analysis-subtitle">From Research Insights to Design Principles</h2>
            <p className="analysis-intro">
              This phase translates user research and problem analysis into guiding principles that shape 
              the concept, interaction logic, and identity of the system.
            </p>
          </section>

          {/* From Insights to Pillars */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Design Pillars</h2>
            <p className="analysis-intro" style={{ marginBottom: '3rem' }}>
              The ideation phase started by identifying core pillars that respond directly to user needs 
              uncovered during research.
            </p>

            {/* Pillar 1 */}
            <div className="pillar-block">
              <h3 className="pillar-title">Calm and Focus</h3>
              <div className="pillar-content">
                <p><strong>Goal:</strong> reduce cognitive noise and enable deep focus during study sessions</p>
                <p>The system should help users create mental space, reduce unnecessary stimuli, and encourage clarity</p>
                <div className="pillar-meta">
                  <div className="pillar-value">
                    <strong>Value</strong>
                    <p>Mental clarity and uninterrupted concentration</p>
                  </div>
                  <div className="pillar-keyword">
                    <strong>Keyword</strong>
                    <p>Clarity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-block">
              <h3 className="pillar-title">Transparency and Trust</h3>
              <div className="pillar-content">
                <p>Students need explanations and control to overcome fear of missing out</p>
                <p>Transparent decision-making, autonomy, and explainability are essential</p>
                <div className="pillar-meta">
                  <div className="pillar-value">
                    <strong>Value</strong>
                    <p>Understanding, control, and reliability</p>
                  </div>
                  <div className="pillar-keyword">
                    <strong>Keyword</strong>
                    <p>Insight</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-block">
              <h3 className="pillar-title">Adaptive and Ethical Technology</h3>
              <div className="pillar-content">
                <p>Notifications should be categorised intelligently</p>
                <p>The system adapts to the study environment</p>
                <p>Technology must be helpful, discreet, and ethically aligned</p>
                <p>No forceful manipulation or intrusive behaviour</p>
                <div className="pillar-meta">
                  <div className="pillar-value">
                    <strong>Value</strong>
                    <p>Responsiveness, respect, and intelligent behaviour</p>
                  </div>
                  <div className="pillar-keyword">
                    <strong>Keyword</strong>
                    <p>Flow</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pillars → Values → Keywords */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">From Pillars to Design Language</h2>
            <div className="pillars-table">
              <div className="table-header">
                <div className="table-cell">Pillar</div>
                <div className="table-cell">Value</div>
                <div className="table-cell">Keyword</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Calm and Focus</div>
                <div className="table-cell">Mental clarity and reduced cognitive noise</div>
                <div className="table-cell">Clarity</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Transparency and Trust</div>
                <div className="table-cell">Understanding and control</div>
                <div className="table-cell">Insight</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Adaptive and Ethical Tech</div>
                <div className="table-cell">Respectful, context-aware behaviour</div>
                <div className="table-cell">Flow</div>
              </div>
            </div>
          </section>

          {/* Naming Exploration */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Naming Exploration</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Naming was explored as part of ideation to reflect emotional tone, behavioural patterns, 
              and Calm Tech identity.
            </p>
            <div className="requirements-block">
              <h3 className="requirements-title">Requirements for the name:</h3>
              <ul className="analysis-list">
                <li>Promote relaxation</li>
                <li>Encourage concentration</li>
                <li>Reduce cognitive load</li>
                <li>Build trust</li>
                <li>Reduce FOMO</li>
                <li>Adapt to study routines</li>
                <li>Convey mental space and protection</li>
              </ul>
            </div>
          </section>

          {/* Naming Directions */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Naming Directions</h2>

            {/* Direction 1 */}
            <div className="naming-direction">
              <h3 className="naming-direction-title">Naming Direction 1: Calm and Mental Space</h3>
              <div className="naming-content">
                <div className="naming-references">
                  <h4 className="naming-subtitle">Conceptual references</h4>
                  <p>calm, quiet, stillness, mental clarity, gentle space, lightness</p>
                </div>
                <div className="naming-examples">
                  <h4 className="naming-subtitle">Examples explored</h4>
                  <p>StillFocus, QuietMind, Clario</p>
                </div>
                <p className="naming-explanation">
                  These names evoke clarity and reduced distraction.
                </p>
              </div>
            </div>

            {/* Direction 2 */}
            <div className="naming-direction">
              <h3 className="naming-direction-title">Naming Direction 2: Transparency and Insight</h3>
              <div className="naming-content">
                <div className="naming-references">
                  <h4 className="naming-subtitle">Conceptual references</h4>
                  <p>clarity, insight, lucidity, glass, transparency, understanding</p>
                </div>
                <div className="naming-examples">
                  <h4 className="naming-subtitle">Examples explored</h4>
                  <p>LucidFlow, ClearFocus</p>
                </div>
                <p className="naming-explanation">
                  These names communicate trust and explainability.
                </p>
              </div>
            </div>
          </section>

          {/* Final Concept Name */}
          <section className="analysis-section">
            <div className="concept-name-section">
              <h2 className="analysis-section-title">Chosen Concept Name</h2>
              <div className="concept-name-highlight">
                <h1 className="concept-name">Breathe</h1>
              </div>
              <div className="concept-explanation">
                <ul className="analysis-list">
                  <li>The name synthesises all three pillars</li>
                  <li>Conveys serenity, emotional control, mental space, and clarity</li>
                  <li>Suggests a pause from the constant flow of notifications</li>
                  <li>Aligns with Calm Tech visual direction</li>
                  <li>Reflects adaptability, transparency, and trust</li>
                  <li>Represents both functional and emotional value</li>
                </ul>
                <div className="concept-statement">
                  <p className="concept-statement-text">
                    <strong>Breathe</strong><br />
                    A context-aware, transparent, and ethically aligned notification system that gives students 
                    the mental space to focus, regain control, and breathe between interruptions.
                  </p>
                </div>
              </div>
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
          <Link href="/problem-analysis" className="step-nav-button step-nav-prev">
            <svg className="step-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="step-nav-label">Previous: Problem Analysis</span>
          </Link>
          <Link href="/development" className="step-nav-button step-nav-next">
            <span className="step-nav-label">Next: Development</span>
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

