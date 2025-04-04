// src/components/Contact.tsx
// Create this new file
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out for collaborations, opportunities, or just a chat!
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail size={20} className="text-[#39ff14]" />
          <a href="mailto:ashishram.ja15@gmail.com" className="text-gray-300 hover:text-[#39ff14] transition-colors">
            ashishram.ja15@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Linkedin size={20} className="text-[#39ff14]" />
          <a href="https://www.linkedin.com/in/ashish-ram-j-a-/" className="text-gray-300 hover:text-[#39ff14] transition-colors">
            Ashish Ram J A
          </a>
        </div>
      </div>
      {/* Optional: Add a simple contact form placeholder or link */}
      {/* <div className="mt-8">
        <h3 className="text-lg font-semibold text-[#39ff14] mb-3">Send a Message</h3>
        <p className="text-gray-400">Contact form coming soon!</p>
      </div> */}
    </section>
  );
};

export default Contact;