"use client"

import { COLORS, FONT } from "./shared/theme";

export default function Footer() {
  return (
    <footer style={{
      padding: "2rem clamp(1.5rem, 4vw, 3rem)",
      borderTop: `1px solid ${COLORS.border}`,
      textAlign: "center",
    }}>
      <div style={{
        fontFamily: FONT.mono, fontSize: "0.65rem",
        color: COLORS.textMuted, letterSpacing: "0.1em",
      }}>
        Designed & built by Muhaiminul Ashraf &nbsp;·&nbsp; Next.js + TypeScript &nbsp;·&nbsp; 2026
      </div>
    </footer>
  );
}