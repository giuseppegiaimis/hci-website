import React from "react";

interface AnimatedGradientBgProps {
  children?: React.ReactNode;
}

export default function AnimatedGradientBg({ children }: AnimatedGradientBgProps) {
  return (
    <div className="relative min-h-screen">
      {/* Background layer - versione statica per test */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      />
      <div className="relative">{children}</div>
    </div>
  );
}