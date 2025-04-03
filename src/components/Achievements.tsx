import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    "Qualified as one of the Top 10 finalist teams in the National Level Startup-thon organized by UptoSkills (ongoing)",
    "Secured 4th Position among 540+ competing teams in VITISH 2024 - SIH internal hackathon",
    "Secured Top 15 in Hackhub 2022 hackathon among 600+ participants",
    "Secured Top 30 in VITISH 2023 - SIH internal hackathon among 287+ teams",
    "Solved 500+ Data Structures and Algorithm questions on coding platforms such as Leetcode, HackerRank, and GeeksforGeeks",
    "Selected among the top 2 percent of the batch for stream migration based on rigorous academic grounds",
    "Zonal Level medalist in 800m and 1500m (athletics at high school level)"
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Trophy size={20} className="text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700">{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;