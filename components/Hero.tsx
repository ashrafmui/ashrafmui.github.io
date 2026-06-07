import { useState, useEffect } from "react";
import { COLORS, FONT } from "./shared/theme";
import { BOOT_LINES } from "./shared/data";
import { CircuitGrid, Cursor, SignalTrace, SkillDomain } from "./shared/ui";

// ═══════════════════════════════════════════════════════════════
// ASCII ART — 3 responsive sizes
// ═══════════════════════════════════════════════════════════════

const ASCII_NAME_LARGE = `
███╗   ███╗██╗   ██╗██╗  ██╗ █████╗ ██╗███╗   ███╗██╗███╗   ██╗██╗   ██╗██╗     
████╗ ████║██║   ██║██║  ██║██╔══██╗██║████╗ ████║██║████╗  ██║██║   ██║██║     
██╔████╔██║██║   ██║███████║███████║██║██╔████╔██║██║██╔██╗ ██║██║   ██║██║     
██║╚██╔╝██║██║   ██║██╔══██║██╔══██║██║██║╚██╔╝██║██║██║╚██╗██║██║   ██║██║     
██║ ╚═╝ ██║╚██████╔╝██║  ██║██║  ██║██║██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝███████╗
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝
 █████╗ ███████╗██╗  ██╗██████╗  █████╗ ███████╗
██╔══██╗██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝
███████║███████╗███████║██████╔╝███████║█████╗  
██╔══██║╚════██║██╔══██║██╔══██╗██╔══██║██╔══╝  
██║  ██║███████║██║  ██║██║  ██║██║  ██║██║     
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     
`.trim();

const ASCII_NAME_MEDIUM = `
█▄ ▄█ █  █ █ █ ▄▀▄ █ █▄ ▄█ █ █▄ █ █  █ █  
█ █ █ █  █ █▀█ █▀█ █ █ █ █ █ █ ██ █  █ █  
█   █ ▀▄▄▀ █ █ █ █ █ █   █ █ █  █ ▀▄▄▀ █▄▄
▄▀▄ ▄▀▀ █ █ █▀▄ ▄▀▄ █▀▀
█▀█ ▀▄▄ █▀█ █▀▄ █▀█ █▀▀
█ █ ▄▄▀ █ █ █ █ █ █ █  
`.trim();

const ASCII_NAME_SMALL = `
╔╦╗╦ ╦╦ ╦╔═╗╦╔╦╗╦╔╗╔╦ ╦╦  
║║║║ ║╠═╣╠═╣║║║║║║║║║ ║║  
╩ ╩╚═╝╩ ╩╩ ╩╩╩ ╩╩╝╚╝╚═╝╩═╝
╔═╗╔═╗╦ ╦╔═╗╔═╗╔═╗
╠═╣╚═╗╠═╣╠╦╝╠═╣╠╣ 
╩ ╩╚═╝╩ ╩╩╚═╩ ╩╩  
`.trim();

// ═══════════════════════════════════════════════════════════════
// BOOT SEQUENCE SUB-COMPONENT
// ═══════════════════════════════════════════════════════════════

function BootSequence() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    const timeouts = BOOT_LINES.map((line) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, line.text]), line.delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      fontFamily: FONT.mono, fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)",
      lineHeight: 1.7, color: COLORS.textDim, textAlign: "left",
      maxWidth: "600px", margin: "0 auto",
    }}>
      {visibleLines.map((line: string, i: number) => (
        <div key={i} style={{
          opacity: 0, animation: "fadeSlideIn 0.3s ease forwards",
          animationDelay: `${i * 0.05}s`,
          color: i === visibleLines.length - 1 ? COLORS.green : COLORS.textDim,
          fontWeight: i === visibleLines.length - 1 ? 600 : 400,
        }}>
          {line}
          {i === visibleLines.length - 1 && <Cursor />}
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// HERO SECTION
// ═══════════════════════════════════════════════════════════════

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const asciiArt = isMobile ? ASCII_NAME_SMALL : isTablet ? ASCII_NAME_MEDIUM : ASCII_NAME_LARGE;
  const asciiFontSize = isMobile
    ? "clamp(0.32rem, 2.2vw, 0.5rem)"
    : isTablet
    ? "clamp(0.5rem, 1.5vw, 0.7rem)"
    : "clamp(0.45rem, 0.75vw, 0.72rem)";

  return (
    <section id="hero" style={{
      minHeight: "100vh", position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <CircuitGrid />

      <div style={{
        position: "relative", zIndex: 10, textAlign: "center",
        padding: isMobile ? "5rem 1rem 3rem" : "6rem 2rem 3rem",
        maxWidth: "1100px", width: "100%",
      }}>
        {/* ASCII Name */}
        <div className="ascii-name" style={{
          fontFamily: FONT.mono, color: COLORS.green, whiteSpace: "pre",
          lineHeight: 1.1, fontSize: asciiFontSize, marginBottom: isMobile ? "1.5rem" : "2rem",
          overflowX: "auto", padding: "0 0.5rem", textAlign: "center", userSelect: "none",
        }}>
          {asciiArt}
        </div>

        {/* Subtitle */}
        <div style={{
          fontFamily: FONT.mono, fontWeight: 300, letterSpacing: "0.25em",
          textTransform: "uppercase", color: COLORS.textSecondary,
          fontSize: isMobile ? "clamp(0.55rem, 2.5vw, 0.7rem)" : "clamp(0.7rem, 1.2vw, 0.85rem)",
          marginBottom: "1.5rem",
          animation: "subtitleSlide 0.8s ease forwards 0.6s", opacity: 0,
        }}>
          Full-Stack Engineer · Hardware Knowledge
        </div>

        {/* Divider */}
        <div style={{
          height: "1px", width: isMobile ? "60%" : "40%", margin: "0 auto 1.5rem",
          background: `linear-gradient(90deg, transparent, ${COLORS.greenDim}, ${COLORS.green}, ${COLORS.greenDim}, transparent)`,
          animation: "subtitleSlide 0.6s ease forwards 0.8s", opacity: 0,
        }} />

        {/* Tagline */}
        <p style={{
          fontFamily: FONT.sans, color: COLORS.textPrimary, fontWeight: 300,
          fontSize: isMobile ? "clamp(0.8rem, 3vw, 0.95rem)" : "clamp(0.9rem, 1.3vw, 1.05rem)",
          maxWidth: "650px", margin: "0 auto 2rem", padding: "0 1rem", lineHeight: 1.6,
          animation: "subtitleSlide 0.8s ease forwards 1s", opacity: 0,
        }}>
          I build AI-integrated web applications, backend pipelines, and the systems beneath
          them — from streaming LLM products in Next.js to ESP32 firmware and RF test tooling.
        </p>

        {/* Dual domain tags */}
        <div style={{
          display: "flex", flexDirection: isMobile ? "column" : "row",
          justifyContent: "center", gap: isMobile ? "0.8rem" : "2.5rem",
          marginBottom: "2rem", padding: "0 1rem",
          animation: "subtitleSlide 0.8s ease forwards 1.2s", opacity: 0,
        }}>
          <SkillDomain label="Software / AI" items={["Next.js", "TypeScript", "Python", "Anthropic API", "PostgreSQL", "React"]} accentColor={COLORS.blue} />
          <SkillDomain label="Systems / Hardware" items={["Embedded C/C++", "ESP32", "RF Systems", "Linux", "KiCad", "FPGA"]} accentColor={COLORS.green} />
        </div>

        {/* Signal trace */}
        <div style={{
          display: "flex", justifyContent: "center", marginBottom: "1.5rem", opacity: 0.5,
          animation: "subtitleSlide 0.8s ease forwards 1.4s",
        }}>
          {mounted && <SignalTrace width={isMobile ? 280 : 500} height={40} />}
        </div>

        {/* Boot sequence */}
        <div style={{
          padding: isMobile ? "1rem" : "1rem 2rem",
          background: `${COLORS.green}05`, border: `1px solid ${COLORS.green}14`,
          borderRadius: "2px", maxWidth: "620px", margin: "0 auto 2rem",
          animation: "subtitleSlide 0.8s ease forwards 1.8s", opacity: 0,
        }}>
          <BootSequence />
        </div>

        {/* CTAs */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem",
          animation: "subtitleSlide 0.8s ease forwards 2.2s", opacity: 0,
        }}>
          <a href="#projects" style={{
            fontFamily: FONT.mono, fontSize: "clamp(0.7rem, 1.1vw, 0.8rem)", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.7rem 1.6rem",
            cursor: "pointer", textDecoration: "none", display: "inline-block",
            background: COLORS.green, color: COLORS.bg, border: `1px solid ${COLORS.green}`,
            transition: "all 0.25s ease",
          }}>View Projects</a>
          <a href="#contact" style={{
            fontFamily: FONT.mono, fontSize: "clamp(0.7rem, 1.1vw, 0.8rem)", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.7rem 1.6rem",
            cursor: "pointer", textDecoration: "none", display: "inline-block",
            background: "transparent", color: COLORS.green, border: `1px solid ${COLORS.greenDim}`,
            transition: "all 0.25s ease",
          }}>Get In Touch</a>
        </div>

        {/* Education stamp */}
        <div style={{
          fontFamily: FONT.mono, fontSize: "clamp(0.55rem, 0.9vw, 0.65rem)",
          color: COLORS.textMuted, letterSpacing: "0.15em",
          animation: "subtitleSlide 0.8s ease forwards 2.6s", opacity: 0,
        }}>
          B.S. Computer Engineering — Northeastern University '25 &nbsp;|&nbsp; New York, NY
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: "3rem",
          animation: "subtitleSlide 0.8s ease forwards 3s, pulse 2s ease-in-out infinite 3.5s",
          opacity: 0,
        }}>
          <div style={{
            width: "1px", height: "40px", margin: "0 auto",
            background: `linear-gradient(180deg, ${COLORS.green}66, transparent)`,
          }} />
        </div>
      </div>
    </section>
  );
}