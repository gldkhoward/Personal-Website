// app/page.js

"use client"
import Sidebar from '../components/navigation';
import MobileNavbar from '../components/mobilenav';
import AboutMe from '../components/aboutme';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '@/components/footer';
import Experience from '@/sections/experience';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800  mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
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
