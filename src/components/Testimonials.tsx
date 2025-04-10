// src/components/Testimonials.tsx
import React from 'react';
import { MessageSquareQuote } from 'lucide-react'; // Using Quote icon

interface Testimonial {
  quote: string;
  author: string;
  title?: string; // Optional title/company
  // image?: string; // Optional author image URL
}

const Testimonials: React.FC = () => {
  // --- Replace with your actual testimonials ---
  const testimonials: Testimonial[] = [
    {
      quote: "Working with Ashish was a fantastic experience. Their technical skills and problem-solving abilities are top-notch, and they consistently delivered high-quality work ahead of schedule.",
      author: "Collaborator Name",
      title: "Project Manager at XYZ Corp",
    },
    {
      quote: "Ashish has a deep understanding of web development and AI concepts. Their passion for technology is evident, and they were always eager to learn and contribute innovative ideas.",
      author: "Professor Name",
      title: "Vellore Institute of Technology",
    },
    {
        quote: "Highly recommend Ashish! They are dedicated, reliable, and brought a creative approach to our project challenges. A true asset to any team.",
        author: "Client/Peer Name",
        // title: "Optional Title"
    },
    // Add more testimonials here
  ];
  // --- End of placeholder data ---

  // Optional: Message if no testimonials yet
   if (testimonials.length === 0) {
     return (
       <section className="content-card rounded-xl p-6">
         <h2 className="text-2xl font-bold mb-6 section-heading flex items-center gap-2">
           <MessageSquareQuote size={24} />
           Testimonials
         </h2>
         <p className="text-gray-400 italic">No testimonials available yet. Check back later!</p>
       </section>
     );
   }


  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading flex items-center gap-2">
        <MessageSquareQuote size={24} />
        What Others Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black/40 border border-[#39ff14]/15 rounded-lg p-5 flex flex-col transition-all duration-300 hover:border-[#39ff14]/30 hover:shadow-lg hover:shadow-[#39ff14]/10"
          >
             {/* Optional: Add quote icon inside the card */}
             {/* <Quote className="w-8 h-8 text-[#39ff14]/30 mb-3" /> */}
            <blockquote className="text-gray-300 italic mb-4 flex-grow">
             " {testimonial.quote} "
            </blockquote>
            <footer className="mt-auto pt-3 border-t border-[#39ff14]/10">
              <p className="font-semibold text-[#39ff14]/90">{testimonial.author}</p>
              {testimonial.title && (
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              )}
              {/* {testimonial.image && (
                <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full mt-2" />
              )} */}
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;