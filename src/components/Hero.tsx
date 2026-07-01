"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Custom LinkedIn SVG path to match Lucide icon styling
const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const { name, title, intro, portrait } = portfolioData.personalInfo;
  const { linkedin } = portfolioData.contact;

  // Stagger entry configurations
  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="section" style={{ minHeight: "100vh", padding: "100px 24px 80px" }}>
      {/* Subtle lighting overlay for the Hero section */}
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(252,228,220,0.4) 0%, rgba(208,225,253,0.1) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ zIndex: 2 }}>
        <div className="hero-grid">
          
          {/* Left Column: Portrait */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portrait-container">
              {/* Rotating pulsing spotlight glow behind image */}
              <motion.div 
                className="portrait-glow" 
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.08, 0.95, 1],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Floating & Breathing Frame */}
              <motion.div 
                className="portrait-frame"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={portrait}
                  alt={name}
                  width={340}
                  height={340}
                  priority
                  className="portrait-img"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className="hero-right"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="hero-badge"
              variants={childVariants}
            >
              Welcome to my space
            </motion.span>

            <motion.h1
              className="hero-title"
              variants={childVariants}
            >
              Hi, I&apos;m <span className="highlight-text">{name}</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              variants={childVariants}
            >
              {title}
            </motion.h2>

            <motion.p
              className="hero-description"
              variants={childVariants}
            >
              {intro}
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={childVariants}
            >
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.div
                  className="btn-primary"
                  style={{ gap: "8px", display: "inline-flex", alignItems: "center" }}
                  whileHover={{
                    scale: 1.04,
                    borderRadius: "32px",
                    boxShadow: "0 8px 24px rgba(147, 182, 252, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  Contact Me <ArrowRight size={16} />
                </motion.div>
              </Link>
              
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  className="btn-secondary"
                  style={{ gap: "8px", display: "inline-flex", alignItems: "center" }}
                  whileHover={{
                    scale: 1.04,
                    borderRadius: "32px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <LinkedInIcon size={18} /> LinkedIn
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
