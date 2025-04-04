// src/components/Responsibility.tsx
import React from 'react';
import { Users } from 'lucide-react';

const Responsibility = () => {
  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading">Position of Responsibility</h2>
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Users size={24} className="text-[#39ff14]" />
            <h3 className="text-xl font-semibold text-gray-100">Enactus VIT Chennai - Creative Lead</h3>
          </div>
          <ul className="space-y-3 text-gray-300 list-inside">
            <li className="flex items-start">
              <span className="mr-2 text-[#39ff14] mt-1">•</span>
              <p>Lead a team of 25+ designers, writers, and video editors as the Creative Head of Enactus VITC, leading the production of innovative social media content, packaging designs, product brochures, etc... for the club</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#39ff14] mt-1">•</span>
              <p>Headed the production of the annual technical and video reports for submission to the prestigious Enactus National Exposition 2023, where our team was placed among the top 16 teams nationwide</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Responsibility;