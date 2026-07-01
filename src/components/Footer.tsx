"use client";

import React from "react";
import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Custom LinkedIn SVG path to match Lucide icon styling
const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
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

export default function Footer() {
  const { name } = portfolioData.personalInfo;
  const { linkedin, email } = portfolioData.contact;

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-cream)",
        padding: "40px 24px",
        borderTop: "1px solid rgba(90, 96, 101, 0.08)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Social Icons Row */}
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-slate)",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            className="footer-icon-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={`mailto:${email}`}
            style={{
              color: "var(--text-slate)",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            className="footer-icon-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright Text */}
        <div
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: "0.9rem",
            color: "var(--text-slate)",
            fontWeight: 400,
          }}
        >
          © 2026 {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
