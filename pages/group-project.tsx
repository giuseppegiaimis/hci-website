import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function GroupProject() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "problem", "ideation", "development", "iterations", "final"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head>
        <title>Group Project — Full Process - Giuseppe Giaimis</title>
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
        <div className="group-project-page">
          {/* Title Section */}
          <div className="group-project-header">
            <span className="about-label text-center mb-4">
              Group Project
            </span>
            <h1 className="page-title text-center mb-8">
              Full Process
            </h1>
          </div>

          {/* Intro Section */}
          <section id="intro" className="project-section">
            <div className="section-content">
              <p className="intro-text">
                This project explores notification fatigue in university students through a human-centered design process. 
                Starting from empirical research, the work iteratively develops and refines a transparent, context-aware 
                notification experience aimed at protecting focus while preserving user agency.
              </p>
            </div>
          </section>

          {/* Process Indicator */}
          <div className="process-indicator">
            <div 
              className={`process-step ${activeSection === "problem" ? "active" : ""}`}
              onClick={() => scrollToSection("problem")}
            >
              <div className="step-number">1</div>
              <div className="step-label">Problem</div>
            </div>
            <div className="process-connector"></div>
            <div 
              className={`process-step ${activeSection === "ideation" ? "active" : ""}`}
              onClick={() => scrollToSection("ideation")}
            >
              <div className="step-number">2</div>
              <div className="step-label">Ideation</div>
            </div>
            <div className="process-connector"></div>
            <div 
              className={`process-step ${activeSection === "development" ? "active" : ""}`}
              onClick={() => scrollToSection("development")}
            >
              <div className="step-number">3</div>
              <div className="step-label">Development</div>
            </div>
            <div className="process-connector"></div>
            <div 
              className={`process-step ${activeSection === "iterations" ? "active" : ""}`}
              onClick={() => scrollToSection("iterations")}
            >
              <div className="step-number">4</div>
              <div className="step-label">Iterations</div>
            </div>
            <div className="process-connector"></div>
            <div 
              className={`process-step ${activeSection === "final" ? "active" : ""}`}
              onClick={() => scrollToSection("final")}
            >
              <div className="step-number">5</div>
              <div className="step-label">Final Prototype</div>
            </div>
          </div>

          {/* Problem Analysis Section */}
          <section id="problem" className="project-section">
            <div className="section-content">
              <h2 className="section-title">Problem Analysis</h2>
              <Link href="/problem-analysis" className="visual-container clickable-section">
                <div className="visual-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="80" height="80" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                    <path d="M30 40L45 55L70 30" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="visual-caption">User research insight</p>
              </Link>
            </div>
          </section>

          {/* Ideation Section */}
          <section id="ideation" className="project-section">
            <div className="section-content">
              <h2 className="section-title">Ideation</h2>
              <Link href="/ideation" className="visual-container clickable-section">
                <div className="visual-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="80" height="80" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                    <circle cx="35" cy="35" r="8" fill="rgba(255,255,255,0.2)"/>
                    <circle cx="65" cy="35" r="8" fill="rgba(255,255,255,0.2)"/>
                    <circle cx="50" cy="65" r="8" fill="rgba(255,255,255,0.2)"/>
                  </svg>
                </div>
                <p className="visual-caption">Early sketch exploration</p>
              </Link>
            </div>
          </section>

          {/* Development Section */}
          <section id="development" className="project-section">
            <div className="section-content">
              <h2 className="section-title">Development</h2>
              <Link href="/development" className="visual-container clickable-section">
                <div className="visual-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="80" height="80" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                    <rect x="25" y="30" width="50" height="40" rx="4" fill="rgba(255,255,255,0.1)"/>
                    <line x1="35" y1="45" x2="65" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <line x1="35" y1="55" x2="55" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  </svg>
                </div>
                <p className="visual-caption">Prototype development</p>
              </Link>
            </div>
          </section>

          {/* Iterations Section */}
          <section id="iterations" className="project-section">
            <div className="section-content">
              <h2 className="section-title">Iterations</h2>
              <Link href="/iterations" className="visual-container clickable-section">
                <div className="visual-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="80" height="80" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                    <path d="M20 50L40 30L60 50L80 30" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <p className="visual-caption">Prototype iteration</p>
              </Link>
            </div>
          </section>

          {/* Final Prototype Progression Section */}
          <section id="final" className="project-section">
            <div className="section-content">
              <h2 className="section-title">Final Prototype Progression</h2>
              <Link href="/final-prototype" className="visual-container clickable-section">
                <div className="visual-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="80" height="80" rx="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                    <rect x="20" y="25" width="60" height="50" rx="4" fill="rgba(255,255,255,0.15)"/>
                    <circle cx="50" cy="50" r="12" fill="rgba(255,255,255,0.2)"/>
                  </svg>
                </div>
                <p className="visual-caption">Final prototype showcase</p>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <div className="contact-section">
            <div className="contact-title">Curious to collaborate?</div>
            <div className="contact-subtitle">Contact me</div>
            <div className="contact-info">
              <div>+393755971016</div>
              <div>peppegiaimis@gmail.com</div>
            </div>
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
      </div>
    </>
  );
}

