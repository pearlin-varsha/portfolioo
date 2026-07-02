"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { User, BookOpen, GraduationCap, Briefcase, Code2, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const formatHighlightedText = (text: string) => {
  const keywords = [
    { word: "Python", className: "highlight-blue-teal font-semibold" },
    { word: "Java", className: "highlight-sage-teal font-semibold" },
    { word: "PostgreSQL", className: "highlight-blue-teal font-semibold" },
    { word: "SQL", className: "highlight-sage-teal font-semibold" },
    { word: "React", className: "highlight-blue-teal font-semibold" },
    { word: "Expert Hire", className: "highlight-gold-coral font-semibold" },
    { word: "Vellore Institute of Technology", className: "highlight-blue-teal font-semibold" },
    { word: "VIT", className: "highlight-blue-teal font-semibold" },
    { word: "Computer Science student", className: "highlight-blue-teal font-semibold" },
    { word: "software engineering", className: "highlight-blue-teal font-semibold" },
  ];
  
  let parts: (string | React.ReactNode)[] = [text];
  
  keywords.forEach(({ word, className }) => {
    const newParts: (string | React.ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === "string") {
        const regex = new RegExp(`\\b(${word})\\b`, "g");
        const splitText = part.split(regex);
        for (let i = 0; i < splitText.length; i++) {
          if (i % 2 === 1) {
            newParts.push(<span key={word + i} className={className}>{splitText[i]}</span>);
          } else {
            newParts.push(splitText[i]);
          }
        }
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });
  
  return parts;
};

export default function About() {
  const paragraphs = portfolioData.about;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Custom configuration for the 5 Interactive Story Cards with collapsible extra details
  const cardsData = [
    {
      title: "Computer Science Student",
      content: paragraphs[0],
      detail: "Specializing in database design, sorting algorithms, and modular object-oriented software patterns.",
      icon: <GraduationCap size={22} />,
      bgColor: "var(--accent-blue-light)",
      accentColor: "var(--accent-blue)",
      spanClass: "about-card-span-3",
    },
    {
      title: "Expert Hire Intern",
      content: paragraphs[1],
      detail: "Learned how software projects scale, practiced repository pull-requests, and ran automated test suites.",
      icon: <Briefcase size={22} />,
      bgColor: "var(--accent-sage-light)",
      accentColor: "var(--accent-sage)",
      spanClass: "about-card-span-3",
    },
    {
      title: "Developer",
      content: paragraphs[2],
      detail: "Constantly testing REST APIs, structuring PostgreSQL schemas, and exploring React rendering states.",
      icon: <Code2 size={22} />,
      bgColor: "var(--accent-teal-light)",
      accentColor: "var(--accent-teal)",
      spanClass: "about-card-span-2",
    },
    {
      title: "Reader",
      content: "Beyond technology, you'll find me reading fiction, exploring fresh perspectives, and diving into different universes of storytelling. I believe that learning extends far beyond academic boundaries and builds a broader worldview.",
      detail: "Enjoys world-building novels, historical fiction, and non-fiction articles on scientific breakthroughs.",
      icon: <BookOpen size={22} />,
      bgColor: "var(--highlight-gold-light)",
      accentColor: "var(--highlight-gold)",
      spanClass: "about-card-span-2",
    },
    {
      title: "Movies & Sports",
      content: "Outside of work, I enjoy watching movies and following sports. These interests keep me inspired, energized, and connected to the beauty of collaborative teamwork and dynamic storytelling.",
      detail: "Follows football leagues, tracks cricket statistics, and analyzes visual storytelling methods in films.",
      icon: <Sparkles size={22} />,
      bgColor: "var(--highlight-coral-light)",
      accentColor: "var(--highlight-coral)",
      spanClass: "about-card-span-2",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="section" style={{ backgroundColor: "transparent" }}>
      {/* Background blobs specific to About section */}
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "rgba(174, 205, 166, 0.12)", // Sage Green
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "rgba(245, 196, 179, 0.1)", // Soft Coral/Warm Cream
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 1,
          animationDelay: "-3s",
        }}
      />

      <div className="container" style={{ zIndex: 2, maxWidth: "1000px" }}>
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            <User size={16} style={{ color: "var(--accent-sage)" }} /> A Little
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            About Me
          </motion.h2>
        </div>

        {/* Story Cards Grid */}
        <motion.div
          className="about-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className={`glass-card about-story-card ${card.spanClass}`}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 48px rgba(142, 151, 168, 0.12), 0 0 24px rgba(255, 255, 255, 0.45)",
                borderColor: card.accentColor,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
              }}
              style={{
                transition: "all 0.3s ease-in-out",
              }}
            >
              {/* Decorative top border bar unique to each card's theme */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  backgroundColor: card.accentColor,
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: card.bgColor,
                  color: card.accentColor,
                  marginBottom: "20px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.02)",
                  transition: "transform 0.3s ease, color 0.3s ease",
                  transform: hoveredCard === index ? "scale(1.1) rotate(5deg)" : "scale(1)",
                }}
              >
                {card.icon}
              </div>

              {/* Card Title */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "var(--text-headings)",
                  letterSpacing: "-0.01em",
                }}
              >
                {card.title}
              </h3>

              {/* Card Description Paragraph */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.65",
                  color: "var(--text-charcoal)",
                  margin: 0,
                }}
              >
                {formatHighlightedText(card.content)}
              </p>

              {/* Collapsible reveal details on hover */}
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{
                  height: hoveredCard === index ? "auto" : 0,
                  opacity: hoveredCard === index ? 1 : 0,
                  marginTop: hoveredCard === index ? 16 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden", width: "100%" }}
              >
                <div
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: "1.5",
                    color: "var(--text-slate)",
                    borderTop: `1px dashed rgba(90, 96, 101, 0.15)`,
                    paddingTop: "12px",
                  }}
                >
                  <strong style={{ color: card.accentColor }}>Core Details:</strong> {formatHighlightedText(card.detail)}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
