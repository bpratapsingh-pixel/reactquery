import "./globals.css";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import AppWrapper from "../components/appWrapper";

export const metadata = {
  title: "Todo App",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
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
