import React from 'react';

const experiences = [
  {
    role: "UX/UI Designer & Research Lead",
    company: "Freelance",
    period: "2022 - Present",
    description: "Led user research initiatives and designed intuitive interfaces for various clients, focusing on user-centered design principles and innovative solutions.",
    achievements: [
      "Increased user engagement by 40% through redesigned interfaces",
      "Successfully delivered 5+ major design projects",
      "Conducted comprehensive user research studies"
    ]
  },
  {
    role: "SEO Intern",
    company: "Medpark Hospital",
    period: "2021",
    description: "Optimized digital content and implemented SEO strategies to improve hospital's online presence and patient engagement.",
    achievements: [
      "Improved organic search rankings by 30%",
      "Developed content strategy guidelines",
      "Analyzed and reported on key SEO metrics"
    ]
  },
  {
    role: "Marketing & Business Strategy Projects",
    company: "Various Organizations",
    period: "2020 - 2021",
    description: "Collaborated on multiple projects focusing on market research, business strategy development, and digital marketing initiatives.",
    achievements: [
      "Developed comprehensive market analysis reports",
      "Created strategic business recommendations",
      "Implemented successful marketing campaigns"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-black pl-6 relative">
              <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-0"></div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company} | {exp.period}</p>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <div className="h-2 w-2 bg-black rounded-full mt-2 mr-3"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;