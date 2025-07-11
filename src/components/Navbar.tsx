import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  sections: Array<{
    id: string;
    label: string;
    icon: React.ReactNode;
  }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ sections, activeSection, setActiveSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
        <motion.nav
          className="transition-all duration-300"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div className={`px-6 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-black/20 dark:bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-white/20'
            : 'bg-black/10 dark:bg-white/5 backdrop-blur-lg shadow-xl border border-white/10 dark:border-white/10'
        }`}>
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative p-3 rounded-xl transition-all duration-300 group ${
                    activeSection === section.id
                      ? 'text-primary-green-light bg-white/20 dark:bg-white/20 shadow-lg'
                      : 'text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  title={section.label}
                >
                  <span className="text-lg">{section.icon}</span>

                  {activeSection === section.id && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-green rounded-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-24 left-4 right-4 bg-black/20 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/20 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-6 space-y-3">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? 'text-primary-green-light bg-white/20 dark:bg-white/20 border-l-4 border-primary-green shadow-lg'
                        : 'text-white/80 dark:text-white/80 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">{section.icon}</span>
                    <span className="font-medium">{section.label}</span>
                  </motion.button>
                ))}

                {/* Mobile Action Buttons */}
                <div className="pt-4 border-t border-white/20 dark:border-white/20">
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="https://github.com/ashishramjattan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/ashish-ram-j-a-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="mailto:ashishramjattan@gmail.com"
                      className="p-3 rounded-xl text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
