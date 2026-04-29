export default function Hero() {
  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        background: "linear-gradient(160deg, #003087 0%, #0052CC 60%, #1a73e8 100%)",
        borderBottom: "4px solid #1a1a2e",
      }}
    >
      {/* Halftone dots overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Gold top strip */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ background: "#C9A84C", height: "10px", borderBottom: "3px solid #1a1a2e" }}
      />

      {/* Inner content — constrained on desktop */}
      <div
        className="relative mx-auto text-center"
        style={{ maxWidth: "900px", padding: "clamp(40px, 6vw, 80px) 24px clamp(32px, 5vw, 64px)" }}
      >
        {/* Badge */}
        <div
          className="inline-block mb-5"
          style={{
            background: "#C9A84C",
            border: "3px solid #1a1a2e",
            borderRadius: "6px",
            padding: "4px 18px",
            transform: "rotate(-1.5deg)",
            boxShadow: "3px 3px 0 #1a1a2e",
          }}
        >
          <span style={{ fontFamily: "Bangers, cursive", fontSize: "14px", letterSpacing: "3px", color: "#1a1a2e" }}>
            OFFICIAL STUDENT GUIDE · ADDU
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "Bangers, cursive",
            fontSize: "clamp(3rem, 9vw, 6rem)",
            color: "white",
            lineHeight: 1.0,
            letterSpacing: "3px",
            textShadow: "5px 5px 0 #1a1a2e, -1px -1px 0 #1a1a2e",
            margin: "0 0 10px",
          }}
        >
          YOUR STUDENT{" "}
          <span style={{ color: "#C9A84C", textShadow: "5px 5px 0 #1a1a2e" }}>
            SUPERPOWERS
          </span>{" "}
          AWAIT! 🎓
        </h1>

        {/* Subtitle */}
        <div
          className="inline-block"
          style={{
            background: "white",
            border: "3px solid #1a1a2e",
            borderRadius: "16px",
            padding: "14px 28px",
            marginTop: "24px",
            boxShadow: "5px 5px 0 #1a1a2e",
            maxWidth: "520px",
          }}
        >
          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "clamp(14px,2.5vw,17px)", color: "#003087", margin: 0, lineHeight: 1.45 }}>
            Being an <strong>ADDU student</strong> comes with more perks than you think.
            Here are <strong>7 benefits</strong> you should be using right now. 👇
          </p>
        </div>

        {/* Bounce arrow */}
        <div style={{ fontSize: "2rem", marginTop: "20px", display: "block", animation: "heroBounce 1.2s ease-in-out infinite" }}>↓</div>
      </div>

      <style>{`
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(9px); }
        }
      `}</style>
    </section>
  );
}
