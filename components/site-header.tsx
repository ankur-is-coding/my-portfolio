"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="bg-slate-900 border-b border-slate-700">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="text-white font-bold text-sm">
          HEADER TEST
        </div>

        <nav className="flex gap-4 text-xs text-slate-300">
          <Link href="/" className="hover:text-sky-400">
            Home
          </Link>
          <Link href="/projects" className="hover:text-sky-400">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-sky-400">
            Blog
          </Link>
        </nav>

        <Button asChild size="sm" variant="outline">
          <a href="mailto:ankuriscoding@gmail.com">Contact</a>
        </Button>
      </div>
    </header>
  );
}
