import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AI Agents",
      provider: "Hugging Face",
      category: "AI/ML",
      date: "2025",
      skills: ["AI Agents", "Hugging Face", "Natural Language Processing", "Machine Learning"],
      link: "https://tinyurl.com/hf-certificate-ashish",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Building RAG Agents with LLMs",
      provider: "Nvidia",
      category: "AI/ML",
      date: "2025",
      skills: ["RAG", "Large Language Models", "AI Agents", "Deep Learning"],
      link: "https://learn.nvidia.com/certificates?id=jo_IXfFfQ5yvoY-FASiZ5Q",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Evaluation and Light Customization of Large Language Models",
      provider: "Nvidia",
      category: "AI/ML",
      date: "2025",
      skills: ["LLM Evaluation", "Model Customization", "Fine-tuning", "AI Assessment"],
      link: "https://learn.nvidia.com/certificates?id=Tq77kDE9Q4-fwOGB5HkHvg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Computer Vision",
      provider: "Kaggle",
      category: "AI/ML",
      date: "2023",
      skills: ["Computer Vision", "Deep Learning", "Image Processing", "Neural Networks"],
      link: "https://drive.google.com/file/d/1OiUs7p-h-hkKUeGjkjYMlwef_gm8gteF/view?usp=sharing",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intro to Machine Learning",
      provider: "Kaggle",
      category: "AI/ML",
      date: "2023",
      skills: ["Machine Learning", "Data Science", "Python", "Algorithms"],
      link: "https://www.kaggle.com/learn/certification/ashishramja/intro-to-machine-learning",
      color: "from-indigo-500 to-purple-500"
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
        <h2 className="text-4xl font-bold mb-4 section-heading">Certifications & Credentials</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional certifications demonstrating expertise in cutting-edge technologies and methodologies
        </p>
      </div>

      {/* Specialization badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-green/20 to-accent-green/20 border border-primary-green/30 text-primary-green-light rounded-full">
          <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
          <span className="font-semibold">Specialized in AI/ML & Deep Learning</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Award size={24} className="text-white" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-green-light transition-colors duration-300 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 font-medium">{cert.provider}</p>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-primary-green-light">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-accent-green/20 border border-accent-green/30 text-accent-green text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-green/20 border border-primary-green/30 text-primary-green-light rounded-lg hover:bg-primary-green/30 transition-all duration-300 text-sm font-medium group/link"
              >
                <CheckCircle size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                <span>Verify Certificate</span>
                <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        className="mt-12 pt-8 border-t border-white/10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group">
            <div className="text-3xl font-bold text-primary-green-light mb-2 group-hover:scale-110 transition-transform duration-300">
              {certifications.length}
            </div>
            <div className="text-sm text-gray-400">Certifications</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-accent-green mb-2 group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <div className="text-sm text-gray-400">Top Providers</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-neon-green mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-sm text-gray-400">AI/ML Focus</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary-green mb-2 group-hover:scale-110 transition-transform duration-300">
              2025
            </div>
            <div className="text-sm text-gray-400">Latest Year</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Certifications;