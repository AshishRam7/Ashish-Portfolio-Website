// src/components/Certifications.tsx
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Computer Vision",
      provider: "Kaggle",
      link: "https://drive.google.com/file/d/1OiUs7p-h-hkKUeGjkjYMlwef_gm8gteF/view?usp=sharing"
    },
    {
      title: "Intro to Machine Learning",
      provider: "Kaggle",
      link: "https://www.kaggle.com/learn/certification/ashishramja/intro-to-machine-learning"
    },
    {
      title: "Product Management - Launching Your Product",
      provider: "LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/5fbc5843ff0bdc73285a6c3f78a39845fc66a8bde9a2d3b1d6cfccc7925d079c"
    },
    {
      title: "Technology for Product Managers",
      provider: "LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/56e6ced26ddc6fa6eeb5aea5035487e7e09db3aa17292aa4d173ddf9d68f93d3"
    }
  ];

  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading">Certifications</h2>
      <div className="grid gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-start space-x-3 p-4 bg-black/30 rounded-lg border border-[#39ff14]/10 hover:border-[#39ff14]/30 transition-colors">
            <Award size={24} className="text-[#39ff14] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-100">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.provider}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39ff14]/80 hover:text-[#39ff14] text-sm inline-block mt-1"
              >
                Verify →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;