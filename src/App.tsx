// src/App.tsx
import React, { useState, useEffect } from 'react';
// Added BookOpen, MessageSquareQuote icons
import { Menu, X, Github, Users, Linkedin, Mail, Award, Code2, Briefcase, GraduationCap, ScrollText, Medal, Home, Contact as ContactIcon, FileText, Code, Terminal, Phone, BookOpen, MessageSquareQuote } from 'lucide-react';
import Sidebar from './components/Sidebar';
// Removed About import
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Responsibility from './components/Responsibility';
import Blogs from './components/Blogs'; // Added Blogs import
import Testimonials from './components/Testimonials'; // Added Testimonials import
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Default to hero

  // Updated sections array with Blogs and Testimonials
  const sections = [
    { id: 'hero', label: 'Home', icon: <Home size={20} /> },
    { id: 'skills', label: 'Skills', icon: <ScrollText size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code2 size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Medal size={20} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={20} /> },
    { id: 'responsibility', label: 'POR', icon: <Users size={20} /> },
    { id: 'blogs', label: 'Blogs', icon: <BookOpen size={20} /> }, // Added Blogs section
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquareQuote size={20} /> }, // Added Testimonials section
    { id: 'contact', label: 'Contact', icon: <ContactIcon size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.3; // Adjust offset as needed
      let current = 'hero';

      // Query all section elements at once for potential performance improvement
      const sectionElements = sections.map(section => document.getElementById(section.id)).filter(el => el !== null) as HTMLElement[];

      for (const element of sectionElements) {
        const sectionId = element.id;
        const rect = element.getBoundingClientRect();

        // Prioritize sections fully or significantly in view near the offset line
        if (rect.top <= offset && rect.bottom >= offset) {
          current = sectionId;
          break; // Found the primary section in view
        }

        // Fallback for very tall sections filling the viewport below the offset
        if (rect.top < offset && rect.bottom >= window.innerHeight) {
            current = sectionId;
            // Don't break immediately, maybe a smaller section is perfectly centered
        }

        // Handle scrolling past sections (assign the last section passed)
        // This helps if there's space between sections
         if (rect.bottom < offset && rect.bottom > -element.offsetHeight) { // Check it hasn't scrolled completely out of view upwards
             current = sectionId;
         }
      }

       // Special check for reaching the bottom of the page
       const scrollBuffer = 100; // Increase buffer for reliability
       if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - scrollBuffer)) {
           const lastSectionId = sections[sections.length - 1]?.id;
           if (lastSectionId) {
               current = lastSectionId;
           }
       }

      setActiveSection(current);
    };


    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]); // Dependency array includes sections

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-black/80 border border-[#39ff14]/20 p-2 rounded-lg"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close menu" : "Open menu"} // Accessibility
        aria-expanded={isOpen} // Accessibility
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
            // IMPORTANT: Make sure 'profile-photo.jpg' is in your public/ folder
            src="/profile-photo.jpg"
            alt="Ashish Ram J A - Profile Photo"
            className="w-48 h-48 lg:w-60 lg:h-60 rounded-full border-2 border-[#39ff14]/30 object-cover shadow-lg shadow-[#39ff14]/10 flex-shrink-0"
          />

            {/* Hero Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 neon-text">
                Ashish Ram J A
              </h1>
              <p className="text-lg sm:text-xl text-[#39ff14]/90 mb-6">
                Software Developer | Innovator | Tech Enthusiast
              </p>
              {/* About Me Text */}
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
                 {/* Optional Coding Platform Links */}
                 {/* <a href="YOUR_HACKERRANK_LINK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#39ff14]/80 hover:text-[#39ff14] transition-colors">
                   <Terminal size={20} />
                   <span>HackerRank</span>
                 </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections Container */}
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-24">
          {/* Render sections based on the order in the 'sections' array (excluding 'hero') */}
          {sections.slice(1).map(section => (
            <section key={section.id} id={section.id}>
              {section.id === 'skills' && <Skills />}
              {section.id === 'projects' && <Projects />}
              {section.id === 'education' && <Education />}
              {section.id === 'experience' && <Experience />}
              {section.id === 'achievements' && <Achievements />}
              {section.id === 'certifications' && <Certifications />}
              {section.id === 'responsibility' && <Responsibility />}
              {section.id === 'blogs' && <Blogs />} {/* Render Blogs */}
              {section.id === 'testimonials' && <Testimonials />} {/* Render Testimonials */}
              {section.id === 'contact' && <Contact />}
              {/* Add more conditions here if new sections are added without explicit components */}
            </section>
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;