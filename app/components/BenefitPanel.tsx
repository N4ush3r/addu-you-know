"use client";
import { useEffect, useRef, useState } from "react";
import type { Benefit } from "@/data/benefits";

interface Props {
  benefit: Benefit;
  index: number;
}

export default function BenefitPanel({ benefit, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
        transitionDelay: `${index * 0.05}s`,
        borderTop: index === 0 ? "none" : "4px solid #1a1a2e",
      }}
    >
      {/* Colored header band */}
      <div
        style={{
          background: benefit.accentColor,
          borderBottom: "3px solid #1a1a2e",
          padding: "6px 20px 6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "Bangers, cursive",
            fontSize: "12px",
            letterSpacing: "2px",
            color: "white",
            textShadow: "1px 1px 0 rgba(0,0,0,0.3)",
          }}
        >
          BENEFIT #{benefit.number}
        </span>
        <span
          style={{
            background: "white",
            border: "2px solid #1a1a2e",
            borderRadius: "999px",
            padding: "1px 10px",
            fontFamily: "Bangers, cursive",
            fontSize: "11px",
            letterSpacing: "1px",
            color: benefit.textColor,
          }}
        >
          {benefit.tag}
        </span>
      </div>

      {/* Main panel body */}
      <div
        style={{
          background: benefit.color,
          padding: "0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halftone pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle, ${benefit.accentColor}22 1.5px, transparent 1.5px)`,
            backgroundSize: "16px 16px",
            pointerEvents: "none",
          }}
        />

        {/* Emoji + title row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0",
            position: "relative",
          }}
        >
          {/* Emoji block */}
          <div
            style={{
              background: benefit.accentColor,
              borderRight: "3px solid #1a1a2e",
              borderBottom: "3px solid #1a1a2e",
              padding: "18px 14px",
              fontSize: "3rem",
              lineHeight: 1,
              minWidth: "80px",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            {benefit.emoji}
          </div>

          {/* Title area */}
          <div style={{ padding: "14px 16px 10px", flex: 1 }}>
            {/* Tagline */}
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 800,
                fontSize: "11px",
                color: benefit.accentColor,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                margin: "0 0 4px 0",
                textShadow: "1px 1px 0 rgba(0,0,0,0.08)",
              }}
            >
              {benefit.tagline}
            </p>
            <h2
              style={{
                fontFamily: "Bangers, cursive",
                fontSize: "clamp(1.5rem, 6vw, 1.9rem)",
                color: "#1a1a2e",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "1px",
              }}
            >
              {benefit.title}
            </h2>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            padding: "16px 20px",
            borderTop: "3px solid #1a1a2e",
            position: "relative",
          }}
        >
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 600,
              fontSize: "14.5px",
              color: "#1a1a2e",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {benefit.description}
          </p>
        </div>

        {/* How to access - speech bubble style */}
        <div
          style={{
            margin: "0 16px 20px",
            background: "white",
            border: "3px solid #1a1a2e",
            borderRadius: "14px",
            padding: "12px 16px",
            boxShadow: `4px 4px 0 ${benefit.accentColor}, 4px 4px 0 2px #1a1a2e`,
            position: "relative",
          }}
        >
          {/* "How to" label */}
          <div
            style={{
              position: "absolute",
              top: "-13px",
              left: "16px",
              background: benefit.accentColor,
              border: "2.5px solid #1a1a2e",
              borderRadius: "6px",
              padding: "1px 10px",
            }}
          >
            <span
              style={{
                fontFamily: "Bangers, cursive",
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "white",
              }}
            >
              HOW TO ACCESS
            </span>
          </div>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#333",
              margin: "6px 0 0",
              lineHeight: 1.55,
            }}
          >
            {benefit.howTo}
          </p>
        </div>
      </div>

      {/* Bottom decorative strip */}
      <div
        style={{
          height: "8px",
          background: `repeating-linear-gradient(90deg, ${benefit.accentColor} 0px, ${benefit.accentColor} 20px, #1a1a2e 20px, #1a1a2e 23px)`,
        }}
      />
    </div>
  );
}
