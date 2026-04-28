export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #003087 0%, #0052CC 60%, #1a73e8 100%)",
        borderBottom: "4px solid #1a1a2e",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      {/* Halftone dots overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Gold top strip */}
      <div
        className="absolute top-0 left-0 right-0 h-3"
        style={{
          background: "#C9A84C",
          borderBottom: "3px solid #1a1a2e",
        }}
      />

      <div className="relative px-6 pt-10 pb-8 text-center">
        {/* Issue label */}
        <div
          className="inline-block mb-4"
          style={{
            background: "#C9A84C",
            border: "3px solid #1a1a2e",
            borderRadius: "6px",
            padding: "3px 14px",
            transform: "rotate(-1.5deg)",
            boxShadow: "3px 3px 0 #1a1a2e",
          }}
        >
          <span
            style={{
              fontFamily: "Bangers, cursive",
              fontSize: "13px",
              letterSpacing: "2px",
              color: "#1a1a2e",
            }}
          >
            OFFICIAL STUDENT GUIDE
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "Bangers, cursive",
            fontSize: "clamp(2.8rem, 12vw, 3.8rem)",
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "2px",
            textShadow: "4px 4px 0 #1a1a2e, -1px -1px 0 #1a1a2e",
            margin: "0 0 8px 0",
          }}
        >
          YOUR STUDENT
          <br />
          <span style={{ color: "#C9A84C", textShadow: "4px 4px 0 #1a1a2e" }}>
            SUPERPOWERS
          </span>
          <br />
          AWAIT! 🎓
        </h1>

        {/* Subtitle box */}
        <div
          style={{
            background: "white",
            border: "3px solid #1a1a2e",
            borderRadius: "16px",
            padding: "12px 20px",
            marginTop: "20px",
            marginBottom: "8px",
            boxShadow: "4px 4px 0 #1a1a2e",
            display: "inline-block",
            maxWidth: "340px",
          }}
        >
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 800,
              fontSize: "15px",
              color: "#003087",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Being an <strong>ADDU student</strong> comes with more perks
            than you think. Here are <strong>7 benefits</strong> you
            should be using right now. 👇
          </p>
        </div>

        {/* Arrow bounce - pure CSS */}
        <div
          className="mt-5"
          style={{
            fontSize: "2rem",
            display: "inline-block",
            animation: "heroBounce 1.2s ease-in-out infinite",
          }}
        >
          ↓
        </div>
      </div>

      <style>{`
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
