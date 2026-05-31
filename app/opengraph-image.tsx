import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#e8a42e",
          color: "#211a10",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#fff8e7",
            border: "4px solid rgba(43, 28, 8, 0.18)",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 22,
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#bd4b12", fontSize: 34, fontWeight: 800 }}>
            NKV Enterprises
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.05 }}>
            Home Appliance Repair Service
          </div>
          <div style={{ color: "#705d43", fontSize: 34, lineHeight: 1.35 }}>
            Washing machine, chimney, AC, microwave, geyser, purifier, and refrigerator repair.
          </div>
          <div style={{ color: "#0f766e", fontSize: 36, fontWeight: 900 }}>
            Call or WhatsApp: +91 93475 84923
          </div>
        </div>
      </div>
    ),
    size,
  );
}
