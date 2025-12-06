"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          className="font-semibold text-sm md:text-base tracking-tight text-white"
        >
          Ankur<span className="text-sky-400">.finance</span>
        </Link>

        <nav className="hidden md:flex gap-4 text-xs md:text-sm text-slate-300">
          <Link href="/" className="hover:text-sky-400 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-sky-400 transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-sky-400 transition">
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

