// components/Contact.js
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-slate-800 text-slate-200">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://linkedin.com/in/luke-howard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-teal-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300"
            aria-label="Resume"
          >
            <FaFilePdf />
          </a>
        </div>
        <p className="mt-4 text-slate-400">
          I'm always open to discussing new projects or opportunities. Feel free to reach out!
        </p>
      </div>
    </section>
  );
}
