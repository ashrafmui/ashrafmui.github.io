"use client"

import { useState } from "react";
import { COLORS, FONT } from "./shared/theme";
import type { Project, Domain } from "./shared/theme";
import { PROJECTS } from "./shared/data";
import { SectionHeader, DomainBadge } from "./shared/ui";

const DOMAIN_COLOR: Record<Domain, string> = {
  ai: COLORS.purple,
  software: COLORS.blue,
  hybrid: COLORS.amber,
  hardware: COLORS.green,
};

const DOMAIN_GLYPH: Record<Domain, string> = {
  ai: "✦",
  software: "◇",
  hybrid: "⬢",
  hardware: "⬡",
};

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const domainColor = DOMAIN_COLOR[project.domain];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem",
        background: hovered ? COLORS.bgCard : COLORS.bgLight,
        border: `1px solid ${hovered ? `${domainColor}44` : COLORS.border}`,
        borderRadius: "3px", transition: "all 0.3s ease",
        display: "flex", flexDirection: "column", height: "100%",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
        <div style={{ fontFamily: FONT.mono, fontSize: "1.2rem", color: domainColor }}>
          {DOMAIN_GLYPH[project.domain]}
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <DomainBadge domain={project.domain} />
          <span style={{
            fontFamily: FONT.mono, fontSize: "0.58rem",
            color: project.status === "Live" ? COLORS.green : COLORS.textMuted,
            letterSpacing: "0.1em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: "0.3rem",
          }}>
            {project.status === "Live" && (
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: COLORS.green, display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }} />
            )}
            {project.status}
          </span>
        </div>
      </div>

      <h3 style={{
        fontFamily: FONT.sans, fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
        fontWeight: 600, color: COLORS.textPrimary, margin: "0 0 0.2rem 0",
      }}>
        {project.title}
      </h3>

      <div style={{
        fontFamily: FONT.mono, fontSize: "0.72rem",
        color: COLORS.textDim, marginBottom: "1rem",
      }}>
        {project.subtitle}
      </div>

      {/* Bullets */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem", flex: 1 }}>
        {project.bullets.map((b: string, i: number) => (
          <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
            <span style={{
              fontFamily: FONT.mono, color: domainColor,
              fontSize: "0.6rem", lineHeight: "1.7", flexShrink: 0,
            }}>▸</span>
            <span style={{
              fontFamily: FONT.sans, fontSize: "clamp(0.78rem, 1vw, 0.85rem)",
              color: COLORS.textSecondary, lineHeight: 1.65, fontWeight: 300,
            }}>{b}</span>
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: project.link ? "1.1rem" : 0 }}>
        {project.tech.map((t: string, i: number) => (
          <span key={i} style={{
            fontFamily: FONT.mono, fontSize: "0.6rem",
            color: domainColor, padding: "0.12rem 0.45rem",
            border: `1px solid ${domainColor}22`, borderRadius: "2px",
            background: `${domainColor}08`,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Live link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: FONT.mono, fontSize: "0.7rem", fontWeight: 500,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: hovered ? COLORS.bg : domainColor,
            background: hovered ? domainColor : "transparent",
            border: `1px solid ${domainColor}`,
            padding: "0.45rem 1rem", borderRadius: "2px",
            textDecoration: "none", textAlign: "center",
            transition: "all 0.25s ease",
          }}
        >
          Visit Live ↗
        </a>
      )}
    </div>
  );
}

type FilterValue = "all" | Domain;

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const present = Array.from(new Set(PROJECTS.map((p) => p.domain)));
  const labels: Record<Domain, string> = {
    ai: "AI",
    software: "Software",
    hybrid: "Hybrid",
    hardware: "Hardware",
  };

  const filters: Array<{ label: string; value: FilterValue; color: string }> = [
    { label: "All", value: "all", color: COLORS.textPrimary },
    ...present.map((d) => ({ label: labels[d], value: d, color: DOMAIN_COLOR[d] })),
  ];

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.domain === filter);

  return (
    <section id="projects" style={{
      padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)",
      maxWidth: "1100px", margin: "0 auto",
    }}>
      <SectionHeader tag="04" title="Projects" />

      {/* Filter bar */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            style={{
              fontFamily: FONT.mono, fontSize: "0.7rem", fontWeight: 500,
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "0.4rem 1rem", cursor: "pointer",
              background: filter === f.value ? `${f.color}18` : "transparent",
              color: filter === f.value ? f.color : COLORS.textMuted,
              border: `1px solid ${filter === f.value ? `${f.color}44` : COLORS.border}`,
              borderRadius: "2px", transition: "all 0.2s",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
        gap: "1.25rem",
      }}>
        {filtered.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
