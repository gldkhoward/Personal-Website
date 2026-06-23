import { ImageResponse } from "next/og";

export const alt = "Luke Howard — Founder & Robotics Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(217,70,239,0.20), transparent 45%), radial-gradient(circle at 85% 88%, rgba(249,115,22,0.18), transparent 45%)",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#a1a1aa",
            fontSize: 30,
          }}
        >
          <span style={{ color: "#4ade80" }}>me@lukehoward.com.au</span>
          <span style={{ color: "#e4e4e7" }}>:</span>
          <span style={{ color: "#60a5fa" }}>~</span>
          <span style={{ color: "#e4e4e7" }}>$ whoami</span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#fafafa",
            fontSize: 92,
            fontWeight: 700,
            marginTop: 28,
            letterSpacing: "-0.03em",
          }}
        >
          Luke Howard
        </div>
        <div
          style={{
            display: "flex",
            color: "#e879f9",
            fontSize: 44,
            fontWeight: 600,
            marginTop: 8,
          }}
        >
          Founder &amp; Robotics Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 32,
            marginTop: 36,
            maxWidth: 900,
          }}
        >
          Building Lecxa &amp; o1lab — taking things from zero to one across AI,
          robotics, and the web.
        </div>
      </div>
    ),
    { ...size },
  );
}
