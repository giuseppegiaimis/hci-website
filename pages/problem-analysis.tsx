import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function ProblemAnalysis() {
  return (
    <>
      <Head>
        <title>Project Analysis - Group Project</title>
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
            <h1 className="analysis-page-title">Project Analysis</h1>
            <h2 className="analysis-subtitle">Understanding Notification Fatigue in University Students</h2>
            <p className="analysis-intro">
              This phase focuses on problem framing, ethics, technology constraints, and existing solutions 
              to establish a solid foundation for the design process.
            </p>
          </section>

          {/* Problem Definition */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Problem Definition</h2>
            <div className="problem-statement">
              Users in digital environments struggle with notification overload when apps send frequent, 
              irrelevant, or poorly timed alerts across multiple devices.
            </div>
          </section>

          {/* Tech Perspective */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Technology: Enablers & Constraints</h2>
            <ul className="analysis-list">
              <li>Push notification systems are embedded in modern operating systems (iOS, Android).</li>
              <li>Notifications appear across smartphones, tablets, and smartwatches.</li>
              <li>AI and machine learning are sometimes used to decide what and when to notify users.</li>
              <li>These systems are often unreliable, promoting irrelevant content or poor timing.</li>
              <li>Notification controls are fragmented across apps and hidden in deep menus.</li>
              <li>Users lack a centralised, clear way to manage notifications intentionally.</li>
            </ul>
          </section>

          {/* Ethics Perspective */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Ethical Considerations</h2>
            
            <div className="ethics-subsection">
              <h3 className="ethics-subtitle">Risks</h3>
              <ul className="analysis-list">
                <li>Stress, anxiety, reduced concentration caused by constant interruptions</li>
                <li>Manipulative engagement strategies prioritising attention over wellbeing</li>
              </ul>
            </div>

            <div className="ethics-subsection">
              <h3 className="ethics-subtitle">Rights</h3>
              <ul className="analysis-list">
                <li>Digital autonomy</li>
                <li>Informed consent</li>
                <li>Privacy regarding personal data used for notifications</li>
              </ul>
            </div>

            <div className="ethics-subsection">
              <h3 className="ethics-subtitle">Stakeholders</h3>
              <ul className="analysis-list">
                <li><strong>Primary:</strong> university students, remote workers, heavy digital tool users</li>
                <li><strong>Secondary:</strong> developers, tech companies, advertisers</li>
              </ul>
            </div>
          </section>

          {/* Design Perspective */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Design Issues in Current Notification Systems</h2>
            <ul className="analysis-list">
              <li>Visually intrusive pop-ups, banners, and badge accumulation</li>
              <li>Poor feedback when muting or dismissing notifications</li>
              <li>Inconsistent notification behaviour within the same app</li>
              <li>Onboarding that pushes users to &quot;Allow notifications&quot; without explanation</li>
              <li>Difficulty finding or understanding notification settings later</li>
              <li>App-centric design instead of user-centric experience</li>
            </ul>
          </section>

          {/* State of the Art */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">State of the Art</h2>
            <ul className="analysis-list">
              <li>Do Not Disturb and Focus modes</li>
              <li>Digital wellbeing tools (screen time, focus tools)</li>
              <li>AI-based &quot;smart notifications&quot; (e.g. Gmail, Instagram)</li>
              <li>Third-party apps that filter or bundle notifications</li>
            </ul>
            <div className="state-of-art-note">
              <p><strong>Key limitations:</strong> These solutions are fragmented, mostly reactive, 
              and responsibility is placed entirely on the user.</p>
            </div>
          </section>

          {/* Gap */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Identified Gap</h2>
            <ul className="analysis-list">
              <li>Existing solutions act after overload happens</li>
              <li>Users lack transparency on why notifications are shown</li>
              <li>Algorithms and settings are opaque</li>
              <li>Psychological and emotional effects are largely ignored</li>
              <li>Design focuses on functionality rather than lived experience</li>
            </ul>
          </section>

          {/* Opportunity Statement */}
          <section className="analysis-section">
            <div className="opportunity-statement">
              <h2 className="opportunity-title">Design Opportunity</h2>
              <p className="opportunity-text">
                By leveraging transparent customisation tools and adaptive notification filtering, 
                we can reduce cognitive load, enhance digital wellbeing, and restore user control 
                over attention for mobile users.
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
          <div className="step-nav-spacer"></div>
          <Link href="/ideation" className="step-nav-button step-nav-next">
            <span className="step-nav-label">Next: Ideation</span>
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

