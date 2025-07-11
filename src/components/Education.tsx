import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      location: "Chennai, India",
      degree: "B.Tech in Computer Science Engineering",
      period: "2021-2025",
      grade: "CGPA: 8.75",
      status: "Pursuing",
      type: "Undergraduate",
      highlights: [
        "Specialized in AI/ML and Software Development",
        "Active member of technical clubs and societies",
        "Consistent academic performance with 8.75+ CGPA"
      ]
    },
    {
      institution: "AMM Matriculation Higher Secondary School",
      location: "Chennai, India",
      degree: "Class XII - Science Stream",
      period: "Grad. May 2021",
      grade: "Percentage: 90.3%",
      status: "Completed",
      type: "Higher Secondary",
      highlights: [
        "Mathematics, Physics, Chemistry, Computer Science",
        "Top 10% of graduating class",
        "Strong foundation in STEM subjects"
      ]
    }
  ];

  return (
    <motion.section
      className="glass-card p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 section-heading">Education</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Academic journey building strong foundations in computer science and technology
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-green via-accent-green to-primary-green-light"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
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
              <div className="ml-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <GraduationCap size={24} className="text-primary-green-light" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-green-light transition-colors duration-300">
                        {edu.institution}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg font-medium text-gray-200">{edu.degree}</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} className="text-accent-green" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        edu.status === 'Pursuing'
                          ? 'bg-primary-green/20 border border-primary-green/30 text-primary-green-light'
                          : 'bg-accent-green/20 border border-accent-green/30 text-accent-green'
                      }`}>
                        {edu.status}
                      </span>
                      <span className="px-3 py-1 bg-white/10 border border-white/20 text-gray-300 text-xs font-medium rounded-full">
                        {edu.type}
                      </span>
                    </div>

                    <div className="flex flex-col lg:items-end gap-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} className="text-primary-green" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-accent-green" />
                        <span className="text-primary-green-light font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary-green-light">Key Highlights</h4>
                  <div className="space-y-3">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        className="flex items-start gap-4 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (highlightIndex * 0.1) }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-green to-accent-green rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                          {highlight}
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

export default Education;