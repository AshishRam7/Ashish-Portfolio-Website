import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FloatingThemeToggle = () => {
  const { theme, actualTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ] as const;

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Monitor;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative">
          <CurrentIcon size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-primary-green dark:group-hover:text-primary-green-light transition-colors duration-300" />
          {theme === 'system' && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-green rounded-full animate-pulse"></div>
          )}
        </div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-44 bg-white/98 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/80 dark:border-white/20 rounded-2xl shadow-xl overflow-hidden"
          >
            {themes.map((themeOption) => {
              const Icon = themeOption.icon;
              const isSelected = theme === themeOption.value;
              
              return (
                <motion.button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                    isSelected 
                      ? 'bg-primary-green/20 text-primary-green-light border-l-4 border-primary-green' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ x: isSelected ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={18} className={`transition-all duration-200 ${isSelected ? 'scale-110' : ''}`} />
                  <div className="flex-1">
                    <span className="text-sm font-medium">{themeOption.label}</span>
                    {themeOption.value === 'system' && (
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        ({actualTheme})
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="selectedTheme"
                      className="w-2 h-2 bg-primary-green rounded-full"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingThemeToggle;
