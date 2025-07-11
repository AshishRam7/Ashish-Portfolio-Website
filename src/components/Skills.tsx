// FILE: src/components/Skills.tsx
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'C', 'R', 'Assembly (8086)']
    },
    {
      title: 'Frontend Web Development',
      skills: ['HTML', 'CSS', 'React', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend Development and Databases',
      skills: ['Flask', 'Django', 'Node.js', 'MySQL', 'SQLite', 'Qdrant', 'SQL']
    },
    {
      title: 'Technologies',
      skills: ['Deep Learning', 'RAG', 'Model Context Protocol', 'Google OAuth', 'Auth0', 'AGILE framework', 'Matlab', 'Linux', 'Excel', 'GIT', 'Docker', 'HTTP', 'IOT', 'Github Actions']
    },
    {
      title: 'Libraries',
      skills: ['Tensorflow', 'Pandas', 'Numpy', 'Axios']
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Start animating children after a small delay
        staggerChildren: 0.1 // Add a small delay between each child animation
      }
    }
  };

  const categoryVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: {
       opacity: 1,
       y: 0,
       transition: {
         type: "spring",
         stiffness: 100,
         damping: 10,
         staggerChildren: 0.05 // Stagger skills within a category
       }
     }
   };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
     hover: { // Add a hover effect
       scale: 1.1,
       boxShadow: "0px 0px 8px rgba(57, 255, 20, 0.3)", // Neon green shadow
       transition: { duration: 0.2 }
     }
  };

  return (
    <motion.section
      className="glass-card p-6 sm:p-8 lg:p-12 xl:p-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
         hidden: { opacity: 0, y: 50 },
         visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
       }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 section-heading">Technical Skills</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
        </p>
      </div>

      <motion.div
        className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <div className="space-y-8">
          {skillCategories.slice(0, Math.ceil(skillCategories.length / 2)).map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-green to-accent-green rounded-full"></div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-green-light transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              <motion.div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag group/skill cursor-default"
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    <span className="relative z-10">{skill}</span>
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-accent-green/20 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {skillCategories.slice(Math.ceil(skillCategories.length / 2)).map((category, index) => (
            <motion.div
              key={index + Math.ceil(skillCategories.length / 2)}
              variants={categoryVariants}
              className="group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-green to-accent-green rounded-full"></div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-green-light transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              <motion.div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag group/skill cursor-default"
                    variants={skillVariants}
                    whileHover="hover"
                  >
                    <span className="relative z-10">{skill}</span>
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-green/20 to-accent-green/20 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Summary Stats */}
      <motion.div
        className="mt-12 pt-8 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary-green-light mb-2 group-hover:scale-110 transition-transform duration-300">
              {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
            </div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-accent-green mb-2 group-hover:scale-110 transition-transform duration-300">
              {skillCategories.length}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-neon-green mb-2 group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="text-sm text-gray-400">Years of Building</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary-green mb-2 group-hover:scale-110 transition-transform duration-300">
              ∞
            </div>
            <div className="text-sm text-gray-400">Learning</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;