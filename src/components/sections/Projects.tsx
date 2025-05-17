import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'other', label: 'Other' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Thyroid Prediction Model',
      description: 'This project is a machine learning-based web app designed to predict thyroid conditions using user input data. It takes key health metrics as input and returns a classification based on trained models. The app is built with Django and uses Scikit-learn for model predictions. The interface is kept simple and user-friendly to make healthcare insights accessible to anyone.',
      image: "/myportfolio/thyroid.jpg",
      category: 'web',
      technologies: ['Python, Django, Scikit-learn, HTML, CSS, JavaScript'],
      demoLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      id: 2,
      title: 'Blood Pressure Prediction Model',
      description: 'This project is a machine learning-based web application designed to predict blood pressure risk based on user-provided health parameters. The app utilizes a trained model built with Scikit-learn to analyze inputs such as age, heart rate, and other relevant features. The frontend is developed using HTML, CSS, and JavaScript, while Django powers the backend. The goal is to offer a simple and accessible interface for users to get quick insights into their blood pressure risk.',
      image: "/myportfolio/blood.jpg",
      category: 'web',
      technologies: ['Python, Django, Scikit-learn, HTML, CSS, JavaScript'],
      demoLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    {
      id: 3,
      title: 'Stress Detection Model',
      description: 'This project is a machine learning-driven web application designed to detect stress levels based on user input. It analyzes factors such as heart rate, physical activity, and other relevant metrics to determine stress levels using a trained model built with Scikit-learn. The app is developed using Django for the backend and a lightweight HTML/CSS/JS frontend for easy usability. It’s aimed at helping users gain awareness of potential stress conditions in a fast and interactive way.',
      image: "/myportfolio/stress.jpg",
      category: 'web',
      technologies: ['Python, Django, Scikit-learn, HTML, CSS, JavaScript'],
      demoLink: 'https://example.com/project3',
      githubLink: 'https://github.com/yourusername/project3',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase skills and projects, built with React and Tailwind CSS.',
      image: "/myportfolio/portfolio.jpg",
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      demoLink: 'https://basant0-0.github.io/myportfolio/',
      githubLink: 'https://github.com/Basant0-0/myportfolio',
    },
    {
      id: 5,
      title: 'Machine Learning Model',
      description: 'A machine learning model for sentiment analysis on text data, deployed as a web service.',
      image: "/myportfolio/machine.jpg",
      category: 'other',
      technologies: ['Python', 'TensorFlow', 'Flask', 'AWS'],
      demoLink: 'https://example.com/project5',
      githubLink: 'https://github.com/yourusername/project5',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'A real-time chat application with features like private messaging, group chats, and file sharing.',
      image: "/myportfolio/chat.jpg",
      category: 'mobile',
      technologies: ['Socket.io', 'Express', 'MongoDB', 'React'],
      demoLink: 'https://example.com/project6',
      githubLink: 'https://github.com/yourusername/project6',
    },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-800 dark:text-white">
          My Projects
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-200 dark:bg-dark-700 rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;