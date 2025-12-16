import "./globals.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";

export const metadata = {
  title: "Todo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
