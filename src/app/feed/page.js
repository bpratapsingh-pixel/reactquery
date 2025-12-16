"use client";

import Link from "next/link";

export default function Feed() {
  const photos = [
    { id: 1, url: "/img1.png" },
    { id: 2, url: "/img2.png" },
    { id: 3, url: "/img3.png" },
    { id: 4, url: "/img4.png" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Photo Feed</h1>

      {photos.map((p) => (
        <Link key={p.id} href={`/photo/${p.id}`}>
          <div
            style={{
              marginTop: 20,
              padding: 20,
              border: "1px solid #ccc",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <img
              src={p.url}
              width={60}
              height={60}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
            <span>📸 Photo {p.id}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
