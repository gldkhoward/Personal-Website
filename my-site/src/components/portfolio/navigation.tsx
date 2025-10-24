import { Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Sidebar() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <Image
        src="/images/profile.jpg"
        alt="Luke Howard"
        width={128}  // Corresponds to w-32 (32 * 4)
        height={128}  // Corresponds to h-32 (32 * 4)
        className="rounded-full  border-orange-500 shadow-lg"
      />
      <h1 className="text-5xl font-bold mb-4 text-orange-400 pt-4">Luke Howard</h1>
      <h3 className="text-xl font-semibold text-gray-500 mt-2">Founder</h3>
      <h3 className="text-xl font-semibold text-gray-500 mt-2">Robotics/Software Engineer</h3>
      {/* Main navigation links */}
      <nav className="mt-8 space-y-4 flex flex-col flex-grow justify-items-start">
        <a href="#about" className="hover:text-orange-400 text-lg">About</a>
        <a href="#experience" className="hover:text-orange-400 text-lg">Experience</a>
        <a href="#projects" className="hover:text-orange-400 text-lg">Projects</a>
        <a href="#contact" className="hover:text-orange-400 text-lg">Contact</a>
      </nav>

      

      {/* Social links */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/lukehowarduts/" className="hover:text-orange-400">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/gldkhoward" className="hover:text-orange-400">
            <Github size={24} />
          </a>
          <a href="mailto:ekulhoward@hotmail.com" className="hover:text-orange-400">
            <Mail size={24} />
          </a>
        </div>
        <div className="flex items-center justify-center mr-16">
          <ThemeToggle/>
        </div>
      </div>
    </div>
  );
}
