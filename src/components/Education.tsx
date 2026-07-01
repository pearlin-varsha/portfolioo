"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Hammer } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  const educationItems = portfolioData.education;
  // Default active floor is index 0 (Vellore Institute of Technology - Top Floor)
  const [activeFloor, setActiveFloor] = useState(0);

  // Helper to map floor labels
  const getFloorLabel = (index: number) => {
    switch (index) {
      case 0:
        return "Level 3 - Top Floor";
      case 1:
        return "Level 2 - Middle Floor";
      case 2:
        return "Level 1 - Foundation";
      default:
        return "";
    }
  };

  return (
    <section id="education" className="section" style={{ backgroundColor: "rgba(208, 225, 253, 0.15)" }}>
      {/* Background elements for Education */}
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "rgba(208, 225, 253, 0.4)", // Dusty Blue
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        className="animate-glow"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "rgba(189, 238, 244, 0.35)", // Light Cyan Blue
          filter: "blur(55px)",
          pointerEvents: "none",
          zIndex: 1,
          animationDelay: "-4s",
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
            <GraduationCap size={16} /> Academic Growth
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Building My Education
          </motion.h2>
        </div>

        {/* Interactive Building Grid */}
        <div className="building-grid">
          
          {/* Left Column: Interactive Building Stack */}
          <div className="building-visualization-column" style={{ overflow: "hidden" }}>
            
            {/* Drifting Cloud Behind the building (Z-Index 5) */}
            <motion.div
              style={{
                position: "absolute",
                top: "15%",
                left: "-30px",
                width: "90px",
                height: "36px",
                borderRadius: "18px",
                backgroundColor: "rgba(255, 255, 255, 0.65)",
                filter: "blur(5px)",
                zIndex: 5,
                pointerEvents: "none",
              }}
              animate={{ x: [-100, 350] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Level 3: VIT (Top Floor, index 0) */}
            <motion.div
              className={`building-floor building-floor-3 ${activeFloor === 0 ? "active" : ""}`}
              onClick={() => setActiveFloor(0)}
              onMouseEnter={() => setActiveFloor(0)}
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {/* Crane Hook Rope SVG effect representing active building state */}
              <div className="crane-arm-line" />
              
              {/* Warning beacon flashing light */}
              <div className="construction-light" />
              
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-charcoal)", marginBottom: "4px" }}>
                <Hammer size={15} style={{ color: "#FFA726" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#FFA726", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Under Construction
                </span>
              </div>
              
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-charcoal)", margin: 0 }}>
                VIT University
              </h4>
              <span style={{ fontSize: "0.75rem", color: "var(--text-slate)" }}>
                Level 3 (Top Floor)
              </span>

              {/* Windows that illuminate */}
              <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                {[1, 2, 3].map((w) => (
                  <div
                    key={w}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      border: "1px dashed rgba(255, 255, 255, 0.6)",
                      backgroundColor: activeFloor === 0 ? "rgba(246, 236, 189, 0.9)" : "rgba(255, 255, 255, 0.1)",
                      boxShadow: activeFloor === 0 ? "0 0 8px rgba(246, 236, 189, 0.7)" : "none",
                      transition: "all 0.4s ease",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Level 2: Springdays School (Middle Floor, index 1) */}
            <motion.div
              className={`building-floor building-floor-2 ${activeFloor === 1 ? "active" : ""}`}
              onClick={() => setActiveFloor(1)}
              onMouseEnter={() => setActiveFloor(1)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-charcoal)", margin: 0 }}>
                Springdays School
              </h4>
              <span style={{ fontSize: "0.75rem", color: "var(--text-slate)" }}>
                Level 2 (Middle Floor)
              </span>

              {/* Windows that illuminate */}
              <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                {[1, 2, 3, 4].map((w) => (
                  <div
                    key={w}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      backgroundColor: activeFloor === 1 ? "rgba(246, 236, 189, 0.95)" : "rgba(255, 255, 255, 0.15)",
                      boxShadow: activeFloor === 1 ? "0 0 8px rgba(246, 236, 189, 0.8)" : "none",
                      transition: "all 0.4s ease",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Drifting Cloud In Front of the building (Z-Index 12) */}
            <motion.div
              style={{
                position: "absolute",
                bottom: "40%",
                right: "-40px",
                width: "110px",
                height: "44px",
                borderRadius: "22px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                filter: "blur(4px)",
                zIndex: 12,
                pointerEvents: "none",
              }}
              animate={{ x: [350, -100] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Level 1: Ida Scudder School (Foundation, index 2) */}
            <motion.div
              className={`building-floor building-floor-1 ${activeFloor === 2 ? "active" : ""}`}
              onClick={() => setActiveFloor(2)}
              onMouseEnter={() => setActiveFloor(2)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-charcoal)", margin: 0 }}>
                Ida Scudder School
              </h4>
              <span style={{ fontSize: "0.75rem", color: "var(--text-slate)" }}>
                Level 1 (Foundation)
              </span>

              {/* Windows that illuminate */}
              <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                {[1, 2, 3, 4].map((w) => (
                  <div
                    key={w}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      backgroundColor: activeFloor === 2 ? "rgba(246, 236, 189, 0.95)" : "rgba(255, 255, 255, 0.15)",
                      boxShadow: activeFloor === 2 ? "0 0 8px rgba(246, 236, 189, 0.8)" : "none",
                      transition: "all 0.4s ease",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Solid Building Base */}
            <motion.div
              className="building-base"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Right Column: Display Card for Active Floor details */}
          <div style={{ minHeight: "340px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFloor}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="glass-card"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    padding: "36px",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {/* Accent strip colored dynamically */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: "5px",
                      backgroundColor: "var(--accent-blue)",
                    }}
                  />

                  {/* Level Tag */}
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: activeFloor === 0 ? "#FFA726" : "var(--accent-blue)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "12px",
                    }}
                  >
                    {getFloorLabel(activeFloor)}
                  </span>

                  {/* School Name */}
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "var(--text-charcoal)",
                      marginBottom: "8px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {educationItems[activeFloor].institution}
                  </h3>

                  {/* Degree/Class */}
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "var(--text-slate)",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <BookOpen size={16} style={{ color: "var(--accent-blue)" }} />
                    {educationItems[activeFloor].degree}
                  </h4>

                  {/* Calendar/Status Badge */}
                  {educationItems[activeFloor].status && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        backgroundColor: "rgba(208, 225, 253, 0.4)",
                        color: "var(--text-charcoal)",
                        padding: "5px 12px",
                        borderRadius: "100px",
                        marginBottom: "20px",
                      }}
                    >
                      <Calendar size={14} />
                      {educationItems[activeFloor].status}
                    </div>
                  )}

                  {/* Description text */}
                  <p
                    style={{
                      fontSize: "0.98rem",
                      lineHeight: "1.7",
                      color: "var(--text-slate)",
                      margin: 0,
                    }}
                  >
                    {educationItems[activeFloor].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
