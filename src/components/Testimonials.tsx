import { motion } from 'framer-motion';
import { MessageSquareQuote, Star, Users, Heart } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  rating: number;
  category: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Ashish is highly goal-oriented and possesses the drive and capability to achieve his objectives. His focus and dedication are qualities I deeply respect. I have consistently had a productive and positive experience working with him.",
      author: "Karneeshkar Velmurugan",
      title: "Electronics & Computer Engineer | IoT & Embedded Systems | AI/ML | Cloud Expert",
      rating: 5,
      category: "Professional"
    },
    {
      quote: "Ashish is such a nice person to have around. We both worked together for a hackathon, so from my perspective he is well organised, diligent and a fast learner, these skills from him really helped our team to secure a good rank in that hackathon, it was a pleasure to work with Ashish.",
      author: "Aadithya Niranjan",
      title: "SDE @Amazon | Technical department @ IEEE Computer Society - VITC | Member at DAO Community VIT-C",
      rating: 5,
      category: "Collaboration"
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
        <h2 className="text-4xl font-bold mb-4 section-heading">What Others Say</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real feedback and testimonials from colleagues, teammates, and collaborators
        </p>
      </div>

      {/* Real testimonials */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-green/30 transition-all duration-300 hover:shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Quote icon */}
            <div className="flex items-center justify-between mb-4">
              <MessageSquareQuote size={24} className="text-primary-green-light" />
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
              "{testimonial.quote}"
            </blockquote>

            {/* Author info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  {testimonial.title && (
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  )}
                </div>
                <span className="px-2 py-1 bg-accent-green/20 border border-accent-green/30 text-accent-green text-xs rounded-full">
                  {testimonial.category}
                </span>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </motion.div>
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
        <div className="p-6 bg-gradient-to-br from-primary-green/10 to-accent-green/10 border border-primary-green/20 rounded-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={24} className="text-red-400" />
            <h3 className="text-xl font-bold text-white">Want to add your testimonial?</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Have we worked together? I'd love to feature your feedback! Your testimonial helps showcase our collaboration and my work approach.
          </p>
          <a
            href="mailto:ashishram.ja15@gmail.com?subject=Testimonial%20for%20Portfolio"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-semibold group"
          >
            <Users size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>Share Your Experience</span>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;