import React, { useState, useEffect } from 'react';
import { Github, Users, Linkedin, Mail, Award, Code2, Briefcase, GraduationCap, ScrollText, Medal, Home, Contact as ContactIcon, FileText, Code, Terminal, Phone, BookOpen, MessageSquareQuote } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import AuroraEffect from './components/AuroraEffect';
import SnowAnimation from './components/SnowAnimation';
import ParticleSystem from './components/ParticleSystem';
import FloatingThemeToggle from './components/FloatingThemeToggle';
import Navbar from './components/Navbar';
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

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main content */}
      <main className="min-h-screen pt-6">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-green/20 to-accent-green/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-green-light/15 to-neon-green/15 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            {/* Profile Image with Modern Design */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-green to-accent-green rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src="/profile-photo.jpg"
                  alt="Ashish Ram J A - Profile Photo"
                  className="w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white/10 shadow-2xl backdrop-blur-sm relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-green to-accent-green rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-accent-green to-neon-green rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Hero Text Content */}
            <div className="text-center lg:text-left flex-1 space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-green/10 border border-primary-green/20 rounded-full text-sm font-medium text-primary-green-light backdrop-blur-sm">
                <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
                Available for opportunities
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block neon-text bg-gradient-to-r from-primary-green via-accent-green to-primary-green-light bg-clip-text text-transparent animate-gradient-x">
                    Ashish Ram J A
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed">
                  <span className="text-accent">Software Developer</span> •
                  <span className="text-primary-green-light"> Innovator</span> •
                  <span className="text-neon-green"> Tech Enthusiast</span>
                </p>

                {/* About Me Text */}
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl font-light">
                  Computer Science Engineering student at <span className="text-primary-green-light font-medium">VIT Chennai</span> with expertise in
                  <span className="text-accent font-medium"> web development</span>,
                  <span className="text-primary-green-light font-medium"> artificial intelligence</span>, and
                  <span className="text-neon-green font-medium"> blockchain technology</span>.
                  Passionate about <span className="text-accent font-medium">Generative AI</span> and
                  <span className="text-primary-green-light font-medium"> Deep Learning</span> research.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <a
                  href="mailto:ashishram.ja15@gmail.com"
                  className="btn-primary flex items-center gap-3 px-8 py-4 text-base font-semibold group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Get In Touch</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1hnbstXoVCCy2EVNfW1qQCyEWiiY_0EwX/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-3 px-8 py-4 text-base font-semibold group"
                >
                  <FileText size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>View Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6">
                <a
                  href="https://github.com/AshishRam7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-green/30 hover:bg-primary-green/10 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} className="text-gray-400 group-hover:text-primary-green-light transition-colors duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-ram-j-a-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-green/30 hover:bg-primary-green/10 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} className="text-gray-400 group-hover:text-primary-green-light transition-colors duration-300" />
                </a>
                <a
                  href="https://leetcode.com/u/jaashishram7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-green/30 hover:bg-primary-green/10 transition-all duration-300"
                  aria-label="LeetCode Profile"
                >
                  <Code size={24} className="text-gray-400 group-hover:text-primary-green-light transition-colors duration-300" />
                </a>
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

      {/* Background Animations */}
      <AuroraEffect />
      <SnowAnimation />
      <ParticleSystem />

      {/* Floating Theme Toggle */}
      <FloatingThemeToggle />
    </div>
    </ThemeProvider>
  );
}

export default App;