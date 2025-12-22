export default function FeedLoading() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-poppins">
            <div className="max-w-7xl mx-auto">
                {/* Header Skeleton */}
                <div className="w-64 h-10 bg-gray-200 rounded-lg mx-auto mb-8 animate-pulse"></div>
                <div className="w-96 h-4 bg-gray-200 rounded mx-auto mb-12 animate-pulse"></div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse"
                        >
                            {/* Image Placeholder */}
                            <div className="h-64 bg-gray-200 w-full relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                            </div>

                            {/* Text Placeholder */}
                            <div className="p-5 flex-1 flex flex-col gap-3">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
