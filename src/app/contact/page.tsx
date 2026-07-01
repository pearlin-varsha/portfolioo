"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CloudyBackground from "@/components/CloudyBackground";

// Form Validation Schema using Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .max(100, "Company name cannot exceed 100 characters")
    .optional(),
  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject cannot exceed 100 characters"),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize React Hook Form with Zod validation resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setIsSubmitting(false);
      setIsFlying(true);
      reset(); // Reset form values on success

      // Wait for the paper-plane flight animation to complete before showing the success card
      setTimeout(() => {
        setIsFlying(false);
        setSubmitSuccess(true);
      }, 1200);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again later.";
      setSubmitError(errorMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <CloudyBackground />

      <div style={{ position: "relative", zIndex: 2, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            
            {/* Back to Home Button */}
            <div style={{ marginBottom: "32px", display: "flex", justifyContent: "flex-start" }}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--text-slate)",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  textDecoration: "none",
                }}
                className="back-home-link"
              >
                <ArrowLeft size={16} /> Back to home
              </Link>
            </div>

            <div className="contact-page-grid">
              
              {/* Left Column: Headline and Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}
              >
                <span className="hero-badge" style={{ backgroundColor: "var(--accent-blue-light)" }}>
                  Contact Page
                </span>
                
                <h1 style={{ fontSize: "3.2rem", fontWeight: 700, lineHeight: 1.15, marginBottom: "18px", letterSpacing: "-0.03em" }}>
                  Get In <span className="highlight-text">Touch</span>
                </h1>
                
                <p style={{ fontSize: "1.1rem", lineHeight: "1.65", color: "var(--text-slate)", marginBottom: "40px", maxWidth: "420px" }}>
                  Interested in collaborating, discussing opportunities, or connecting professionally? Feel free to reach out—I&apos;d be happy to hear from you.
                </p>

                {/* Decorative Visual Illustration Shape */}
                <div style={{ position: "relative", width: "100%", maxWidth: "340px", height: "180px", marginTop: "10px" }} className="desktop-only">
                  <div
                    className="animate-glow"
                    style={{
                      position: "absolute",
                      width: "140px",
                      height: "140px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(208,225,253,0.7) 0%, rgba(255,255,255,0) 70%)",
                      filter: "blur(20px)",
                      top: 10,
                      left: 10,
                    }}
                  />
                  <div
                    className="animate-float"
                    style={{
                      position: "absolute",
                      width: "280px",
                      height: "120px",
                      background: "rgba(255, 255, 255, 0.35)",
                      border: "1px solid rgba(255, 255, 255, 0.6)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      borderRadius: "60px",
                      boxShadow: "0 8px 32px var(--glass-shadow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      top: 30,
                      left: 20,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-slate)" }}>
                      <div style={{ padding: "8px", borderRadius: "50%", backgroundColor: "var(--accent-blue-light)", color: "var(--text-charcoal)" }}>
                        <Send size={18} />
                      </div>
                      <span style={{ fontSize: "0.92rem", fontWeight: 500, fontFamily: "var(--font-headings)" }}>
                        Let&apos;s connect
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Form (Glassmorphism Card) */}
              <div style={{ position: "relative" }}>
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.div
                      key="form-card"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-card"
                      style={{ padding: "36px", border: "1px solid rgba(255,255,255,0.7)" }}
                    >
                      <form onSubmit={handleSubmit(onSubmit)}>
                        
                        {/* Server Error Message */}
                        {submitError && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              backgroundColor: "rgba(211, 47, 47, 0.08)",
                              border: "1px solid rgba(211, 47, 47, 0.2)",
                              borderRadius: "12px",
                              padding: "14px 16px",
                              marginBottom: "24px",
                              color: "#D32F2F",
                              fontSize: "0.9rem",
                            }}
                          >
                            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                            <span>{submitError}</span>
                          </div>
                        )}

                        {/* Name Field */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">
                            Full Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="form-input"
                            style={{ borderColor: errors.name ? "#D32F2F" : undefined }}
                            disabled={isSubmitting || isFlying}
                            {...register("name")}
                          />
                          {errors.name && (
                            <span className="error-message">
                              <AlertCircle size={14} /> {errors.name.message}
                            </span>
                          )}
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="form-input"
                            style={{ borderColor: errors.email ? "#D32F2F" : undefined }}
                            disabled={isSubmitting || isFlying}
                            {...register("email")}
                          />
                          {errors.email && (
                            <span className="error-message">
                              <AlertCircle size={14} /> {errors.email.message}
                            </span>
                          )}
                        </div>

                        {/* Company Field (Optional) */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="company">
                            Company / Organization <span style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            placeholder="Company name (optional)"
                            className="form-input"
                            disabled={isSubmitting || isFlying}
                            {...register("company")}
                          />
                        </div>

                        {/* Subject Field */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="subject">
                            Subject
                          </label>
                          <input
                            id="subject"
                            type="text"
                            placeholder="What would you like to discuss?"
                            className="form-input"
                            style={{ borderColor: errors.subject ? "#D32F2F" : undefined }}
                            disabled={isSubmitting || isFlying}
                            {...register("subject")}
                          />
                          {errors.subject && (
                            <span className="error-message">
                              <AlertCircle size={14} /> {errors.subject.message}
                            </span>
                          )}
                        </div>

                        {/* Message Field */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            id="message"
                            placeholder="Tell me about your project, opportunity, or message."
                            className="form-textarea"
                            style={{ borderColor: errors.message ? "#D32F2F" : undefined }}
                            disabled={isSubmitting || isFlying}
                            {...register("message")}
                          />
                          {errors.message && (
                            <span className="error-message">
                              <AlertCircle size={14} /> {errors.message.message}
                            </span>
                          )}
                        </div>

                        {/* Submit Button with Flight Animation */}
                        <button
                          type="submit"
                          className="btn-primary"
                          style={{ width: "100%", marginTop: "12px", gap: "8px", overflow: "hidden" }}
                          disabled={isSubmitting || isFlying}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="form-spinner" /> Sending...
                            </>
                          ) : isFlying ? (
                            <>
                              Message Sent!{" "}
                              <motion.span
                                animate={{
                                  x: [0, 80, 180, -180, 0],
                                  y: [0, -80, -180, 0, 0],
                                  scale: [1, 1.2, 0, 0, 1],
                                  opacity: [1, 0.8, 0, 0, 1],
                                }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                style={{ display: "inline-flex" }}
                              >
                                <Send size={16} />
                              </motion.span>
                            </>
                          ) : (
                            <>
                              Send Message <Send size={16} />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    /* Success Card State (Framer Motion Animation) */
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-card"
                      style={{
                        padding: "48px 36px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255,255,255,0.7)",
                        minHeight: "400px",
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: [0, 1.2, 1], rotate: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 120 }}
                        style={{ color: "var(--accent-teal)", marginBottom: "24px" }}
                      >
                        <CheckCircle2 size={72} strokeWidth={1.5} />
                      </motion.div>
                      
                      <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "12px", color: "var(--text-charcoal)" }}>
                        Message Sent!
                      </h3>
                      
                      <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "var(--text-slate)", marginBottom: "32px", maxWidth: "340px" }}>
                        Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                      </p>

                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="btn-secondary"
                        style={{ width: "100%", maxWidth: "200px" }}
                      >
                        Send another
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx global>{`
        .back-home-link:hover {
          color: var(--text-charcoal) !important;
          transform: translateX(-4px);
        }
        
        .form-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: form-spin 0.8s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes form-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
