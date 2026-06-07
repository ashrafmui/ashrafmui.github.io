"use client"

import { COLORS, FONT } from "./shared/theme";
import { ABOUT_TEXT } from "./shared/data";
import { SectionHeader } from "./shared/ui";

export default function AboutSection() {
  return (
    <section id="about" style={{
      padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
      maxWidth: "900px", margin: "0 auto", position: "relative",
    }}>
      <SectionHeader tag="01" title="About" />

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {ABOUT_TEXT.map((para: string, i: number) => (
          <p key={i} style={{
            fontFamily: FONT.sans, fontSize: "clamp(0.9rem, 1.3vw, 1.02rem)",
            color: COLORS.textPrimary, lineHeight: 1.75, margin: 0, fontWeight: 300,
          }}>
            {para}
          </p>
        ))}
      </div>

      {/* Terminal-style interests block */}
      <div style={{
        marginTop: "2.5rem", padding: "1.25rem 1.5rem",
        background: COLORS.bgCard, border: `1px solid ${COLORS.border}`,
        borderRadius: "3px",
      }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: "0.7rem",
          color: COLORS.textMuted, marginBottom: "0.75rem",
        }}>
          ~ $ cat interests.txt
        </div>
        <div style={{
          fontFamily: FONT.mono, fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
          color: COLORS.textDim, lineHeight: 1.8,
        }}>
          <span style={{ color: COLORS.purple }}>ai:</span> LLM products, prompt orchestration, knowledge graphs, spaced-repetition systems
          <br /><span style={{ color: COLORS.blue }}>software:</span> full-stack web, REST APIs, data visualization, e-commerce platforms
          <br /><span style={{ color: COLORS.green }}>systems:</span> embedded firmware, IoT pipelines, Linux automation, RF test tooling
        </div>
      </div>
    </section>
  );
}