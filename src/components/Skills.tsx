// FILE: src/components/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

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
    // Animate the whole section entry
    <motion.section
      className="content-card rounded-xl p-6"
      initial="hidden"
      whileInView="visible" // Trigger animation when the section scrolls into view
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
      variants={{
         hidden: { opacity: 0, y: 50 },
         visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
       }}
    >
      <h2 className="text-2xl font-bold mb-6 section-heading">Technical Skills</h2>
      {/* Animate the container for categories */}
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate immediately once the section is visible
      >
        {skillCategories.map((category, index) => (
          // Animate each category block
          <motion.div key={index} variants={categoryVariants}>
            <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">{category.title}</h3>
            <motion.div
                className="flex flex-wrap gap-2"
                // Use the same variants for the inner div if needed, or inherit
            >
              {category.skills.map((skill, skillIndex) => (
                // Animate each skill tag
                <motion.span
                  key={skillIndex}
                  className="px-3 py-1 bg-black/50 border border-[#39ff14]/20 text-gray-300 rounded-full text-sm cursor-default" // Added cursor-default
                  variants={skillVariants}
                  whileHover="hover" // Apply hover animation
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;