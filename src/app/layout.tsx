import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "netcodev",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-screen">
      <body className="bg-darker text-lighter h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        {/* <footer className="py-8">
          <div className="max-w-4xl mx-auto px-6 text-center text-gray-500 text-sm">
            <p>© 2026. All rights reserved.</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
