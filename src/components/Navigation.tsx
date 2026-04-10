"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 bg-darker/95 backdrop-blur">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg hover:text-gray-300 transition-colors"
        >
          netcodev
        </Link>
        <div className="flex gap-6">
          <Link
            href="/"
            className={`transition-colors ${
              isActive("/")
                ? "text-lighter"
                : "text-gray-500 hover:text-lighter"
            }`}
          >
            home
          </Link>
          <Link
            href="/projects"
            className={`transition-colors ${
              isActive("/projects")
                ? "text-lighter"
                : "text-gray-500 hover:text-lighter"
            }`}
          >
            projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
