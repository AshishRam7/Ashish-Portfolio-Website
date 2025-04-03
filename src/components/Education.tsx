import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      location: "Chennai, India",
      degree: "B.Tech in Computer Science Engineering",
      period: "2021-2025",
      grade: "CGPA: 8.75"
    },
    {
      institution: "AMM Matriculation Higher Secondary School",
      location: "Chennai, India",
      degree: "Class XII",
      period: "Grad. May 2021",
      grade: "Percentage: 90.3%"
    }
  ];

  return (
    <section className="content-card rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 section-heading">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-[#39ff14]/30 pl-4 hover:border-[#39ff14]/60 transition-colors">
            <h3 className="text-lg font-semibold text-[#39ff14]">{edu.institution}</h3>
            <p className="text-gray-400">{edu.location}</p>
            <p className="text-gray-300 mt-1">{edu.degree}</p>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>{edu.period}</span>
              <span className="text-[#39ff14]">{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;