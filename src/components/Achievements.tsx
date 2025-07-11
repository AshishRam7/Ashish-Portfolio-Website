import { motion } from 'framer-motion';
import { Trophy, Code, Award, Target, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      text: "Qualified as one of the Top 10 finalist teams in the National Level Startup-thon organized by UptoSkills",
      icon: Trophy,
      category: "Competition",
      status: "Ongoing",
      color: "from-yellow-500 to-orange-500"
    },
    {
      text: "Secured 4th Position among 540+ competing teams in VITISH 2024 - SIH internal hackathon",
      icon: Award,
      category: "Hackathon",
      rank: "4th",
      color: "from-blue-500 to-purple-500"
    },
    {
      text: "Secured Top 15 in Hackhub 2022 hackathon among 600+ participants",
      icon: Target,
      category: "Hackathon",
      rank: "Top 15",
      color: "from-green-500 to-teal-500"
    },
    {
      text: "Secured Top 30 in VITISH 2023 - SIH internal hackathon among 287+ teams",
      icon: Medal,
      category: "Hackathon",
      rank: "Top 30",
      color: "from-purple-500 to-pink-500"
    },
    {
      text: "Solved 500+ Data Structures and Algorithm questions on platforms like Leetcode and GeeksforGeeks",
      icon: Code,
      category: "Programming",
      achievement: "500+ Problems",
      color: "from-primary-green to-accent-green"
    },
    {
      text: "Selected among the top 2 percent of the batch for stream migration based on rigorous academic grounds",
      icon: Star,
      category: "Academic",
      rank: "Top 2%",
      color: "from-indigo-500 to-blue-500"
    },
    {
      text: "Zonal Level medalist in 800m and 1500m (athletics at high school level)",
      icon: Medal,
      category: "Sports",
      achievement: "Zonal Medalist",
      color: "from-amber-500 to-yellow-500"
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
        <h2 className="text-4xl font-bold mb-4 section-heading">Achievements & Recognition</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Milestones and accomplishments that showcase dedication and excellence across various domains
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Category badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-primary-green/20 border border-primary-green/30 text-primary-green-light text-xs font-medium rounded-full">
                {achievement.category}
              </span>
              {(achievement.rank || achievement.achievement || achievement.status) && (
                <span className="px-3 py-1 bg-accent-green/20 border border-accent-green/30 text-accent-green text-xs font-medium rounded-full">
                  {achievement.rank || achievement.achievement || achievement.status}
                </span>
              )}
            </div>

            {/* Icon and content */}
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <achievement.icon size={24} className="text-white" />
              </div>

              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {achievement.text}
                </p>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
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
              7+
            </div>
            <div className="text-sm text-gray-400">Major Achievements</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-accent-green mb-2 group-hover:scale-110 transition-transform duration-300">
              4
            </div>
            <div className="text-sm text-gray-400">Hackathon Wins</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-neon-green mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-sm text-gray-400">Problems Solved</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary-green mb-2 group-hover:scale-110 transition-transform duration-300">
              Top 2%
            </div>
            <div className="text-sm text-gray-400">Academic Rank</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Achievements;