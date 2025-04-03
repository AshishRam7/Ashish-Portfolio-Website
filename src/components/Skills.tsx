import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'C', 'R', 'Assembly (8086)']
    },
    {
      title: 'Frontend Web Development',
      skills: ['HTML', 'CSS', 'React', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend Development and Databases',
      skills: ['Flask', 'Django', 'Node.js', 'MySQL', 'SQLite', 'Qdrant', 'SQL']
    },
    {
      title: 'Technologies',
      skills: ['Deep Learning', 'RAG', 'Model Context Protocol', 'Google OAuth', 'Auth0', 'AGILE framework', 'Matlab', 'Linux', 'Excel', 'GIT', 'Docker', 'HTTP', 'IOT', 'Github Actions']
    },
    {
      title: 'Libraries',
      skills: ['Tensorflow', 'Pandas', 'Numpy', 'Axios']
    }
  ];

  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading">Technical Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3 text-[#39ff14]">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-black/50 border border-[#39ff14]/20 text-gray-300 rounded-full text-sm hover:border-[#39ff14]/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;