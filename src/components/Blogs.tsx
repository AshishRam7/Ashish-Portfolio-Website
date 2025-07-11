import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Eye, Heart } from 'lucide-react';

const Blogs = () => {
  // Placeholder blog data - replace with actual blog posts
  const blogs = [
    {
      title: "Getting Started with AI and Machine Learning",
      excerpt: "A comprehensive guide to understanding the fundamentals of artificial intelligence and machine learning for beginners.",
      date: "2024-01-15",
      readTime: "5 min read",
      views: "1.2k",
      likes: "89",
      tags: ["AI", "Machine Learning", "Beginner"],
      link: "#",
      image: "/blog-placeholder-1.jpg"
    },
    {
      title: "Building Modern Web Applications with React",
      excerpt: "Explore the latest React features and best practices for creating scalable and performant web applications.",
      date: "2024-01-10",
      readTime: "8 min read",
      views: "2.1k",
      likes: "156",
      tags: ["React", "Web Development", "JavaScript"],
      link: "#",
      image: "/blog-placeholder-2.jpg"
    },
    {
      title: "The Future of Software Development",
      excerpt: "Insights into emerging trends and technologies that are shaping the future of software development.",
      date: "2024-01-05",
      readTime: "6 min read",
      views: "1.8k",
      likes: "124",
      tags: ["Technology", "Future", "Development"],
      link: "#",
      image: "/blog-placeholder-3.jpg"
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
        <h2 className="text-4xl font-bold mb-4 section-heading">Blog & Articles</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sharing insights, tutorials, and thoughts on technology, development, and innovation
        </p>
      </div>

      {/* Coming Soon Message */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-green/20 border border-primary-green/30 text-primary-green-light rounded-full">
          <BookOpen size={20} />
          <span className="font-medium">Blog posts coming soon!</span>
        </div>
      </div>

      {/* Preview of upcoming blog posts */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Image placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary-green/20 to-accent-green/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-primary-green-light transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Meta info */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Eye size={12} />
                    <span>{blog.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={12} />
                    <span>{blog.likes}</span>
                  </div>
                </div>
              </div>

              {/* Read more button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-green/20 border border-primary-green/30 text-primary-green-light rounded-lg hover:bg-primary-green/30 transition-all duration-300 text-sm font-medium group/btn opacity-50 cursor-not-allowed">
                <span>Coming Soon</span>
                <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.article>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-gray-400 mb-4">
          Stay tuned for upcoming articles on AI, web development, and technology trends!
        </p>
        <div className="flex justify-center">
          <div className="px-6 py-3 bg-gradient-to-r from-primary-green/10 to-accent-green/10 border border-primary-green/20 rounded-xl">
            <p className="text-primary-green-light font-medium">
              Follow me on social media for updates
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Blogs;