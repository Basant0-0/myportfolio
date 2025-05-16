import { ReactNode } from 'react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: ReactNode;
}

const SkillCard = ({ name, level, icon }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-dark-800 dark:text-white">
          {name}
        </h3>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
        <div 
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <p className="text-right text-sm text-dark-500 dark:text-gray-400">
        {level}%
      </p>
    </div>
  );
};

export default SkillCard;