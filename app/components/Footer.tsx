export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "4px solid #1a1a2e",
      }}
    >
      {/* Gold stripe */}
      <div style={{ background: "#C9A84C", height: "10px", borderBottom: "3px solid #1a1a2e" }} />

      {/* Main footer body */}
      <div
        style={{
          background: "#003087",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halftone */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            pointerEvents: "none",
          }}
        />

        {/* Inner content */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 32px 28px",
            position: "relative",
          }}
        >
          {/* Top row: logo + school info */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "20px",
              marginBottom: "28px",
              paddingBottom: "24px",
              borderBottom: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <div
              style={{
                background: "#C9A84C",
                border: "3px solid #1a1a2e",
                borderRadius: "10px",
                padding: "8px 22px",
                boxShadow: "4px 4px 0 #1a1a2e",
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: "Bangers, cursive", fontSize: "28px", letterSpacing: "4px", color: "#1a1a2e" }}>
                ADDU
              </span>
            </div>
            <div>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "15px", color: "white", margin: "0 0 2px", letterSpacing: "1px", textTransform: "uppercase" }}>
                Ateneo de Davao University
              </p>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>
                E. Jacinto St., Davao City 8000, Philippines
              </p>
            </div>
          </div>

          {/* Contact grid — 2-col on mobile, 4-col on desktop */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "24px",
              marginBottom: "28px",
            }}
          >
            <FooterBlock icon="🏥" title="Health Services Unit" lines={["Mon–Fri, 8AM–5PM", "Located at Main Campus", "Bring your valid student ID"]} />
            <FooterBlock icon="🧠" title="Student Dev. Center" lines={["Mon–Fri, 8AM–5PM", "Free & Confidential", "Walk-in or by appointment"]} />
            <FooterBlock icon="📱" title="Office of Student Affairs" lines={["fb.com/officialadduosa", "For student concerns", "MyADDU app for updates"]} />
            <FooterBlock icon="🌐" title="Official Website" lines={["addu.edu.ph", "For announcements", "Verify info with official channels"]} />
          </div>

          {/* Divider */}
          <div style={{ height: "2px", background: "rgba(255,255,255,0.12)", marginBottom: "20px", borderRadius: "999px" }} />

          {/* Note on counseling */}
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "2px solid rgba(201,168,76,0.4)",
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "24px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>📝</span>
            <div>
              <p style={{ fontFamily: "Bangers, cursive", fontSize: "14px", letterSpacing: "1.5px", color: "#C9A84C", margin: "0 0 6px" }}>
                NOTE ON COUNSELING INFO
              </p>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6 }}>
                The counseling section contains placeholder text. Please verify the exact schedule,
                contact details, and appointment procedure with the ADDU Student Development Center
                (SDC) or the Office of Student Affairs (OSA) directly for the most accurate information.
              </p>
            </div>
          </div>

          {/* Bottom note */}
          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.35)", margin: 0, textAlign: "center", letterSpacing: "0.5px" }}>
            This is an unofficial student guide. Information subject to change. Always verify with official ADDU channels.
          </p>
        </div>
      </div>

      {/* Gold bottom strip */}
      <div style={{ background: "#C9A84C", height: "6px" }} />
    </footer>
  );
}

function FooterBlock({ icon, title, lines }: { icon: string; title: string; lines: string[] }) {
  return (
    <div>
      <p style={{ fontFamily: "Bangers, cursive", fontSize: "14px", letterSpacing: "1px", color: "#C9A84C", margin: "0 0 6px" }}>
        {icon} {title}
      </p>
      {lines.map((l, i) => (
        <p key={i} style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.65)", margin: "2px 0", lineHeight: 1.45 }}>
          {l}
        </p>
      ))}
    </div>
  );
}
