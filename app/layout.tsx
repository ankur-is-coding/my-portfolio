import "./globals.css";
import type { ReactNode } from "react";
import { SiteHeader } from "../components/site-header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <SiteHeader />
        <main className="min-h-screen container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
