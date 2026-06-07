"use client"

import { useState, useEffect } from "react";
import { COLORS, FONT } from "./shared/theme";
import { SectionHeader, SignalTrace } from "./shared/ui";
import { CONTACT } from "./shared/data";

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="contact" style={{
      padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
      maxWidth: "700px", margin: "0 auto", textAlign: "center",
    }}>
      <SectionHeader tag="05" title="Get In Touch" align="center" />

      <p style={{
        fontFamily: FONT.sans, fontSize: "clamp(0.9rem, 1.3vw, 1.02rem)",
        color: COLORS.textSecondary, lineHeight: 1.75, marginBottom: "2.5rem",
        fontWeight: 300,
      }}>
        I&apos;m actively seeking new-grad and entry-level software / full-stack
        engineering roles for 2026 — based in NYC and open to relocating. If you
        have an opening, a question, or just want to talk shop, my inbox is open.
      </p>

      {/* Terminal contact block */}
      <div style={{
        textAlign: "left", padding: "1.5rem 2rem",
        background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
        borderRadius: "3px", maxWidth: "520px", margin: "0 auto 2rem",
      }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: "0.68rem",
          color: COLORS.textMuted, marginBottom: "1rem",
        }}>
          ~ $ cat contact.json
        </div>
        <div style={{ fontFamily: FONT.mono, fontSize: "clamp(0.72rem, 1vw, 0.82rem)", lineHeight: 2 }}>
          <span style={{ color: COLORS.textDim }}>{"{"}</span><br />
          <span style={{ color: COLORS.textDim }}>&nbsp;&nbsp;&quot;email&quot;</span>
          <span style={{ color: COLORS.textMuted }}>{": "}</span>
          <a href={`mailto:${CONTACT.email}`} style={{ color: COLORS.green, textDecoration: "none" }}>
            &quot;{CONTACT.email}&quot;
          </a><span style={{ color: COLORS.textMuted }}>,</span><br />
          <span style={{ color: COLORS.textDim }}>&nbsp;&nbsp;&quot;phone&quot;</span>
          <span style={{ color: COLORS.textMuted }}>{": "}</span>
          <span style={{ color: COLORS.blue }}>&quot;{CONTACT.phone}&quot;</span><span style={{ color: COLORS.textMuted }}>,</span><br />
          <span style={{ color: COLORS.textDim }}>&nbsp;&nbsp;&quot;github&quot;</span>
          <span style={{ color: COLORS.textMuted }}>{": "}</span>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer"
            style={{ color: COLORS.purple, textDecoration: "none" }}>
            &quot;{CONTACT.githubLabel}&quot;
          </a><span style={{ color: COLORS.textMuted }}>,</span><br />
          <span style={{ color: COLORS.textDim }}>&nbsp;&nbsp;&quot;linkedin&quot;</span>
          <span style={{ color: COLORS.textMuted }}>{": "}</span>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ color: COLORS.blue, textDecoration: "none" }}>
            &quot;{CONTACT.linkedinLabel}&quot;
          </a><span style={{ color: COLORS.textMuted }}>,</span><br />
          <span style={{ color: COLORS.textDim }}>&nbsp;&nbsp;&quot;location&quot;</span>
          <span style={{ color: COLORS.textMuted }}>{": "}</span>
          <span style={{ color: COLORS.amber }}>&quot;{CONTACT.location}&quot;</span><br />
          <span style={{ color: COLORS.textDim }}>{"}"}</span>
        </div>
      </div>

      <a href={`mailto:${CONTACT.email}`} style={{
        fontFamily: FONT.mono, fontSize: "clamp(0.72rem, 1.1vw, 0.82rem)", fontWeight: 500,
        letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.8rem 2rem",
        cursor: "pointer", textDecoration: "none", display: "inline-block",
        background: COLORS.green, color: COLORS.bg, border: `1px solid ${COLORS.green}`,
        transition: "all 0.25s ease",
      }}>
        Say Hello
      </a>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem", opacity: 0.4 }}>
        {mounted && <SignalTrace width={300} height={30} color={COLORS.green} speed={0.8} />}
      </div>
    </section>
  );
}
