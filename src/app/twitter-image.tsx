import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#ffffff",
          color: "#171717",
          fontSize: 56,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        <div style={{ fontSize: 22, opacity: 0.7, marginBottom: 18 }}>
          {siteConfig.title}
        </div>
        <div>{siteConfig.name}</div>
        <div style={{ fontSize: 28, opacity: 0.8, marginTop: 18 }}>
          Data Analysis · Dashboards · Storytelling
        </div>
      </div>
    ),
    size,
  );
}
