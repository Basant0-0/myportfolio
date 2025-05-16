import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-700 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              Basant Kumar Sah
            </h3>
            <p className="text-dark-500 dark:text-gray-400 max-w-md">
              Turning ideas into seamless digital experiences.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Basant0-0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 dark:bg-dark-600 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/basantkumarsah/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 dark:bg-dark-600 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sahbasantkumar86@gmail.com" 
              className="p-2 bg-gray-200 dark:bg-dark-600 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://wa.me/9812150010"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 dark:bg-dark-600 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-600 pt-6">
          <p className="text-center text-dark-500 dark:text-gray-400 text-sm">
            © {currentYear} Basant Kumar Sah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;