"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Mail, Phone, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Custom LinkedIn SVG path to match Lucide icon styling
const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
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

export default function Contact() {
  const { linkedin, email, phone } = portfolioData.contact;

  const contactCards = [
    {
      title: "LinkedIn",
      value: "pearlinvarsha",
      href: linkedin,
      isExternal: true,
      isInternalLink: false,
      icon: <LinkedInIcon size={24} />,
      badgeClass: "badge-blue",
      color: "#0A66C2",
    },
    {
      title: "Email",
      value: email,
      href: "/contact", // Pointing to the new contact route
      isExternal: false,
      isInternalLink: true,
      icon: <Mail size={24} />,
      badgeClass: "badge-sage",
      color: "#2E7D32",
    },
    {
      title: "Phone",
      value: `+91 ${phone}`,
      href: `tel:${phone}`,
      isExternal: false,
      isInternalLink: false,
      icon: <Phone size={24} />,
      badgeClass: "badge-teal",
      color: "#00796B",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: "rgba(236, 242, 250, 0.15)" }}>
      {/* Background blobs specific to Contact */}
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          backgroundColor: "rgba(208, 225, 253, 0.35)", // Light Dusty Blue
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
              color: "var(--text-slate)",
              fontSize: "0.9rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <Send size={16} /> Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Let&apos;s Connect
          </motion.h2>
        </div>

        {/* Contact Cards Container */}
        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactCards.map((card, idx) => {
            const cardContent = (
              <>
                {/* Icon Container with subtle color matching */}
                <div
                  className={`contact-icon-wrapper ${card.badgeClass}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    marginBottom: "20px",
                    color: "var(--text-charcoal)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "var(--text-charcoal)",
                  }}
                >
                  {card.title}
                </h3>

                {/* Value / Link info */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-slate)",
                    wordBreak: "break-all",
                    maxWidth: "100%",
                  }}
                >
                  {card.value}
                </p>

                {/* External Arrow Indicator */}
                {card.isExternal && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      color: "rgba(90, 96, 101, 0.4)",
                    }}
                    className="contact-external-link"
                  >
                    <ExternalLink size={16} />
                  </div>
                )}
              </>
            );

            const cardStyle: React.CSSProperties = {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              padding: "40px",
              position: "relative",
              textDecoration: "none",
              color: "inherit",
              height: "100%",
            };

            if (card.isInternalLink) {
              return (
                <Link
                  key={idx}
                  href={card.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <motion.div
                    className="glass-card contact-card"
                    style={cardStyle}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    {cardContent}
                  </motion.div>
                </Link>
              );
            }

            return (
              <motion.a
                key={idx}
                href={card.href}
                target={card.isExternal ? "_blank" : undefined}
                rel={card.isExternal ? "noopener noreferrer" : undefined}
                className="glass-card contact-card"
                style={cardStyle}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {cardContent}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
