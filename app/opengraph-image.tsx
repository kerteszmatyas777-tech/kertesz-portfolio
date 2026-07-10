import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Kertész Mátyás — Brand Identity & Graphic Designer";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#F8F9FB",
          color: "#113B8E",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 5 }}>
          KERTÉSZ MÁTYÁS
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1 }}>
            Brand identity
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1 }}>
            with a point of view.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, opacity: 0.72 }}>
          Brand Identity & Graphic Designer · Hungary
        </div>
        <div
          style={{
            background: "#C9CADF",
            borderRadius: "9999px",
            height: 460,
            opacity: 0.38,
            position: "absolute",
            right: -150,
            top: -150,
            width: 460,
          }}
        />
        <div
          style={{
            background: "#536CAA",
            borderRadius: "9999px",
            height: 310,
            opacity: 0.26,
            position: "absolute",
            right: -75,
            top: -75,
            width: 310,
          }}
        />
      </div>
    ),
    size
  );
}
