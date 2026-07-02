"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle2, Code2, Database, Link2, GitBranch, FileCheck2, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { company, role, period, description, skillsLearned } = portfolioData.experience;
  const [activeSkill, setActiveSkill] = useState(0);

  // Workspace items matching the 6 requested skills
  const workspaceSkills = [
    {
      name: "Python",
      icon: <Code2 size={20} />,
      bgColor: "rgba(208, 225, 253, 0.4)",
      accentColor: "var(--accent-blue)",
      detail: "Developed modular backend application scripts, designed code components, and deconstructed operational logic into clean execution blocks.",
    },
    {
      name: "PostgreSQL",
      icon: <Database size={20} />,
      bgColor: "rgba(210, 227, 212, 0.4)",
      accentColor: "var(--accent-sage)",
      detail: "Designed database schemas, wrote optimized raw queries, handled table joins, and managed migrations to index data efficiently.",
    },
    {
      name: "REST APIs",
      icon: <Link2 size={20} />,
      bgColor: "rgba(204, 234, 229, 0.4)",
      accentColor: "var(--accent-teal)",
      detail: "Engineered and integrated backend endpoints, formatting query structures and JSON body payloads for high-speed client delivery.",
    },
    {
      name: "GitHub",
      icon: <GitBranch size={20} />,
      bgColor: "rgba(246, 236, 189, 0.4)",
      accentColor: "var(--highlight-gold)",
      detail: "Coordinated revisions using source control, handled branch conflict merges, submitted PRs, and participated in cooperative peer reviews.",
    },
    {
      name: "Testing",
      icon: <FileCheck2 size={20} />,
      bgColor: "rgba(249, 211, 198, 0.4)",
      accentColor: "var(--highlight-coral)",
      detail: "Drafted functional test plans, wrote comprehensive unit assertions, and executed test scenarios to maximize coverage and reliability.",
    },
    {
      name: "Postman",
      icon: <Terminal size={20} />,
      bgColor: "rgba(217, 226, 252, 0.4)",
      accentColor: "var(--accent-blue)",
      detail: "Validated API endpoint requests, verified JSON response objects, tested headers, and deconstructed network status codes during debugging.",
    },
  ];

  return (
    <section id="experience" className="section" style={{ backgroundColor: "transparent" }}>
      {/* Background blobs specific to Experience section */}
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "rgba(148, 210, 212, 0.15)", // Soft Teal
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Subtle drifting background clouds */}
      <motion.div
        style={{
          position: "absolute",
          top: "15%",
          left: 0,
          width: "130px",
          height: "42px",
          borderRadius: "21px",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          filter: "blur(5px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
        animate={{ x: ["-150px", "100vw"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear", delay: -10 }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "70%",
          left: 0,
          width: "100px",
          height: "32px",
          borderRadius: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.55)",
          filter: "blur(4px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
        animate={{ x: ["-120px", "100vw"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: -20 }}
      />

      <div className="container" style={{ zIndex: 2, maxWidth: "950px" }}>
        {/* Section Header */}
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
            <Briefcase size={16} style={{ color: "var(--accent-teal-dark)" }} /> My Professional
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Experience Premium Card */}
        <motion.div
          className="glass-card experience-premium-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{
            y: -6,
            boxShadow: "0 20px 48px rgba(142, 151, 168, 0.12), 0 0 24px rgba(255, 255, 255, 0.45)",
          }}
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Side Accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "6px",
              bottom: 0,
              background: "linear-gradient(180deg, var(--accent-teal) 0%, var(--accent-blue) 100%)",
            }}
          />

          {/* Job Details Header */}
          <div className="experience-header">
            <div>
              <span className="exp-company" style={{ color: "var(--accent-teal-dark)" }}>{company}</span>
              <h3 className="exp-role">{role}</h3>
            </div>
            <span className="exp-period" style={{ border: "1px solid rgba(148, 210, 212, 0.3)" }}>{period}</span>
          </div>

          <p className="exp-description" style={{ marginBottom: "36px", color: "var(--text-charcoal)" }}>{description}</p>

          {/* Living Workspace Section */}
          <div style={{ marginBottom: "44px" }}>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text-headings)",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-teal)",
                  boxShadow: "0 0 10px rgba(148, 210, 212, 0.4)",
                }}
              />
              Internship Tech Workspace
            </h4>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "30px",
              }}
              className="building-grid" /* reuse responsive 2-column helper */
            >
              {/* Workspace Board of interactive buttons */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "12px",
                }}
              >
                {workspaceSkills.map((skill, idx) => {
                  const isActive = activeSkill === idx;
                  return (
                    <motion.button
                      key={idx}
                      onClick={() => setActiveSkill(idx)}
                      onMouseEnter={() => setActiveSkill(idx)}
                      whileHover={{ scale: 1.02, y: -2 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "14px 16px",
                        borderRadius: "14px",
                        border: "1px solid",
                        borderColor: isActive ? skill.accentColor : "rgba(255, 255, 255, 0.5)",
                        backgroundColor: isActive ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)",
                        cursor: "pointer",
                        textAlign: "left",
                        color: "var(--text-charcoal)",
                        boxShadow: isActive ? `0 8px 20px ${skill.accentColor}25` : "none",
                        transition: "all 300ms ease-in-out",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "34px",
                          height: "34px",
                          borderRadius: "10px",
                          backgroundColor: skill.bgColor,
                          color: skill.accentColor,
                          flexShrink: 0,
                          transition: "all 0.3s ease",
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                        }}
                      >
                        {skill.icon}
                      </div>
                      <span style={{ fontSize: "0.92rem", fontWeight: 600 }}>{skill.name}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Workspace Console display terminal */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkill}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      border: `1px solid ${workspaceSkills[activeSkill].accentColor}`,
                      borderRadius: "16px",
                      padding: "24px",
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      minHeight: "150px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Glowing Cable Plug Node (Parallax connector signal) */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-4px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: workspaceSkills[activeSkill].accentColor,
                        boxShadow: `0 0 6px ${workspaceSkills[activeSkill].accentColor}`,
                        zIndex: 10,
                      }}
                    />

                    {/* Laser scanning sweep line */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: `linear-gradient(90deg, transparent 0%, ${workspaceSkills[activeSkill].accentColor} 50%, transparent 100%)`,
                        opacity: 0.08,
                        pointerEvents: "none",
                      }}
                      animate={{ y: [0, 150] }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    />

                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: workspaceSkills[activeSkill].accentColor,
                        marginBottom: "6px",
                      }}
                    >
                      Usage Profile
                    </span>
                    
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        margin: "0 0 8px 0",
                        color: "var(--text-headings)",
                      }}
                    >
                      {workspaceSkills[activeSkill].name}
                    </h4>
                    
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.65", color: "var(--text-charcoal)", margin: 0 }}>
                      {workspaceSkills[activeSkill].detail}
                      {/* Blinking terminal square cursor */}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "12px",
                          backgroundColor: workspaceSkills[activeSkill].accentColor,
                          marginLeft: "4px",
                          verticalAlign: "middle",
                        }}
                      />
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Original Competencies checklist */}
          <div className="skills-learned-section">
            <h4 className="skills-learned-title" style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-charcoal)" }}>
              Core Responsibilities & Workflow Accomplishments
            </h4>
            <div className="skills-learned-grid">
              {skillsLearned.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="skill-learned-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle2 size={16} className="skill-check-icon" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
