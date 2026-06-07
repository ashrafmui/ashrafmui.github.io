"use client"

import { useState, useEffect } from "react";
import { COLORS, FONT } from "./shared/theme";
import { NAV_LINKS } from "./shared/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,15,13,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "0 clamp(1rem, 4vw, 3rem)",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "60px",
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: FONT.mono, fontWeight: 700, fontSize: "1.1rem",
          color: COLORS.green, textDecoration: "none", letterSpacing: "-0.02em",
        }}>
          <span style={{ opacity: 0.4 }}>{">"}</span> m.ashraf
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: FONT.mono, fontSize: "0.75rem", fontWeight: 400,
                color: COLORS.textSecondary, textDecoration: "none",
                letterSpacing: "0.08em", transition: "color 0.2s",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.color = COLORS.green;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.target as HTMLAnchorElement).style.color = COLORS.textSecondary;
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" style={{
            fontFamily: FONT.mono, fontSize: "0.72rem", fontWeight: 500,
            color: COLORS.bg, background: COLORS.green, textDecoration: "none",
            padding: "0.4rem 1rem", letterSpacing: "0.08em", transition: "all 0.2s",
          }}>
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none", background: "none", border: "none",
            color: COLORS.green, cursor: "pointer", padding: "0.5rem",
            fontFamily: FONT.mono, fontSize: "1.2rem",
          }}
        >
          {mobileOpen ? "[×]" : "[≡]"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="nav-mobile-menu" style={{
          display: "none", flexDirection: "column", gap: "1rem",
          padding: "1rem 0 1.5rem", borderTop: `1px solid ${COLORS.border}`,
        }}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: FONT.mono, fontSize: "0.8rem",
                color: COLORS.textSecondary, textDecoration: "none", letterSpacing: "0.08em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}