// components/Contact.js
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        
        <p className="mt-4 text-slate-400">
          I'm always open to discussing new projects or opportunities. Feel free to reach out!
        </p>
      </div>
    </section>
  );
}
