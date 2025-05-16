import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: 'Please fill out all required fields',
      });
      return;
    }
    
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: '',
    });
    
    try {
      await window.emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        message: 'Message sent successfully!',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-800 dark:text-white">
          Get In Touch
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="p-6 bg-primary-600 dark:bg-primary-800 text-white md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-8">
                Feel free to reach out to me. I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:sahbasantkumar86@gmail.com" className="text-primary-100">sahbasantkumar86@gmail.com</a>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-primary-100">Kathmandu, Nepal</p>
                </div>
                <div>
                  <p className="font-semibold">Social Media</p>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://github.com/Basant0-0" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary-200 transition-colors"
                      aria-label="GitHub"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/basantkumarsah/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary-200 transition-colors"
                      aria-label="LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:col-span-3">
              <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Send a Message</h3>
              
              {status.submitted && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.success 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}>
                  <div className="flex items-center">
                    {status.success ? <CheckCircle size={20} className="mr-2" /> : <AlertCircle size={20} className="mr-2" />}
                    <p>{status.message}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-600 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-dark-700 text-dark-800 dark:text-white resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;