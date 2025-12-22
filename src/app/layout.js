import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import AppWrapper from "../components/appWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Vibrant Hub | Todo, Feed & More",
  description: "A high-performance interactive dashboard featuring advanced todo management, live feeds, and optimized scrolling experiences.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>
        <ReactQueryProvider>
          <div className="bg-[#0C0630] min-h-screen text-white">
            {/* Note: In a real app, AuthProvider handles state. 
                 We wrap AppWrapper (Client Component) to use it. */}
            <AppWrapper modal={modal}>
              {children}
            </AppWrapper>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
