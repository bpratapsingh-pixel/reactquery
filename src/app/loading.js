export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0630]">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-[#5A2CC2] border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-[#2E70DA] border-t-transparent rounded-full animate-spin reverse-spin"></div>
                </div>
                <p className="text-white/80 font-medium text-lg animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
