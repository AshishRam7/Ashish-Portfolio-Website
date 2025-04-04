// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Github,Users, Linkedin, Mail, Award, Code2, Briefcase, GraduationCap, ScrollText, Medal, Home, Contact as ContactIcon, FileText, Code, Terminal, Phone } from 'lucide-react'; // Added Home, ContactIcon, FileText, Code, Terminal, Phone
import Sidebar from './components/Sidebar';
// Removed About import
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Responsibility from './components/Responsibility';
import Contact from './components/Contact'; // Added Contact import
import Footer from './components/Footer'; // Added Footer import

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Default to hero

  // Updated sections array
  const sections = [
    { id: 'hero', label: 'Home', icon: <Home size={20} /> }, // Changed About to Home/Hero
    { id: 'skills', label: 'Skills', icon: <ScrollText size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code2 size={20} /> }, // Changed icon for consistency
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Medal size={20} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={20} /> },
    { id: 'responsibility', label: 'POR', icon: <Users size={20} /> }, // Changed icon
    { id: 'contact', label: 'Contact', icon: <ContactIcon size={20} /> }, // Added Contact section
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.3; // Adjust offset as needed
      let current = 'hero';

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the top of the section is within the viewport (with offset)
          if (rect.top <= offset && rect.bottom >= offset) {
            current = section.id;
            break;
          }
          // Fallback for sections taller than viewport or last section
          if (rect.top <= offset && rect.bottom >= window.innerHeight) {
             current = section.id;
             break;
          }
           // Check if scrolled past the bottom of a section but not yet into the next one
          if (rect.bottom < offset && rect.bottom > 0) {
             current = section.id;
             // Don't break, let the loop find the actual current section if possible
          }
        }
      }
       // Special check for bottom of page
       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { // 50px buffer
           const lastSection = sections[sections.length - 1];
           if (lastSection) {
               current = lastSection.id;
           }
       }


      setActiveSection(current);
    };


    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]); // Add sections as dependency

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-black/80 border border-[#39ff14]/20 p-2 rounded-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} className="text-[#39ff14]" /> : <Menu size={24} className="text-[#39ff14]" />}
      </button>

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection} // Pass setActiveSection down
      />

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <img
  src="./public/profile-photo.jpg" // Path starts with '/' - refers to the public folder
  alt="Ashish Ram J A - Profile Photo" // Add descriptive alt text!
  className="w-48 h-48 lg:w-60 lg:h-60 rounded-full border-2 border-[#39ff14]/30 object-cover shadow-lg shadow-[#39ff14]/10 flex-shrink-0" // Added object-cover
/>

            {/* Hero Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 neon-text">
                Ashish Ram J A
              </h1>
              <p className="text-lg sm:text-xl text-[#39ff14]/90 mb-6">
                Software Developer | Innovator | Tech Enthusiast
              </p>
              {/* About Me Text (Moved from About.tsx) */}
              <p className="text-gray-300 leading-relaxed mb-8">
                I am a Computer Science Engineering student at Vellore Institute of Technology, Chennai, with a strong passion for technology and innovation. My expertise spans across various domains including web development, artificial intelligence, and blockchain technology. I have experience in freelancing projects and pursuing research in the fields of Generative AI,Large Language Models(LLM's), Web Development and Deep Learning. I have also worked with a wide range of programming languages ,frameworks, technologies and deployment platforms and I'm always eager to learn and adapt to new technologies quickly.
              </p>

              {/* Contact Info & Links */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-4">
                <a href="mailto:ashishram.ja15@gmail.com" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a href="https://github.com/AshishRam7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                  <Github size={20} />
                   <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ashish-ram-j-a-/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                 <a href="https://drive.google.com/file/d/1hnbstXoVCCy2EVNfW1qQCyEWiiY_0EwX/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                  <FileText size={20} />
                  <span>Resume</span>
                </a>
                <a href="https://leetcode.com/u/jaashishram7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                  <Code size={20} />
                  <span>Leetcode</span>
                </a>
                 {/* Optional LeetCode/HackerRank Links */}
                 {/* <a href="YOUR_LEETCODE_LINK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                   <Code size={20} />
                   <span>LeetCode</span>
                 </a>
                 <a href="YOUR_HACKERRANK_LINK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                   <Terminal size={20} />
                   <span>HackerRank</span>
                 </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-24">
          {/* Removed About section rendering */}
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="certifications">
            <Certifications />
          </section>
          <section id="responsibility">
            <Responsibility />
          </section>
          <section id="contact"> {/* Added Contact section */}
            <Contact />
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;