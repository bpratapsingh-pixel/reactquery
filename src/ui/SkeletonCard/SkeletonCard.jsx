export function SkeletonCard() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
            </div>
        </div>
    );
}
