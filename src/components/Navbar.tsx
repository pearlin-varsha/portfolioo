"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Derive the active section segment synchronously during render.
  // This is the recommended React way to adjust state based on route hooks,
  // avoiding synchronous setState cascading renders in useEffect blocks.
  const computedActiveSection = pathname === "/contact" ? "contact" : activeSection;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor scroll intersection to keep navbar tabs in sync on the home page
  useEffect(() => {
    if (pathname === "/contact") {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // triggers when section is in center view
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    } else {
      // If the target element is on another page, let the default anchor link navigation happen naturally
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "80px",
          display: "flex",
          alignItems: "center",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: "0 24px",
          backgroundColor: scrolled ? "rgba(253, 251, 247, 0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.5)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 20px rgba(142, 151, 168, 0.05)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Logo Name */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "var(--text-charcoal)",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Pearlin Varsha
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
            className="desktop-only"
          >
            {navItems.map((item) => {
              const isActive = computedActiveSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    position: "relative",
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--text-charcoal)" : "var(--text-slate)",
                    transition: "color 0.3s ease",
                    padding: "6px 0",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--text-charcoal)",
                        borderRadius: "2px",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              color: "var(--text-charcoal)",
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              background: "rgba(253, 251, 247, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
              zIndex: 99,
              padding: "24px 0",
              boxShadow: "0 10px 30px rgba(142, 151, 168, 0.1)",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: computedActiveSection === item.id ? 600 : 400,
                    color: computedActiveSection === item.id ? "var(--text-charcoal)" : "var(--text-slate)",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
