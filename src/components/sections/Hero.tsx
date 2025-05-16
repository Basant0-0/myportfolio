import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Developer';
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
    
    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, [index]);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-700 pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-dark-800 dark:text-white">
          Basant Kumar Sah
        </h1>
        
        <div className="h-8 md:h-12 mb-6 flex justify-center">
          <p className="text-xl md:text-3xl relative">
            <span className="text-primary-600 dark:text-primary-400">{typedText}</span>
            <span className={`absolute text-primary-600 dark:text-primary-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-dark-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Turning ideas into seamless digital experiences.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="https://github.com/Basant0-0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-dark-700 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <Github className="text-dark-800 dark:text-white" size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/basantkumarsah/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-dark-700 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-dark-800 dark:text-white" size={24} />
          </a>
          <a 
            href="mailto:sahbasantkumar86@gmail.com" 
            className="p-3 bg-white dark:bg-dark-700 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
            aria-label="Email"
          >
            <Mail className="text-dark-800 dark:text-white" size={24} />
          </a>
          <a 
            href="https://wa.me/9812150010" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-dark-700 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
            aria-label="WhatsApp"
          >
            <Phone className="text-dark-800 dark:text-white" size={24} />
          </a>
        </div>
        
        <a 
          href="#about" 
          className="inline-block animate-bounce-slow text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;