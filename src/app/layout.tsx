import Nav from "@/components/Nav";

import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titilium_web = Titillium_Web({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titilium_web.className}>
        <Nav />
        <main className="w-full min-h-[calc(100vh-5rem)] bg-slate-200 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
