"use client";
import { useState } from "react";
import type { Benefit } from "../data/benefits";
import DesktopCard from "./DesktopCard";

export default function DesktopLayout({ benefits }: { benefits: Benefit[] }) {
  const [active, setActive] = useState<Benefit>(benefits[0]);

  return (
    <div
      className="hidden md:flex"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "0",
        padding: "48px 32px 56px",
        alignItems: "flex-start",
      }}
    >
      {/* LEFT: sticky sidebar */}
      <aside
        style={{
          width: "320px",
          flexShrink: 0,
          position: "sticky",
          top: "32px",
          marginRight: "32px",
        }}
      >
        {/* Sidebar card */}
        <div
          style={{
            background: active.color,
            border: "4px solid #1a1a2e",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "8px 8px 0 #1a1a2e",
            transition: "background 0.4s ease",
          }}
        >
          {/* Colored header */}
          <div
            style={{
              background: active.accentColor,
              padding: "14px 20px",
              borderBottom: "3px solid #1a1a2e",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "background 0.4s ease",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{active.emoji}</span>
            <div>
              <span
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "rgba(255,255,255,0.8)",
                  display: "block",
                }}
              >
                BENEFIT #{active.number}
              </span>
              <span
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "20px",
                  letterSpacing: "1px",
                  color: "white",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
                  lineHeight: 1.1,
                }}
              >
                {active.title}
              </span>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "20px" }}>
            {/* Tagline */}
            <p
              style={{
                fontFamily: "Bangers, cursive",
                fontSize: "16px",
                letterSpacing: "1px",
                color: active.accentColor,
                margin: "0 0 12px",
                transition: "color 0.4s ease",
              }}
            >
              "{active.tagline}"
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#1a1a2e",
                lineHeight: 1.65,
                margin: "0 0 20px",
              }}
            >
              {active.description}
            </p>

            {/* How to box */}
            <div
              style={{
                background: "white",
                border: "3px solid #1a1a2e",
                borderRadius: "12px",
                padding: "14px 16px",
                position: "relative",
                boxShadow: `4px 4px 0 ${active.accentColor}`,
                transition: "box-shadow 0.4s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "14px",
                  background: active.accentColor,
                  border: "2.5px solid #1a1a2e",
                  borderRadius: "6px",
                  padding: "1px 10px",
                  transition: "background 0.4s ease",
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
                  lineHeight: 1.6,
                }}
              >
                {active.howTo}
              </p>
            </div>
          </div>

          {/* Bottom stripe */}
          <div
            style={{
              height: "8px",
              background: `repeating-linear-gradient(90deg, ${active.accentColor} 0px, ${active.accentColor} 20px, #1a1a2e 20px, #1a1a2e 23px)`,
              transition: "background 0.4s ease",
            }}
          />
        </div>

        {/* Hint text */}
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            color: "#999",
            textAlign: "center",
            marginTop: "14px",
            letterSpacing: "0.5px",
          }}
        >
          Click a card to explore →
        </p>
      </aside>

      {/* RIGHT: 2-column grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {benefits.map((benefit, index) => (
          <DesktopCard
            key={benefit.id}
            benefit={benefit}
            index={index}
            isActive={active.id === benefit.id}
            onClick={() => setActive(benefit)}
          />
        ))}
      </div>
    </div>
  );
}
