import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function IndividualAssignment() {
  return (
    <>
      <Head>
        <title>Communicating Identity Through Personal Websites - Individual Assignment</title>
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
            <h1 className="analysis-page-title">Communicating Identity Through Personal Websites</h1>
            <h2 className="analysis-subtitle">Individual Assignment – Show & Tell</h2>
            <p className="analysis-intro">
              This assignment analyses how personal websites express identity, values, and communication style 
              through visuals, structure, tone, and interaction.
            </p>
          </section>

          {/* Good Communication Examples */}
          <section className="analysis-section">
            <h2 className="analysis-section-title">Good Communication</h2>
            <p className="analysis-intro" style={{ marginBottom: '3rem' }}>
              These examples clearly communicate identity, tone, and purpose through coherent design choices.
            </p>

            {/* Example 1 */}
            <div className="assignment-example">
              <div className="assignment-example-content">
                <h3 className="assignment-example-title">Example 1</h3>
                <a 
                  href="https://mikemai.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="assignment-url"
                >
                  https://mikemai.net/
                </a>
                <p className="assignment-evaluation">
                  Bold typography and concise copy express confidence and professionalism. The tone matches a 
                  design-led personality, with consistent branding across sections and smooth interactions.
                </p>
              </div>
              <div className="assignment-screenshot">
                <img src="/good_1.jpeg" alt="Mike Mai website screenshot" className="assignment-image" />
              </div>
            </div>

            {/* Example 2 */}
            <div className="assignment-example" style={{ marginTop: '4rem' }}>
              <div className="assignment-example-content">
                <h3 className="assignment-example-title">Example 2</h3>
                <a 
                  href="https://www.joshwcomeau.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="assignment-url"
                >
                  https://www.joshwcomeau.com/
                </a>
                <p className="assignment-evaluation">
                  The website feels professional yet friendly. Bright colors, playful micro-interactions, and 
                  accessible language create a personal but highly credible identity.
                </p>
              </div>
              <div className="assignment-screenshot">
                <img src="/good_2.png" alt="Josh Comeau website screenshot" className="assignment-image" />
              </div>
            </div>
          </section>

          {/* Poor Communication Examples */}
          <section className="analysis-section" style={{ marginTop: '5rem' }}>
            <h2 className="analysis-section-title">Poor Communication</h2>
            <p className="analysis-intro" style={{ marginBottom: '3rem' }}>
              These examples show how unclear structure, visual overload, or inconsistency can damage communication 
              and trust.
            </p>

            {/* Example 3 */}
            <div className="assignment-example">
              <div className="assignment-example-content">
                <h3 className="assignment-example-title">Example 3</h3>
                <a 
                  href="https://www.lingscars.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="assignment-url"
                >
                  https://www.lingscars.com/
                </a>
                <p className="assignment-evaluation">
                  The interface is visually overwhelming and confusing. Color usage, layout, and contrast choices 
                  undermine clarity and do not align with the product being sold.
                </p>
              </div>
              <div className="assignment-screenshot">
                <img src="/bad_1.png" alt="Lings Cars website screenshot" className="assignment-image" />
              </div>
            </div>

            {/* Example 4 */}
            <div className="assignment-example" style={{ marginTop: '4rem' }}>
              <div className="assignment-example-content">
                <h3 className="assignment-example-title">Example 4</h3>
                <a 
                  href="https://www.arngren.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="assignment-url"
                >
                  https://www.arngren.net/
                </a>
                <p className="assignment-evaluation">
                  The website lacks structure and hierarchy, with elements placed seemingly at random. This makes 
                  it difficult to understand purpose or navigate the content, severely harming communication.
                </p>
              </div>
              <div className="assignment-screenshot">
                <img src="/bad_2.jpeg" alt="Arngren website screenshot" className="assignment-image" />
              </div>
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

