// ═══════════════════════════════════════════════════════════════
// THEME CONSTANTS
// ═══════════════════════════════════════════════════════════════

export const COLORS = {
  bg: "#0a0f0d",
  bgLight: "#0e1512",
  bgCard: "#111916",
  green: "#00ff88",
  greenDim: "#00ff8844",
  greenFaint: "#00ff8815",
  blue: "#00bbff",
  blueDim: "#00bbff44",
  blueFaint: "#00bbff15",
  amber: "#ffaa00",
  amberDim: "#ffaa0044",
  purple: "#b388ff",
  purpleDim: "#b388ff44",
  textPrimary: "#c8e6d5",
  textSecondary: "#8aa89a",
  textDim: "#4a7a5c",
  textMuted: "#3d5a47",
  border: "#1a2e22",
} as const;

export const FONT = {
  mono: "'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', monospace",
  sans: "'Space Grotesk', 'Inter', system-ui, sans-serif",
} as const;

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

export type Domain = "ai" | "software" | "hybrid" | "hardware";

export interface Project {
  title: string;
  subtitle: string;
  domain: Domain;
  tech: string[];
  bullets: string[];
  status: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
  kind?: "work" | "leadership";
}

export interface SkillGroup {
  label: string;
  items: string[];
  accent: string;
}

export interface EducationItem {
  school: string;
  credential: string;
  location: string;
  period: string;
}