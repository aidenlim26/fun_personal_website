import { ImageResponse } from "next/og";
import { profile, site } from "@/lib/content";

export const alt = site.description;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 88,
        background: "#f7f6f2",
        color: "#252923",
      }}>
        <div style={{ fontSize: 28, color: "#3c594a" }}>{profile.location}</div>
        <div style={{ fontSize: 116, fontWeight: 700, letterSpacing: -6, marginBottom: 32 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 34 }}>{`${profile.clubRole} of the ${profile.club}`}</div>
        <div style={{ fontSize: 34 }}>{`${profile.boardRole} of the ${profile.board}`}</div>
      </div>
    ),
    size,
  );
}
