import React from 'react';

const About = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This should match the name of your CV file
    link.download = 'BasantKumarSah_Resume.pdf'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-800 dark:text-white">
          About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-full h-full max-w-md mx-auto aspect-square rounded-lg bg-primary-200 dark:bg-primary-900/30 overflow-hidden">
                <img 
                  src='/profile.jpg' 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-secondary-500 dark:border-secondary-600 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-dark-800 dark:text-white">
              Hello, I'm <span className="text-primary-600 dark:text-primary-400">Basant Kumar Sah</span>
            </h3>
            
            <p className="text-dark-600 dark:text-gray-300 mb-4 leading-relaxed">
              I am a passionate software developer with expertise in building responsive web applications and developing AI prediction models.
              With a background in Information Science and Engineering(IT Engineer),
              I specialize in creating elegant and efficient solutions to complex problems using modern technologies and intelligent systems.
            </p>
            
            <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed">
             My journey in software development began during my studies in Information Science and Engineering, where I discovered my passion 
              for creating intuitive user experiences. After graduation, I worked on real-time projects to gain hands-on experience — including 
              AI-powered prediction models focused on blood pressure, stress, and thyroid levels. These projects were part of my initiative to contribute to AI-driven healthcare solutions. 
              I always strive to write clean, maintainable code that addresses real-world challenges effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="font-bold mr-2 text-dark-700 dark:text-gray-200">Role:</span>
                <span className="text-dark-600 dark:text-gray-300">AI & Web Developer</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2 text-dark-700 dark:text-gray-200">Email:</span>
                <span className="text-dark-600 dark:text-gray-300">sahbasantkumar86@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2 text-dark-700 dark:text-gray-200">Location:</span>
                <span className="text-dark-600 dark:text-gray-300">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2 text-dark-700 dark:text-gray-200">Available for:</span>
                <span className="text-dark-600 dark:text-gray-300">Freelance, Full-time</span>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Contact Me
              </a>
              <button 
                onClick={handleDownloadCV}
                className="inline-block ml-4 px-6 py-3 bg-transparent border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;