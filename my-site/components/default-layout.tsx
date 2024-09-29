// components/ClientLayout.tsx
//"use client"; // This file will use client-side functionality
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";


export function ClientLayout({ children }) {
    return (
        <div>
        <header className="flex justify-between items-center p-4 shadow-md">
          <nav>
            <ul className="flex gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/resume">Resume</Link></li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 hover:text-orange-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 hover:text-orange-500" />
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="p-4 text-center">
          <button
            className="text-orange-500 hover:underline"
            //onClick={() => document.getElementById("contactModal").showModal()}
          >
            Contact
          </button>
        </footer>
      </div>
    );
  }
  