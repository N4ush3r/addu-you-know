"use client";
import { useEffect, useRef, useState } from "react";
import type { Benefit } from "../data/benefits";

interface Props {
  benefit: Benefit;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function DesktopCard({ benefit, index, isActive, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, box-shadow 0.2s ease, outline 0.15s ease`,
        cursor: "pointer",
        borderRadius: "18px",
        overflow: "hidden",
        border: isActive ? `4px solid ${benefit.accentColor}` : "4px solid #1a1a2e",
        boxShadow: isActive
          ? `6px 6px 0 ${benefit.accentColor}, 6px 6px 0 2px #1a1a2e`
          : "5px 5px 0 #1a1a2e",
        background: benefit.color,
        position: "relative",
        outline: isActive ? `3px solid ${benefit.accentColor}` : "none",
        outlineOffset: "3px",
      }}
    >
      {/* Halftone background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${benefit.accentColor}20 1.5px, transparent 1.5px)`,
          backgroundSize: "14px 14px",
          pointerEvents: "none",
        }}
      />

      {/* Active glow pulse */}
      {isActive && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `${benefit.accentColor}10`,
            pointerEvents: "none",
            animation: "activePulse 2s ease-in-out infinite",
          }}
        />
      )}

      {/* Header bar */}
      <div
        style={{
          background: benefit.accentColor,
          borderBottom: "3px solid #1a1a2e",
          padding: "8px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "Bangers, cursive",
            fontSize: "11px",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          #{benefit.number}
        </span>
        <span
          style={{
            background: "white",
            border: "2px solid #1a1a2e",
            borderRadius: "999px",
            padding: "1px 9px",
            fontFamily: "Bangers, cursive",
            fontSize: "10px",
            letterSpacing: "1px",
            color: benefit.textColor,
          }}
        >
          {benefit.tag}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: "16px 16px 18px", position: "relative" }}>
        {/* Emoji */}
        <div style={{ fontSize: "2.4rem", marginBottom: "10px", lineHeight: 1 }}>
          {benefit.emoji}
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 800,
            fontSize: "10px",
            color: benefit.accentColor,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            margin: "0 0 4px",
          }}
        >
          {benefit.tagline}
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: "Bangers, cursive",
            fontSize: "1.35rem",
            color: "#1a1a2e",
            margin: "0 0 10px",
            lineHeight: 1.1,
            letterSpacing: "1px",
          }}
        >
          {benefit.title}
        </h2>

        {/* Short description — 2 lines max */}
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 600,
            fontSize: "12.5px",
            color: "#333",
            lineHeight: 1.55,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {benefit.description}
        </p>
      </div>

      {/* Bottom stripe */}
      <div
        style={{
          height: "6px",
          background: `repeating-linear-gradient(90deg, ${benefit.accentColor} 0px, ${benefit.accentColor} 16px, #1a1a2e 16px, #1a1a2e 19px)`,
        }}
      />

      <style>{`
        @keyframes activePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
