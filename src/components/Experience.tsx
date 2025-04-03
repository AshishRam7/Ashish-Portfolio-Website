import React from 'react';

const Experience = () => {
  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading">Experience</h2>
      <div className="border-l-2 border-[#39ff14]/30 pl-4 hover:border-[#39ff14]/60 transition-colors">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-[#39ff14]">R&D Intern</h3>
          <p className="text-gray-400">Hindustan Aeronautics Limited (HAL)</p>
          <p className="text-sm text-gray-400">Aug 2023 - Sept 2023 | Bengaluru, India</p>
        </div>
        <ul className="space-y-2 text-gray-300 mt-4">
          <li className="flex items-start">
            <span className="mr-2 text-[#39ff14]">•</span>
            <p>Implemented an efficient program for locating limits to extrapolate gain value in the Autopilot system</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#39ff14]">•</span>
            <p>Performed rigorous unit and integration tests on Matlab to test the code for MC/DC Code Coverage</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#39ff14]">•</span>
            <p>Implemented a console application for data parsing and analysis catering to 25+ parameters and conditions in the control systems model using Visual Studio C++</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;