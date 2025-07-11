import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/AshishRam7", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashish-ram-j-a-/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ashishram.ja15@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-primary to-transparent"></div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Brand section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-green to-accent-green rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ashish Ram J A</h3>
                  <p className="text-sm text-gray-400">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Passionate about creating innovative solutions through code.
                Always learning, always building.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {['Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-green-light transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-green/30 hover:bg-primary-green/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-primary-green-light transition-colors duration-300" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Let's build something amazing together!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span>© {currentYear} Ashish Ram J A. Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>and</span>
                <Code size={16} className="text-primary-green" />
                <span>and lots of</span>
                <Coffee size={16} className="text-amber-500" />
              </motion.div>

              {/* Back to top button */}
              <motion.button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-primary-green/30 hover:bg-primary-green/10 transition-all duration-300 text-sm text-gray-400 hover:text-primary-green-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <span>Back to top</span>
                <ArrowUp size={16} className="group-hover:scale-110 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;