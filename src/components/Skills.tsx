import React from 'react';

const skillCategories = [
  {
    title: "UX/UI Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "Prototyping", level: 88 },
      { name: "User Research", level: 85 }
    ]
  },
  {
    title: "Graphic Design",
    skills: [
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "Blender", level: 70 },
      { name: "Canva", level: 95 }
    ]
  },
  {
    title: "Digital Marketing",
    skills: [
      { name: "SEO", level: 85 },
      { name: "Analytics", level: 80 },
      { name: "Content Strategy", level: 88 },
      { name: "Social Media", level: 90 }
    ]
  },
  {
    title: "Business & Research",
    skills: [
      { name: "Market Research", level: 85 },
      { name: "Data Analysis", level: 80 },
      { name: "Strategy", level: 88 },
      { name: "Project Management", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Tools</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-black rounded-full h-2 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;