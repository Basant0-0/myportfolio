import Timeline from '../ui/Timeline';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Python Full Stack Intern',
      company: 'Myblocks',
      period: '12th may 2024 - 12th Nov 2024',
      description: 'During my internship at Appteknow Careers in collaboration with Myblocks, I worked as a Python Full Stack Developer Intern, contributing to the development of an AI-based project titled "Advanced Healthcare Diagnosis System Using Machine Learning." I gained hands-on experience in Python, SQL, and machine learning, building predictive models and responsive web interfaces to support intelligent healthcare diagnostics.',
      type: 'work',
    },
    {
      id: 2,
      title: 'Web Development Intern',
      company: 'PHN Technology pvt.Ltd.',
      period: '6th April 2023 - 6th June 2023',
      description: 'Completed a web development internship at PHN Technology Pvt. Ltd., gaining hands-on experience in full stack development and building responsive web applications.',
      type: 'work',
    },
    {
      id: 3,
      title: 'Intern',
      company: 'Parvam ConsulTech pvt Ltd',
      period: '14th Aug 2023 - 9th Sep 2023',
      description: 'Developed a AI model for Predictive Institute Results Analysis for Academic Planning.',
      type: 'work',
    },
    {
      id: 4,
      title: 'Bachelor of Information Science and Engineering',
      company: 'Visvesvaraya Technological University',
      period: '2020 - 2024',
      description: 'Over four years, I gained a strong foundation in computer science, data management, and software engineering. I learned programming languages such as Python, Java, and C++, studied data structures and algorithms, and explored database systems, networking, cybersecurity, and web/mobile application development. The curriculum also included machine learning, cloud computing, and emerging technologies, along with hands-on projects and teamwork that strengthened my problem-solving, analytical, and communication skills.',
      type: 'education',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-800 dark:text-white">
          Experience & Education
        </h2>
        
        <Timeline items={experiences} />
      </div>
    </section>
  );
};

export default Experience;