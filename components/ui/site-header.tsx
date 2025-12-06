"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          className="font-semibold text-sm md:text-base tracking-tight text-white hover:text-sky-400 transition"
        >
          Ankur<span className="text-sky-400">.finance</span>
        </Link>

        <nav className="hidden md:flex gap-4 text-xs md:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition hover:text-sky-400",
                pathname === item.href ? "text-sky-400" : "text-slate-300"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-sky-500/50 text-sky-300"
        >
          <a href="mailto:ankuriscoding@gmail.com">Contact</a>
        </Button>
      </div>
    </header>
  );
}

