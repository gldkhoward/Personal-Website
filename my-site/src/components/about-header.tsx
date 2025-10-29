"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import Link from 'next/link';

export default function ClientHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-primary font-semibold hover:underline">
          ← Back to Terminal
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
