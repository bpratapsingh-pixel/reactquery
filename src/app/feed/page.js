"use client";

import Link from "next/link";
import Image from "next/image";
import { instagram, facebook, twitter, telegram } from "@/assets/png";

export default function Feed() {
  const photos = [
    { id: 1, img: instagram },
    { id: 2, img: facebook },
    { id: 3, img: twitter },
    { id: 4, img: telegram },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🤖 AI Photo Feed</h1>

      <div className="space-y-4 max-w-md">
        {photos.map((p) => (
          <Link key={p.id} href={`/photo/${p.id}`} className="block">
            <div className="flex items-center gap-4 border rounded-xl p-4 cursor-pointer hover:shadow-md transition">

              <Image
                src={p.img}
                alt={`Photo ${p.id}`}
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />

              <span className="text-lg font-medium">
                📸 Photo {p.id}
              </span>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
