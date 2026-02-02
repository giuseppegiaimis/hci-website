import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function UserFeedback() {
  return (
    <>
      <Head>
        <title>Assignment #2 — User Feedback - Individual Assignment</title>
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
          {/* Page Header */}
          <section className="analysis-hero">
            <h1 className="analysis-page-title">Assignment #2 — User Feedback</h1>
            <h2 className="analysis-subtitle">Integrating External Feedback Through an HCI Lens</h2>
            <p className="analysis-intro">
              This assignment focuses on understanding how different users experience the interface, applying 
              HCI principles to evaluate feedback, and implementing usability improvements.
            </p>
          </section>

          {/* Audience & Users */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Audience & Users</h2>
            
            <div className="feedback-section">
              <h3 className="feedback-subsection-title">Target Audience</h3>
              <p className="analysis-intro">
                The website targets students, early-career professionals, and potential collaborators in technology, 
                data, and design who are interested in interdisciplinary profiles and personal projects.
              </p>
            </div>

            <div className="feedback-section" style={{ marginTop: '3rem' }}>
              <h3 className="feedback-subsection-title">Selected Users (Anonymized)</h3>
              <div className="users-list">
                <div className="user-item">
                  <h4 className="user-name">User A — UX / Visual Designer</h4>
                  <p className="user-relevance">
                    Relevant for evaluating visual clarity, typography, and aesthetic coherence.
                  </p>
                </div>
                <div className="user-item">
                  <h4 className="user-name">User B — Computer Science MSc Student</h4>
                  <p className="user-relevance">
                    Relevant as a technically skilled peer familiar with portfolio and project-based websites.
                  </p>
                </div>
                <div className="user-item">
                  <h4 className="user-name">User C — University Student (Non-technical background)</h4>
                  <p className="user-relevance">
                    Relevant to assess clarity and learnability for users outside the tech/design domain.
                  </p>
                </div>
              </div>
              <p className="feedback-note" style={{ marginTop: '1.5rem' }}>
                (No names, photos, or personal details.)
              </p>
            </div>
          </section>

          {/* Feedback Log */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Feedback Log</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Feedback collected from users, anonymized and organized by HCI themes.
            </p>
            
            <div className="feedback-table-wrapper">
              <table className="feedback-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role (generic)</th>
                    <th>Context</th>
                    <th>Key finding (paraphrased)</th>
                    <th>HCI theme</th>
                    <th>Action taken</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>User A</td>
                    <td>UX / visual designer</td>
                    <td>Desktop</td>
                    <td>Multiple decorative fonts reduce clarity; a simpler font would improve readability.</td>
                    <td>Consistency / readability</td>
                    <td>Reduced typography to one primary font</td>
                  </tr>
                  <tr>
                    <td>User B</td>
                    <td>CS MSc student</td>
                    <td>Desktop</td>
                    <td>It&apos;s not immediately clear which projects are academic vs. personal.</td>
                    <td>Information architecture</td>
                    <td>Added contextual project labels</td>
                  </tr>
                  <tr>
                    <td>User C</td>
                    <td>University student</td>
                    <td>Mobile</td>
                    <td>The purpose of the website is not immediately clear.</td>
                    <td>Learnability / clarity</td>
                    <td>Clarified purpose in hero section</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Evaluation & Decisions */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Evaluation & Decisions</h2>
            <p className="analysis-intro" style={{ marginBottom: '2rem' }}>
              Feedback was clustered into themes, not treated individually. This approach ensures that changes 
              address systemic issues rather than isolated preferences.
            </p>
            
            <div className="evaluation-themes">
              <div className="theme-item">
                <h3 className="theme-title">Visual consistency</h3>
                <p className="analysis-intro">
                  Feedback highlighted excessive typographic variety increasing visual noise.
                </p>
                <p className="theme-action">
                  → Addressed using the HCI principle of <strong>consistency</strong>.
                </p>
              </div>

              <div className="theme-item">
                <h3 className="theme-title">Information clarity</h3>
                <p className="analysis-intro">
                  Technical users struggled to quickly understand content structure.
                </p>
                <p className="theme-action">
                  → Identified as an <strong>information architecture</strong> issue.
                </p>
              </div>

              <div className="theme-item">
                <h3 className="theme-title">Learnability for non-experts</h3>
                <p className="analysis-intro">
                  Non-technical users needed clearer initial communication.
                </p>
                <p className="theme-action">
                  → Addressed through clearer <strong>purpose definition</strong>.
                </p>
              </div>
            </div>

            <div className="evaluation-note" style={{ marginTop: '2rem' }}>
              <p>
                <strong>Feedback based purely on personal taste was not implemented unless it affected 
                usability or clarity.</strong>
              </p>
            </div>
          </section>

          {/* Implemented Changes */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Implemented Changes</h2>
            
            {/* Change 1: Typography Simplification */}
            <div className="change-item">
              <h3 className="change-title">Typography Simplification</h3>
              <div className="before-after-container">
                <div className="before-after-item">
                  <h4 className="before-after-label">Before</h4>
                  <p className="before-after-description">Multiple decorative fonts</p>
                  <div className="before-after-image">
                    <img src="/multipledecorativebefore.png" alt="Before: Multiple decorative fonts" className="before-after-img" />
                  </div>
                </div>
                <div className="before-after-item">
                  <h4 className="before-after-label">After</h4>
                  <p className="before-after-description">One primary, simpler font</p>
                  <div className="before-after-image">
                    <img src="/multipledecorativeafter.png" alt="After: One primary font" className="before-after-img" />
                  </div>
                </div>
              </div>
              <p className="change-rationale">
                → <strong>Rationale:</strong> Improve consistency and reading comfort.
              </p>
            </div>

            {/* Change 2: Project Labeling */}
            <div className="change-item" style={{ marginTop: '4rem' }}>
              <h3 className="change-title">Project Labeling</h3>
              <div className="before-after-container">
                <div className="before-after-item">
                  <h4 className="before-after-label">Before</h4>
                  <p className="before-after-description">Projects listed without context</p>
                  <div className="before-after-image">
                    <img src="/projectwithoutlabelsbefore.png" alt="Before: Projects without labels" className="before-after-img" />
                  </div>
                </div>
                <div className="before-after-item">
                  <h4 className="before-after-label">After</h4>
                  <p className="before-after-description">Added brief descriptors (academic / personal)</p>
                  <div className="before-after-image">
                    <img src="/projectwithoutlabelsafter.png" alt="After: Projects with labels" className="before-after-img" />
                  </div>
                </div>
              </div>
              <p className="change-rationale">
                → <strong>Rationale:</strong> Improve information architecture.
              </p>
            </div>

            {/* Change 3: Hero Message Clarity */}
            <div className="change-item" style={{ marginTop: '4rem' }}>
              <h3 className="change-title">Hero Message Clarity</h3>
              <div className="before-after-container">
                <div className="before-after-item">
                  <h4 className="before-after-label">Before</h4>
                  <p className="before-after-description">Implicit purpose</p>
                  <div className="before-after-image">
                    <img src="/herobefore.png" alt="Before: Implicit purpose" className="before-after-img" />
                  </div>
                </div>
                <div className="before-after-item">
                  <h4 className="before-after-label">After</h4>
                  <p className="before-after-description">Clearer statement of intent</p>
                  <div className="before-after-image">
                    <img src="/heroafter.png" alt="After: Clear purpose statement" className="before-after-img" />
                  </div>
                </div>
              </div>
              <p className="change-rationale">
                → <strong>Rationale:</strong> Reduce cognitive effort during first interaction.
              </p>
            </div>
          </section>
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

