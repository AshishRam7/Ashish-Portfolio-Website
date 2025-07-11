import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

// Contact Button with Hover Options Component
const ContactButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const contactOptions = [
    {
      icon: Linkedin,
      label: "LinkedIn Message",
      href: "https://www.linkedin.com/in/ashish-ram-j-a-/",
      color: "from-blue-600 to-blue-700",
      description: "Connect professionally"
    },
    {
      icon: Mail,
      label: "Email Me",
      href: "mailto:ashishram.ja15@gmail.com",
      color: "from-green-600 to-green-700",
      description: "Direct email"
    }
  ];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Original Button */}
      <div className={`${className} cursor-pointer transition-all duration-300 ${isHovered ? 'opacity-50' : ''}`}>
        {children}
      </div>

      {/* Hover Options */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
          >
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-2xl shadow-2xl overflow-hidden min-w-[280px]">
              <div className="p-2">
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={index}
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${option.color} group-hover:scale-110 transition-transform duration-300`}>
                      <option.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-green-light transition-colors duration-300">
                        {option.label}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{option.description}</p>
                    </div>
                    <Send size={16} className="text-gray-400 group-hover:text-primary-green-light group-hover:translate-x-1 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ashishram.ja15@gmail.com",
      href: "mailto:ashishram.ja15@gmail.com",
      description: "Best for professional inquiries",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ashish Ram J A",
      href: "https://www.linkedin.com/in/ashish-ram-j-a-/",
      description: "Let's connect professionally",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "AshishRam7",
      href: "https://github.com/AshishRam7",
      description: "Check out my code",
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <motion.section
      className="glass-card p-6 sm:p-8 lg:p-12 xl:p-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 section-heading">Let's Connect</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Methods */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block p-6 bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-white/5 dark:to-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-green-light transition-colors duration-300">
                      {method.label}
                    </h4>
                    <p className="text-primary-green-light font-medium">{method.value}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{method.description}</p>
                  </div>
                  <Send size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-primary-green-light group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quick Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <ContactButton className="btn-primary inline-flex items-center gap-3 px-6 py-3 font-semibold group">
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Quick Contact</span>
            </ContactButton>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            className="p-6 bg-gradient-to-br from-primary-green/10 to-accent-green/10 border border-primary-green/20 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-primary-green-light mb-4">Quick Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent-green" />
                <span className="text-gray-300">Chennai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-primary-green" />
                <span className="text-gray-300">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={16} className="text-neon-green" />
                <span className="text-gray-300">Usually responds within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center p-8 bg-gradient-to-br from-primary-green/10 to-accent-green/10 border border-primary-green/20 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-green to-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities,
              I'm excited to discuss how we can work together to bring your ideas to life.
            </p>
            <ContactButton className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold group">
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Start a Conversation</span>
            </ContactButton>
          </div>

          {/* Availability Status */}
          <div className="p-6 bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-white/5 dark:to-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse"></div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Current Status</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently open to <span className="text-primary-green-light font-medium">freelance projects</span>,
              <span className="text-accent-green font-medium"> internship opportunities</span>, and
              <span className="text-neon-green font-medium"> collaborative ventures</span> in AI/ML and web development.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;