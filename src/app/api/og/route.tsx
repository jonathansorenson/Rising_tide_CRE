import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Rising Tide CRE";
  const subtitle = searchParams.get("subtitle") || "Real Assets. Real Operations. Real Results.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          background: "linear-gradient(135deg, #0F1923, #1B2A3D, #243447)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #B8954A, #C8A96E, #D4BA85)",
          }}
        />

        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(200, 169, 110, 0.05)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#C8A96E",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            RISING TIDE CRE
          </div>

          <div
            style={{
              fontSize: title.length > 40 ? "42px" : "56px",
              fontWeight: 700,
              color: "#F5F0E8",
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "rgba(245, 240, 232, 0.6)",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom gold line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #B8954A, #C8A96E, #D4BA85)",
            opacity: 0.6,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
