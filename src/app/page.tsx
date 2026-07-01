"use client";

import React from "react";
import CloudyBackground from "@/components/CloudyBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Animated Fixed Background */}
      <CloudyBackground />

      {/* Main scrolling wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <main style={{ flex: 1 }}>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
