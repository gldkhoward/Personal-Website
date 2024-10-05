import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

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
      <h3 className="text-xl font-semibold text-gray-500 mt-2">Software and Mechatronics Engineer</h3>
      
      {/* Main navigation links */}
      <nav className="mt-8 space-y-4 flex flex-col flex-grow justify-items-start">
        <a href="#about" className="hover:text-orange-400 text-lg">About</a>
        <a href="#skills" className="hover:text-orange-400 text-lg">Skills</a>
        <a href="#projects" className="hover:text-orange-400 text-lg">Projects</a>
        <a href="#contact" className="hover:text-orange-400 text-lg">Contact</a>
      </nav>

      {/* Separate section for Reflections and Cover Letter */}
      <div className="mt-12 pt-4 ">
        <h4 className="text-lg font-semibold text-gray-400">Other Documents</h4>
        <nav className="mt-4 space-y-4 flex flex-col justify-items-start">
          <a href="/reflections" className="hover:text-orange-400 text-lg">Reflections</a>
          <a href="/cover-letter" className="hover:text-orange-400 text-lg">Cover Letter</a>
        </nav>
      </div>

      {/* Social links */}
      <div className="mt-8 flex space-x-4">
        <a href="https://www.linkedin.com/in/lukehowarduts/" className="hover:text-orange-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/gldkhoward" className="hover:text-orange-400">
          <FaGithub size={24} />
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-orange-400">
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  );
}
