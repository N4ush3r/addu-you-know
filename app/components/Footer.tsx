export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: "480px",
        margin: "0 auto",
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
          padding: "32px 24px 20px",
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
            backgroundSize: "14px 14px",
            pointerEvents: "none",
          }}
        />

        {/* Logo / School name */}
        <div style={{ position: "relative", marginBottom: "24px", textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: "#C9A84C",
              border: "3px solid #1a1a2e",
              borderRadius: "10px",
              padding: "6px 20px",
              boxShadow: "4px 4px 0 #1a1a2e",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "Bangers, cursive",
                fontSize: "22px",
                letterSpacing: "3px",
                color: "#1a1a2e",
              }}
            >
              ADDU
            </span>
          </div>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 800,
              fontSize: "13px",
              color: "rgba(255,255,255,0.85)",
              margin: "4px 0 0",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Ateneo de Davao University
          </p>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              color: "rgba(255,255,255,0.55)",
              margin: "2px 0 0",
            }}
          >
            E. Jacinto St., Davao City 8000
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "2px",
            background: "rgba(255,255,255,0.15)",
            margin: "0 0 20px",
            borderRadius: "999px",
          }}
        />

        {/* Contact info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <FooterBlock
            icon="🏥"
            title="Health Services Unit"
            lines={["Mon–Fri, 8AM–5PM", "Located at Main Campus"]}
          />
          <FooterBlock
            icon="🧠"
            title="Student Dev. Center"
            lines={["Mon–Fri, 8AM–5PM", "Free & Confidential"]}
          />
          <FooterBlock
            icon="📱"
            title="Office of Student Affairs"
            lines={["fb.com/officialadduosa", "For student concerns"]}
          />
          <FooterBlock
            icon="🌐"
            title="Official Website"
            lines={["addu.edu.ph", "For announcements"]}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            height: "2px",
            background: "rgba(255,255,255,0.15)",
            margin: "0 0 16px",
            borderRadius: "999px",
          }}
        />

        {/* Note about counseling */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: "12px",
            padding: "14px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              fontFamily: "Bangers, cursive",
              fontSize: "14px",
              letterSpacing: "1.5px",
              color: "#C9A84C",
              margin: "0 0 6px",
            }}
          >
            📝 NOTE ON COUNSELING INFO
          </p>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            The counseling section above contains placeholder text. Please verify the exact
            schedule, contact details, and appointment procedure with the ADDU Student Development
            Center (SDC) or the Office of Student Affairs (OSA) directly for the most accurate
            information.
          </p>
        </div>

        {/* Footer bottom */}
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            color: "rgba(255,255,255,0.4)",
            margin: 0,
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          This is an unofficial student guide. Information subject to change. <br />
          Always verify with official ADDU channels.
        </p>
      </div>

      {/* Bottom blue stripe */}
      <div style={{ background: "#C9A84C", height: "6px" }} />
    </footer>
  );
}

function FooterBlock({
  icon,
  title,
  lines,
}: {
  icon: string;
  title: string;
  lines: string[];
}) {
  return (
    <div>
      <p
        style={{
          fontFamily: "Bangers, cursive",
          fontSize: "13px",
          letterSpacing: "1px",
          color: "#C9A84C",
          margin: "0 0 4px",
        }}
      >
        {icon} {title}
      </p>
      {lines.map((l, i) => (
        <p
          key={i}
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 600,
            fontSize: "11.5px",
            color: "rgba(255,255,255,0.7)",
            margin: "1px 0",
            lineHeight: 1.4,
          }}
        >
          {l}
        </p>
      ))}
    </div>
  );
}
