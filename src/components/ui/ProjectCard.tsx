import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1 transition-transform">
      <div className="relative overflow-hidden group h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-dark-600 dark:text-gray-300 mb-4 text-sm flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-6 pt-2 flex gap-2">
        <a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white text-center rounded-lg transition-colors text-sm"
        >
          Live Demo
        </a>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-dark-700 dark:hover:bg-dark-600 text-dark-700 dark:text-gray-300 text-center rounded-lg transition-colors text-sm"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;