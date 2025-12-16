"use client";

import { use, useEffect, useState } from "react";

export default function PhotoModal({ params }) {
  // ✅ unwrap params because it's a Promise
  const { id } = use(params);

  const [caption, setCaption] = useState("Loading AI caption...");

  useEffect(() => {
    async function loadCaption() {
      const res = await fetch("/api/caption", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      setCaption(data.caption);
    }

    loadCaption();
  }, [id]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 8,
          width: 400,
        }}
      >
        <h2>Photo {id}</h2>
        <p>{caption}</p>

        <a href="/feed" style={{ marginTop: 20, display: "inline-block", color: "blue" }}>
          Close
        </a>
      </div>
    </div>
  );
}
