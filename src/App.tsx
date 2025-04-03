import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Award, Code2, Briefcase, GraduationCap, ScrollText, Medal } from 'lucide-react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Responsibility from './components/Responsibility';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', icon: <Code2 size={20} /> },
    { id: 'skills', label: 'Skills', icon: <ScrollText size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Award size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Medal size={20} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={20} /> },
    { id: 'responsibility', label: 'Responsibility', icon: <Award size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        setActiveSection={setActiveSection}
      />

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4 neon-text">
              Ashish Ram J A
            </h1>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="mailto:ashishram.ja15@gmail.com" className="text-[#39ff14]/70 hover:text-[#39ff14] transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/AshishRam7" target="_blank" rel="noopener noreferrer" className="text-[#39ff14]/70 hover:text-[#39ff14] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ashish-ram-j-a-/" target="_blank" rel="noopener noreferrer" className="text-[#39ff14]/70 hover:text-[#39ff14] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-[#39ff14]/70">+91-9566084569</p>
          </div>

          <div className="space-y-24">
            <section id="about">
              <About />
            </section>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;