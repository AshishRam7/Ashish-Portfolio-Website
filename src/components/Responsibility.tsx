import { motion } from 'framer-motion';
import { Users, Crown, Target, Calendar, MapPin } from 'lucide-react';

const Responsibility = () => {
  const positions = [
    {
      title: "Creative Lead",
      organization: "Enactus VIT Chennai",
      duration: "2023 - Present",
      location: "Chennai, India",
      type: "Leadership",
      teamSize: "25+",
      achievements: [
        "Lead a team of 25+ designers, writers, and video editors as the Creative Head of Enactus VITC, leading the production of innovative social media content, packaging designs, product brochures, etc... for the club",
        "Headed the production of the annual technical and video reports for submission to the prestigious Enactus National Exposition 2023, where our team was placed among the top 16 teams nationwide"
      ],
      skills: ["Team Leadership", "Creative Direction", "Project Management", "Content Strategy"],
      impact: "Top 16 Nationwide",
      color: "from-purple-500 to-pink-500"
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
        <h2 className="text-4xl font-bold mb-4 section-heading">Leadership & Responsibility</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Positions of responsibility that showcase leadership skills and commitment to organizational excellence
        </p>
      </div>

      <div className="space-y-8">
        {positions.map((position, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${position.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Crown size={28} className="text-white" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-green-light transition-colors duration-300">
                      {position.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary-green/20 border border-primary-green/30 text-primary-green-light text-xs font-medium rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Users size={16} className="text-accent-green" />
                    <span className="font-medium">{position.organization}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:items-end gap-3">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">
                    <Calendar size={14} className="text-primary-green" />
                    <span>{position.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">
                    <MapPin size={14} className="text-accent-green" />
                    <span>{position.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-green-light">{position.teamSize}</div>
                    <div className="text-xs text-gray-400">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-green">{position.impact}</div>
                    <div className="text-xs text-gray-400">Achievement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary-green-light mb-4 flex items-center gap-2">
                  <Target size={20} />
                  Key Responsibilities & Achievements
                </h4>
                <div className="space-y-4">
                  {position.achievements.map((achievement, achievementIndex) => (
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

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold text-primary-green-light mb-4">Skills Developed</h4>
                <div className="flex flex-wrap gap-3">
                  {position.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Impact Summary */}
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
              25+
            </div>
            <div className="text-sm text-gray-400">Team Members Led</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-accent-green mb-2 group-hover:scale-110 transition-transform duration-300">
              Top 16
            </div>
            <div className="text-sm text-gray-400">National Ranking</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-neon-green mb-2 group-hover:scale-110 transition-transform duration-300">
              2+
            </div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary-green mb-2 group-hover:scale-110 transition-transform duration-300">
              1
            </div>
            <div className="text-sm text-gray-400">Leadership Role</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Responsibility;