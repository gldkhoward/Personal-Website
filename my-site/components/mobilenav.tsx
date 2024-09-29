// components/MobileNavbar.js
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden bg-slate-900 text-slate-200 fixed w-full top-0 z-10">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-xl font-bold">Luke Howard</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <div className="px-4 py-2">
          <a href="#about" className="block py-2 hover:text-teal-300">
            About
          </a>
          <a href="#skills" className="block py-2 hover:text-teal-300">
            Skills
          </a>
          <a href="#projects" className="block py-2 hover:text-teal-300">
            Projects
          </a>
          <a href="#contact" className="block py-2 hover:text-teal-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
