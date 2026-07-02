"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code2, Database, Wrench, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

// Detailed skill profile dictionary for interactive tooltips
const skillDescriptions: Record<string, string> = {
  // Programming
  "Python": "Expertise in backend automation scripts, algorithms, and modular design.",
  "Java": "Solid foundation in structural OOP logic, inheritance, and clean syntax.",
  "React": "Component architecture, dynamic state management, and lifecycle hooks.",
  "HTML & CSS": "Responsive markup layouts, flexbox, grid systems, and custom styling.",
  "JavaScript": "Interactivity, event loops, DOM scripting, and frontend controls.",
  // Databases
  "PostgreSQL": "Relational databases, indexing optimizations, schema construction, and table relationships.",
  "SQL": "Query building, database queries, table joins, and sorting operations.",
  "Database Design": "Modeling data entity relations, normalization, and relational key definitions.",
  // Tools
  "Git & GitHub": "Collaborative version control, pull requests, merges, and branch workflows.",
  "Postman": "API client testing, request composition, headers validation, and response audits.",
  "Jira (Agile)": "Agile board ticket tracking, bug backlogs, and sprint planning schedules.",
  // Interests
  "Critical Thinking": "Deconstructing systems into operational components and debugging anomalies.",
  "Problem Solving": "Resolving complex runtime errors and structural bottlenecks efficiently.",
  "Active Learning": "Learning new frameworks, API docs, and coding design systems rapidly.",
};

export default function Skills() {
  const categories = portfolioData.skillsCategories;
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Icons and color helper based on category index or title
  const getCategoryTheme = (title: string, index: number) => {
    const cleanTitle = title.toLowerCase();
    if (cleanTitle.includes("programming")) {
      return {
        icon: <Code2 size={20} />,
        badgeClass: "badge-blue",
        glowColor: "rgba(157, 188, 230, 0.25)",
        iconColor: "var(--accent-blue)",
      };
    } else if (cleanTitle.includes("database")) {
      return {
        icon: <Database size={20} />,
        badgeClass: "badge-sage",
        glowColor: "rgba(174, 205, 166, 0.25)",
        iconColor: "var(--accent-sage)",
      };
    } else if (cleanTitle.includes("tool")) {
      return {
        icon: <Wrench size={20} />,
        badgeClass: "badge-teal",
        glowColor: "rgba(148, 210, 212, 0.25)",
        iconColor: "var(--accent-teal)",
      };
    } else {
      const isEven = index % 2 === 0;
      return {
        icon: <Heart size={20} />,
        badgeClass: isEven ? "badge-gold" : "badge-coral",
        glowColor: isEven ? "rgba(230, 197, 148, 0.25)" : "rgba(245, 196, 179, 0.25)",
        iconColor: isEven ? "var(--highlight-gold)" : "var(--highlight-coral)",
      };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: "transparent" }}>
      {/* Background blobs for Skills */}
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "rgba(230, 197, 148, 0.12)", // Soft Gold
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "rgba(245, 196, 179, 0.12)", // Soft Coral
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 1,
          animationDelay: "-2.5s",
        }}
      />

      {/* Subtle drifting background clouds */}
      <motion.div
        style={{
          position: "absolute",
          top: "45%",
          left: 0,
          width: "150px",
          height: "48px",
          borderRadius: "24px",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          filter: "blur(5px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
        animate={{ x: ["-170px", "100vw"] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear", delay: -8 }}
      />

      <div className="container" style={{ zIndex: 2, maxWidth: "1000px" }}>
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
            <Sparkles size={16} style={{ color: "var(--highlight-gold)" }} /> What I Know
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Skills & Interests
          </motion.h2>
        </div>

        {/* 1. Desktop Skills Layout - 2x2 grid (hidden on mobile via CSS) */}
        <div className="skills-desktop-layout">
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((cat, catIdx) => {
              const theme = getCategoryTheme(cat.title, catIdx);

              return (
                <motion.div
                  key={catIdx}
                  className="glass-card skill-cat-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 48px rgba(142, 151, 168, 0.12), 0 0 24px rgba(255, 255, 255, 0.45)",
                  }}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  {/* Dynamic mini glow blob behind each card */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: theme.glowColor,
                      filter: "blur(20px)",
                      zIndex: 0,
                    }}
                  />

                  {/* Category Header */}
                  <div className="skill-cat-header">
                    <div
                      className="skill-cat-icon"
                      style={{
                        color: theme.iconColor,
                        backgroundColor: theme.glowColor,
                        borderColor: `${theme.iconColor}30`,
                      }}
                    >
                      {theme.icon}
                    </div>
                    <h3 className="skill-cat-title">{cat.title}</h3>
                  </div>

                  {/* Skill Badges with Tooltips */}
                  <div className="skill-badges-container">
                    {cat.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        style={{ position: "relative", display: "inline-block" }}
                      >
                        <AnimatePresence>
                          {hoveredSkill === skill && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.96 }}
                              transition={{ duration: 0.15 }}
                              style={{
                                position: "absolute",
                                bottom: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                marginBottom: "8px",
                                width: "190px",
                                backgroundColor: "rgba(253, 251, 247, 0.95)",
                                border: "1px solid rgba(255, 255, 255, 0.7)",
                                borderRadius: "10px",
                                padding: "8px 12px",
                                boxShadow: "0 6px 20px rgba(142, 151, 168, 0.12)",
                                fontSize: "0.78rem",
                                lineHeight: "1.4",
                                color: "var(--text-charcoal)",
                                textAlign: "center",
                                zIndex: 50,
                                pointerEvents: "none",
                              }}
                            >
                              {skillDescriptions[skill] || "Practical competency and project experience."}
                              {/* Triangle pointer */}
                              <div
                                style={{
                                  position: "absolute",
                                  top: "100%",
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  width: 0,
                                  height: 0,
                                  borderLeft: "6px solid transparent",
                                  borderRight: "6px solid transparent",
                                  borderTop: "6px solid rgba(253, 251, 247, 0.95)",
                                }}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <motion.div
                          className={`badge ${theme.badgeClass}`}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.45}
                          dragTransition={{ bounceStiffness: 450, bounceDamping: 15 }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          style={{ cursor: "grab", position: "relative", zIndex: 10 }}
                        >
                          {skill}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* 2. Mobile Skills Layout - Tabbed view (hidden on desktop via CSS) */}
        <div className="skills-mobile-tabs-container">
          <div className="skills-tabs-scroller">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  setHoveredSkill(null); // Clear tooltip
                }}
                className={`skills-tab-button ${idx === activeTab ? "active" : ""}`}
                style={{
                  border: "none",
                  borderColor: idx === activeTab ? getCategoryTheme(cat.title, idx).iconColor : undefined,
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div style={{ minHeight: "220px" }}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card skill-cat-card"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Dynamic mini glow blob behind card */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: getCategoryTheme(categories[activeTab].title, activeTab).glowColor,
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />

              {/* Category Header */}
              <div className="skill-cat-header">
                <div
                  className="skill-cat-icon"
                  style={{
                    color: getCategoryTheme(categories[activeTab].title, activeTab).iconColor,
                    backgroundColor: getCategoryTheme(categories[activeTab].title, activeTab).glowColor,
                    borderColor: `${getCategoryTheme(categories[activeTab].title, activeTab).iconColor}30`,
                  }}
                >
                  {getCategoryTheme(categories[activeTab].title, activeTab).icon}
                </div>
                <h3 className="skill-cat-title">{categories[activeTab].title}</h3>
              </div>

              {/* Skill Badges with Tooltips */}
              <div className="skill-badges-container">
                {categories[activeTab].skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <AnimatePresence>
                      {hoveredSkill === skill && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          style={{
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            marginBottom: "8px",
                            width: "170px",
                            backgroundColor: "rgba(253, 251, 247, 0.95)",
                            border: "1px solid rgba(255, 255, 255, 0.7)",
                            borderRadius: "10px",
                            padding: "8px 12px",
                            boxShadow: "0 6px 20px rgba(142, 151, 168, 0.12)",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            color: "var(--text-charcoal)",
                            textAlign: "center",
                            zIndex: 50,
                            pointerEvents: "none",
                          }}
                        >
                          {skillDescriptions[skill] || "Practical competency and project experience."}
                          {/* Triangle pointer */}
                          <div
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 0,
                              height: 0,
                              borderLeft: "6px solid transparent",
                              borderRight: "6px solid transparent",
                              borderTop: "6px solid rgba(253, 251, 247, 0.95)",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div
                      className={`badge ${getCategoryTheme(categories[activeTab].title, activeTab).badgeClass}`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => setHoveredSkill(hoveredSkill === skill ? null : skill)}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.45}
                      dragTransition={{ bounceStiffness: 450, bounceDamping: 15 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ cursor: "grab", position: "relative", zIndex: 10 }}
                    >
                      {skill}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
