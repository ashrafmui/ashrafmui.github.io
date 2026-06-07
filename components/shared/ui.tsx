import { useState, useEffect, useRef } from "react";
import { COLORS, FONT } from "./theme";
import type { Domain } from "./theme";

// ═══════════════════════════════════════════════════════════════
// CIRCUIT GRID BACKGROUND
// ═══════════════════════════════════════════════════════════════

export function CircuitGrid() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,255,136,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.015) 2px, rgba(0,255,136,0.015) 4px)",
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// BLINKING CURSOR
// ═══════════════════════════════════════════════════════════════

export function Cursor() {
  const [v, setV] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setV((p) => !p), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{
      display: "inline-block", width: "0.6em", height: "1.1em",
      background: v ? COLORS.green : "transparent", marginLeft: "2px",
      verticalAlign: "text-bottom", transition: "background 0.05s",
    }} />
  );
}

// ═══════════════════════════════════════════════════════════════
// SECTION HEADER
// ═══════════════════════════════════════════════════════════════

export function SectionHeader({ tag, title, align = "left" }: { tag: string; title: string; align?: "left" | "center" }) {
  return (
    <div style={{ marginBottom: "3rem", textAlign: align }}>
      <div style={{
        fontFamily: FONT.mono, fontSize: "clamp(0.6rem, 1vw, 0.72rem)",
        color: COLORS.green, letterSpacing: "0.2em", textTransform: "uppercase",
        marginBottom: "0.75rem", fontWeight: 500,
      }}>
        {"// "}{tag}
      </div>
      <h2 style={{
        fontFamily: FONT.sans, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
        fontWeight: 600, color: COLORS.textPrimary, margin: 0, letterSpacing: "-0.02em",
      }}>
        {title}
      </h2>
      <div style={{
        height: "2px", width: align === "center" ? "60px" : "80px",
        background: `linear-gradient(90deg, ${COLORS.green}, transparent)`,
        marginTop: "1rem",
        marginLeft: align === "center" ? "auto" : 0,
        marginRight: align === "center" ? "auto" : undefined,
      }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SIGNAL TRACE (canvas animation)
// ═══════════════════════════════════════════════════════════════

export function SignalTrace({ width = 300, height = 60, color = COLORS.green, speed = 1.5 }: {
  width?: number; height?: number; color?: string; speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let animId: number;

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = height / 2
          + Math.sin((x + offsetRef.current) * 0.03) * 12
          + Math.sin((x + offsetRef.current) * 0.07) * 6
          + Math.sin((x + offsetRef.current) * 0.01) * 8;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.globalAlpha = 0.15;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.globalAlpha = 1;
      offsetRef.current += speed;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [width, height, color, speed]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ display: "block" }} />;
}

// ═══════════════════════════════════════════════════════════════
// DOMAIN BADGE (HW / SW / HW+SW)
// ═══════════════════════════════════════════════════════════════

export function DomainBadge({ domain }: { domain: Domain }) {
  const map: Record<Domain, { label: string; color: string }> = {
    ai: { label: "AI", color: COLORS.purple },
    software: { label: "SW", color: COLORS.blue },
    hybrid: { label: "HW+SW", color: COLORS.amber },
    hardware: { label: "HW", color: COLORS.green },
  };
  const { label, color } = map[domain];
  return (
    <span style={{
      fontFamily: FONT.mono, fontSize: "0.6rem", fontWeight: 600,
      color, border: `1px solid ${color}55`, borderRadius: "2px",
      padding: "0.15rem 0.5rem", letterSpacing: "0.15em", textTransform: "uppercase",
    }}>
      {label}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════
// SKILL DOMAIN (tag group used in Hero)
// ═══════════════════════════════════════════════════════════════

export function SkillDomain({ label, items, accentColor }: { label: string; items: string[]; accentColor: string }) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div style={{
        fontFamily: FONT.mono, fontSize: "clamp(0.6rem, 1vw, 0.7rem)",
        textTransform: "uppercase", letterSpacing: "0.2em",
        color: accentColor, marginBottom: "0.5rem", fontWeight: 600,
      }}>
        {"// "}{label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {items.map((item: string, i: number) => (
          <span key={i} style={{
            padding: "0.25rem 0.65rem",
            border: `1px solid ${accentColor}33`, borderRadius: "2px",
            fontFamily: FONT.mono, fontSize: "clamp(0.6rem, 1vw, 0.72rem)",
            color: accentColor, background: `${accentColor}0a`,
            letterSpacing: "0.02em",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}