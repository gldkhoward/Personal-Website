// app/page.js

"use client"

import { useTheme } from 'next-themes';
import Sidebar from '@/components/portfolio/navigation';
import AboutMe from '@/components/portfolio/aboutme';
import Experience from '@/components/portfolio/experience';
import Projects from '@/components/portfolio/projects';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';

export default function HomePage() {
  const { } = useTheme();
  
  return (
    <div className="bg-background text-foreground mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />     
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
