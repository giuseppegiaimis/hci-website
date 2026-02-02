import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import BoxesCarousel from "../components/BoxesCarousel";

export default function Projects() {
  useEffect(() => {
    // Trigger animation after 1 second
    const timer = setTimeout(() => {
      const groupProjectCard = document.querySelector('.group-project-card') as HTMLElement;
      const boxesContainer = document.querySelector('.boxes-container') as HTMLElement;
      
      if (groupProjectCard) {
        groupProjectCard.style.opacity = '1';
        groupProjectCard.style.pointerEvents = 'auto';
      }
      if (boxesContainer) {
        boxesContainer.style.opacity = '1';
        boxesContainer.style.pointerEvents = 'auto';
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const assignmentsData = [
    {
      title: "Show & Tell: Website Identity",
      subtitle: "A critical analysis of how personal websites communicate identity, values, and tone through design choices.",
      href: "/individual-assignment"
    },
    {
      title: "User Feedback & Iteration",
      subtitle: "Integrating external user feedback through HCI principles to improve usability, clarity, and learnability.",
      href: "/user-feedback"
    }
  ];

  return (
    <>
      <Head>
        <title>Projects - Giuseppe Giaimis</title>
      </Head>
      <div className="animated-gradient projects-page">
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
      
      <div className="main-content">
        <span className="about-label text-center mb-4">
          Projects
        </span>
        <h1 className="page-title text-center mb-8">
          Ideas that Connect
        </h1>
        <p className="page-subtitle text-center max-w-3xl px-4">
          A collection of projects that showcase my journey in technology, design, and creative problem-solving.
        </p>
      </div>
      
      {/* Group Project Card - Large and Centered */}
      <Link href="/group-project" className="group-project-card">
        <div className="group-project-title">Group Project</div>
        <div className="group-project-subtitle">Designing for Cognitive Agency</div>
        <div className="group-project-description">From problem analysis to iterative prototyping</div>
      </Link>
      
      {/* Assignments Container */}
      <BoxesCarousel boxes={assignmentsData} />
      
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
    </>
  );
}
