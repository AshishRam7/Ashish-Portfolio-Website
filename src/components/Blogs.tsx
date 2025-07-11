import { motion } from 'framer-motion';
import { BookOpen, Clock } from 'lucide-react';

const Blogs = () => {

  return (
    <motion.section
      className="glass-card p-6 sm:p-8 lg:p-12 xl:p-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 section-heading">Blog & Articles</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sharing insights, tutorials, and thoughts on technology, development, and innovation
        </p>
      </div>

      {/* Coming Soon Message */}
      <div className="text-center py-16">
        <motion.div
          className="inline-flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 rounded-full bg-gradient-to-r from-primary-green/20 to-accent-green/20 border border-primary-green/30">
            <BookOpen size={48} className="text-primary-green-light" />
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Coming Soon!</h3>
            <p className="text-gray-400 text-lg max-w-md">
              I'm working on creating valuable content about AI, web development, and technology.
              Stay tuned for insightful articles and tutorials!
            </p>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-green/10 to-accent-green/10 border border-primary-green/20 rounded-full text-primary-green-light font-medium">
            <Clock size={16} />
            <span>Blog posts in development</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blogs;