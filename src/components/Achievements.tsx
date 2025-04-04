// src/components/Achievements.tsx
import React from 'react';
import { Trophy, Code} from 'lucide-react'; // Added Code, Terminal

const Achievements = () => {
  const achievements = [
    { text: "Qualified as one of the Top 10 finalist teams in the National Level Startup-thon organized by UptoSkills (ongoing)", icon: <Trophy size={20} className="text-[#39ff14] flex-shrink-0 mt-1" /> },
    { text: "Secured 4th Position among 540+ competing teams in VITISH 2024 - SIH internal hackathon", icon: <Trophy size={20} className="text-[#39ff14] flex-shrink-0 mt-1" /> },
    { text: "Secured Top 15 in Hackhub 2022 hackathon among 600+ participants", icon: <Trophy size={20} className="text-[#39ff14] flex-shrink-0 mt-1" /> },
    { text: "Secured Top 30 in VITISH 2023 - SIH internal hackathon among 287+ teams", icon: <Trophy size={20} className="text-[#39ff14] flex-shrink-0 mt-1" /> },
    { text: "Solved 500+ Data Structures and Algorithm questions on platforms like Leetcode and GeeksforGeeks", icon: <Code size={20} className="text-[#39ff14] flex-shrink-0 mt-1" /> }, // Updated icon and text
    { text: "Selected among the top 2 percent of the batch for stream migration based on rigorous academic grounds", icon: <Trophy size={20} className="text-[#39ff14] flex-shrink-0 mt-1" /> },
    { text: "Zonal Level medalist in 800m and 1500m (athletics at high school level)", icon: <Trophy size={20} className="text-[#39ff14] flex-shrink-0 mt-1" /> }
  ];

  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-3">
            {achievement.icon}
            <p className="text-gray-300">{achievement.text}</p>
          </div>
        ))}
        {/* Optional: Add direct links if you want */}
        {/* <div className="flex items-center space-x-3 mt-4">
          <Code size={20} className="text-[#39ff14] flex-shrink-0" />
          <a href="YOUR_LEETCODE_LINK" target="_blank" rel="noopener noreferrer" className="text-[#39ff14]/80 hover:text-[#39ff14]">LeetCode Profile</a>
        </div>
        <div className="flex items-center space-x-3">
          <Terminal size={20} className="text-[#39ff14] flex-shrink-0" />
          <a href="YOUR_HACKERRANK_LINK" target="_blank" rel="noopener noreferrer" className="text-[#39ff14]/80 hover:text-[#39ff14]">HackerRank Profile</a>
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;