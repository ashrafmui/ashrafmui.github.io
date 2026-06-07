"use client"

import { COLORS, FONT } from "./shared/theme";
import type { SkillGroup } from "./shared/theme";
import { SKILLS } from "./shared/data";
import { SectionHeader } from "./shared/ui";

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div style={{
      padding: "1.25rem 1.5rem",
      background: COLORS.bgLight,
      border: `1px solid ${COLORS.border}`,
      borderLeft: `2px solid ${group.accent}`,
      borderRadius: "3px",
    }}>
      <div style={{
        fontFamily: FONT.mono, fontSize: "clamp(0.62rem, 1vw, 0.72rem)",
        textTransform: "uppercase", letterSpacing: "0.18em",
        color: group.accent, marginBottom: "0.85rem", fontWeight: 600,
      }}>
        {"// "}{group.label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {group.items.map((item) => (
          <span key={item} style={{
            padding: "0.22rem 0.6rem",
            border: `1px solid ${group.accent}26`, borderRadius: "2px",
            fontFamily: FONT.mono, fontSize: "clamp(0.62rem, 1vw, 0.74rem)",
            color: COLORS.textSecondary, background: `${group.accent}0a`,
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" style={{
      padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
      maxWidth: "1100px", margin: "0 auto",
    }}>
      <SectionHeader tag="02" title="Skills" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
        gap: "1rem",
      }}>
        {SKILLS.map((group) => (
          <SkillCard key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}
