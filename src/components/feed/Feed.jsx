import Link from "next/link";
import Image from "next/image";
import { photos } from "./constant/constant";

export default function FeedView() {
    // Guard clause for safety
    if (!photos) return null;

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-poppins">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0C1F58] tracking-tight">
                            Community <span className="text-blue-500">Feed</span>
                        </h1>
                        <p className="text-gray-500 mt-2 text-lg">
                            Explore the latest updates and galleries.
                        </p>
                    </div>
                    <Link href="/">
                        <button className="px-8 py-3 bg-white text-[#0C1F58] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            Back Home
                        </button>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {photos.map((photo) => (
                        <Link
                            key={photo.id}
                            href={`/photo/${photo.id}`}
                            scroll={false} // Important for interception
                            className="group relative aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in"
                        >
                            <Image
                                src={photo.img}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {photo.title}
                                </h3>
                                <p className="text-white/80 text-sm mt-2 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {photo.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
