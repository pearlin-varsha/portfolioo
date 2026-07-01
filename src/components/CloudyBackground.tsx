"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function CloudyBackground() {
  useEffect(() => {
    const container = document.getElementById("parallax-bg-container");
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offsets (-0.5 to 0.5) from the viewport center
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;

      container.style.setProperty("--mouse-x", `${e.clientX}px`);
      container.style.setProperty("--mouse-y", `${e.clientY}px`);
      container.style.setProperty("--mouse-ratio-x", `${x}`);
      container.style.setProperty("--mouse-ratio-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = [
    { size: 12, bg: "#C4D9FD", top: "75%", left: "15%", duration: 25, delay: 0 },
    { size: 16, bg: "#CAD9FD", top: "85%", left: "80%", duration: 30, delay: -4 },
    { size: 10, bg: "#D9E2FC", top: "45%", left: "35%", duration: 20, delay: -8 },
    { size: 14, bg: "#BDEEF4", top: "25%", left: "85%", duration: 28, delay: -12 },
    { size: 18, bg: "#93B6FC", top: "60%", left: "20%", duration: 35, delay: -16 },
    { size: 11, bg: "#F9D3C6", top: "30%", left: "10%", duration: 22, delay: -2 },
  ];

  return (
    <div
      id="parallax-bg-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#F3F7FF", // fallback light blue background
        // Default initial fallback values for custom CSS variables
        "--mouse-x": "0px",
        "--mouse-y": "0px",
        "--mouse-ratio-x": "0",
        "--mouse-ratio-y": "0",
      } as React.CSSProperties & Record<string, string | number>}
    >
      {/* Soft gradient background layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #F0F6FF 0%, #FFFFFF 50%, #F4F8FE 100%)",
          opacity: 1.0,
        }}
      />

      {/* Subtle mouse-follow radial spotlight glow overlay (desktop only, driven by CSS variables) */}
      <div
        className="desktop-only"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: "radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 80%)",
          zIndex: 2,
        }}
      />

      {/* Floating Sparkles/Dust Layer */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: p.bg,
            top: p.top,
            left: p.left,
            opacity: 0.22,
            filter: "blur(3px)",
            pointerEvents: "none",
            zIndex: 2,
          }}
          animate={{
            y: [200, -500],
            x: [0, 50, -50, 0],
            scale: [0.8, 1.2, 0.9, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Blob 1: Light Dusty Blue - Top Left */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-10vw",
          width: "45vw",
          height: "45vw",
          transform: "translate3d(calc(var(--mouse-ratio-x) * 25px), calc(var(--mouse-ratio-y) * 25px), 0)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <motion.div
          className="bg-blob animate-cloud-1"
          style={{
            backgroundColor: "#A4C6FF",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Blob 2: Periwinkle Blue - Mid Right */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "-15vw",
          width: "50vw",
          height: "50vw",
          transform: "translate3d(calc(var(--mouse-ratio-x) * -35px), calc(var(--mouse-ratio-y) * -35px), 0)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <motion.div
          className="bg-blob animate-cloud-2"
          style={{
            backgroundColor: "#B0C8FF",
            width: "100%",
            height: "100%",
            animationDelay: "-5s",
          }}
        />
      </div>

      {/* Blob 3: Lavender Blue - Bottom Left */}
      <div
        style={{
          position: "absolute",
          bottom: "-5vh",
          left: "-5vw",
          width: "40vw",
          height: "40vw",
          transform: "translate3d(calc(var(--mouse-ratio-x) * 20px), calc(var(--mouse-ratio-y) * -20px), 0)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <motion.div
          className="bg-blob animate-cloud-1"
          style={{
            backgroundColor: "#C5D5FF",
            width: "100%",
            height: "100%",
            animationDelay: "-10s",
          }}
        />
      </div>

      {/* Blob 4: Light Cyan Blue - Center Left */}
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "15vw",
          width: "35vw",
          height: "35vw",
          transform: "translate3d(calc(var(--mouse-ratio-x) * -20px), calc(var(--mouse-ratio-y) * 30px), 0)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <motion.div
          className="bg-blob animate-cloud-2"
          style={{
            backgroundColor: "#9EEFFB",
            width: "100%",
            height: "100%",
            animationDelay: "-15s",
          }}
        />
      </div>

      {/* Blob 5: Sky Blue - Bottom Right */}
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          right: "10vw",
          width: "45vw",
          height: "45vw",
          transform: "translate3d(calc(var(--mouse-ratio-x) * 30px), calc(var(--mouse-ratio-y) * 30px), 0)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <motion.div
          className="bg-blob animate-cloud-1"
          style={{
            backgroundColor: "#81A9FF",
            width: "100%",
            height: "100%",
            animationDelay: "-20s",
          }}
        />
      </div>

      {/* Fine-grained texture overlay to give depth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
