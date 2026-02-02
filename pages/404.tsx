import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="animated-gradient">
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
        <div className="flex min-h-screen items-center justify-center flex-col">
          <h1 className="page-title text-center mb-8">404</h1>
          <p className="page-subtitle text-center max-w-2xl px-4 mb-12">
            Page not found
          </p>
          <Link href="/">
            <button className="discover-button">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

