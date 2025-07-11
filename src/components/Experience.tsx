import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "R&D Intern",
      company: "Hindustan Aeronautics Limited (HAL)",
      location: "Bengaluru, India",
      duration: "Aug 2023 - Sept 2023",
      type: "Internship",
      achievements: [
        "Implemented an efficient program for locating limits to extrapolate gain value in the Autopilot system",
        "Performed rigorous unit and integration tests on Matlab to test the code for MC/DC Code Coverage",
        "Implemented a console application for data parsing and analysis catering to 25+ parameters and conditions in the control systems model using Visual Studio C++"
      ]
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
        <h2 className="text-4xl font-bold mb-4 section-heading">Professional Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Building expertise through hands-on experience in cutting-edge technology
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-green via-accent-green to-primary-green-light"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-green to-accent-green rounded-full border-4 border-bg-secondary group-hover:scale-125 transition-transform duration-300 shadow-glow"></div>

              {/* Content card */}
              <div className="ml-20 bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-white/5 dark:to-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 group-hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-green-light transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-green/20 border border-primary-green/30 text-primary-green-light text-xs font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Building2 size={16} className="text-accent-green" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary-green" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent-green" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary-green-light mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="flex items-start gap-4 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-green to-accent-green rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;