import { useState } from 'react';
import { Code, Database, Figma, Globe, Server, Settings } from 'lucide-react';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'other', label: 'Other' },
  ];
  
  const skillCategories = {
    frontend: [
      { name: 'HTML5', level: 60, icon: <Globe size={24} /> },
      { name: 'CSS3', level: 40, icon: <Globe size={24} /> },
      { name: 'JavaScript', level: 40, icon: <Code size={24} /> },
      { name: 'React', level: 30, icon: <Code size={24} /> },
      { name: 'Tailwind CSS', level: 30, icon: <Globe size={24} /> },
    ],
   backend: [
      { name: 'Node.js', level: 40, icon: <Server size={24} /> },
      { name: 'Python', level: 70, icon: <Code size={24} /> },
      { name: 'MongoDB', level: 40, icon: <Database size={24} /> },
      { name: 'SQL', level: 70, icon: <Database size={24} /> },
    ],
    other: [
      { name: 'Git', level: 85, icon: <Settings size={24} /> },
      { name: 'Docker', level: 30, icon: <Settings size={24} /> },
      { name: 'Figma', level: 20, icon: <Figma size={24} /> },
      { name: 'AWS', level: 40, icon: <Server size={24} /> },
      { name: 'Vscode',level:70, icon:<Code size={24} /> },
    ],
  };
  
  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skillCategories.frontend,
        ...skillCategories.backend,
        ...skillCategories.other,
      ];
    }
    return skillCategories[activeTab as keyof typeof skillCategories];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-800 dark:text-white">
          My Skills
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-200 dark:bg-dark-700 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;