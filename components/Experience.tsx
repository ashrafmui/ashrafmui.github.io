"use client"

import { useState } from "react";
import { COLORS, FONT } from "./shared/theme";
import type { Experience, EducationItem } from "./shared/theme";
import { EXPERIENCES, LEADERSHIP, EDUCATION } from "./shared/data";
import { SectionHeader } from "./shared/ui";

function ExperienceCard({ exp, accentColor }: { exp: Experience; accentColor: string }) {
  const [hovered, setHovered] = useState(false);
  const isLeadership = exp.kind === "leadership";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", padding: "2rem",
        background: hovered ? COLORS.bgCard : "transparent",
        border: `1px solid ${hovered ? COLORS.border : "transparent"}`,
        borderRadius: "3px", transition: "all 0.3s ease",
        borderLeft: `2px solid ${accentColor}`,
      }}
    >
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "space-between",
        alignItems: "baseline", gap: "0.5rem", marginBottom: "0.25rem",
      }}>
        <h3 style={{
          fontFamily: FONT.sans, fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
          fontWeight: 600, color: COLORS.textPrimary, margin: 0,
          display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap",
        }}>
          {exp.company}
          {isLeadership && (
            <span style={{
              fontFamily: FONT.mono, fontSize: "0.55rem", fontWeight: 600,
              color: accentColor, border: `1px solid ${accentColor}55`,
              borderRadius: "2px", padding: "0.12rem 0.45rem",
              letterSpacing: "0.15em", textTransform: "uppercase",
            }}>
              Leadership
            </span>
          )}
        </h3>
        <span style={{
          fontFamily: FONT.mono, fontSize: "0.7rem",
          color: COLORS.textDim, letterSpacing: "0.05em",
        }}>
          {exp.period}
        </span>
      </div>

      <div style={{
        fontFamily: FONT.mono, fontSize: "0.78rem", fontWeight: 400,
        color: accentColor, marginBottom: "0.25rem",
      }}>
        {exp.role}
      </div>

      <div style={{
        fontFamily: FONT.mono, fontSize: "0.68rem",
        color: COLORS.textMuted, marginBottom: "1.25rem", letterSpacing: "0.05em",
      }}>
        {exp.location}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
        {exp.bullets.map((b: string, i: number) => (
          <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
            <span style={{
              fontFamily: FONT.mono, color: accentColor,
              fontSize: "0.7rem", lineHeight: "1.7", flexShrink: 0, userSelect: "none",
            }}>▸</span>
            <span style={{
              fontFamily: FONT.sans, fontSize: "clamp(0.82rem, 1.1vw, 0.9rem)",
              color: COLORS.textSecondary, lineHeight: 1.7, fontWeight: 300,
            }}>{b}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {exp.tech.map((t: string, i: number) => (
          <span key={i} style={{
            fontFamily: FONT.mono, fontSize: "0.62rem",
            color: COLORS.textDim, padding: "0.15rem 0.5rem",
            border: `1px solid ${COLORS.border}`, borderRadius: "2px",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function EducationRow({ edu }: { edu: EducationItem }) {
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", justifyContent: "space-between",
      alignItems: "baseline", gap: "0.5rem",
      padding: "1rem 1.25rem", background: COLORS.bgLight,
      border: `1px solid ${COLORS.border}`, borderRadius: "3px",
    }}>
      <div>
        <div style={{
          fontFamily: FONT.sans, fontSize: "clamp(0.92rem, 1.5vw, 1.02rem)",
          fontWeight: 600, color: COLORS.textPrimary,
        }}>
          {edu.school}
        </div>
        <div style={{
          fontFamily: FONT.mono, fontSize: "0.72rem", color: COLORS.amber, marginTop: "0.2rem",
        }}>
          {edu.credential}
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        {edu.period && (
          <div style={{ fontFamily: FONT.mono, fontSize: "0.68rem", color: COLORS.textDim }}>
            {edu.period}
          </div>
        )}
        <div style={{ fontFamily: FONT.mono, fontSize: "0.66rem", color: COLORS.textMuted }}>
          {edu.location}
        </div>
      </div>
    </div>
  );
}

const WORK_ACCENTS = [COLORS.green, COLORS.blue, COLORS.green];

export default function ExperienceSection() {
  return (
    <section id="experience" style={{
      padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
      maxWidth: "900px", margin: "0 auto",
    }}>
      <SectionHeader tag="03" title="Experience" />

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {EXPERIENCES.map((exp: Experience, i: number) => (
          <ExperienceCard key={exp.company} exp={exp} accentColor={WORK_ACCENTS[i % WORK_ACCENTS.length]} />
        ))}
        {LEADERSHIP.map((exp: Experience) => (
          <ExperienceCard key={exp.company} exp={exp} accentColor={COLORS.purple} />
        ))}
      </div>

      {/* Education */}
      <div style={{
        fontFamily: FONT.mono, fontSize: "clamp(0.6rem, 1vw, 0.72rem)",
        color: COLORS.green, letterSpacing: "0.2em", textTransform: "uppercase",
        margin: "3rem 0 1rem", fontWeight: 500,
      }}>
        {"// "}Education
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {EDUCATION.map((edu) => (
          <EducationRow key={edu.school} edu={edu} />
        ))}
      </div>
    </section>
  );
}
