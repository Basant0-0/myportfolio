import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-dark-700"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className={`md:px-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 mb-2">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold mb-1 text-dark-800 dark:text-white">
                  {item.title}
                </h3>
                <h4 className="text-lg font-medium mb-3 text-primary-600 dark:text-primary-500">
                  {item.company}
                </h4>
                <p className="text-dark-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Icon for mobile */}
            <div className="absolute left-0 top-0 md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white">
              {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
            </div>
            
            {/* Icon for desktop */}
            <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white shadow-md">
              {item.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
            </div>
            
            {/* Empty div for layout in desktop */}
            <div className="md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;