import { useState } from 'react';
import { motion } from 'framer-motion';
import SunsetBackground from '../components/3d/SunsetBackground';
import { categories } from '../data/eventData';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    year: '',
    discord: '',
    category: '',
    experience: '',
    expectations: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const mainTracks = categories.filter(category => category.isMainTrack);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          college: '',
          year: '',
          discord: '',
          category: '',
          experience: '',
          expectations: '',
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="relative pt-20 pb-20">
      <SunsetBackground />
      
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center gradient-text"
          >
            <span className="summer-icon">📝</span> Register for MSOC 2023
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto text-center mb-8"
          >
            Join us for an exciting summer of learning and building projects with <span className="mstc-highlight">MSTC</span>!
          </motion.p>
          
          <div className="max-w-3xl mx-auto">
            <div className="card">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-6xl mb-4 summer-icon">🎉</div>
                  <h2 className="text-2xl font-display font-bold text-summer-yellow mb-4">
                    Registration Successful!
                  </h2>
                  <p className="text-white/70 mb-6">
                    Thank you for registering for MSOC 2023. We have sent you a confirmation email with further details. Also, make sure to join our Discord server for updates!
                  </p>
                  <a
                    href="https://discord.gg/mstc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Join Discord Server
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 fade-in-up"
                >
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-white p-4 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="fade-in-up stagger-1">
                      <label htmlFor="fullName" className="block text-white mb-2">
                        Full Name<span className="text-summer-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                      />
                    </div>
                    
                    <div className="fade-in-up stagger-2">
                      <label htmlFor="email" className="block text-white mb-2">
                        Email Address<span className="text-summer-orange">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="fade-in-up stagger-3">
                      <label htmlFor="college" className="block text-white mb-2">
                        College/University<span className="text-summer-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                      />
                    </div>
                    
                    <div className="fade-in-up stagger-4">
                      <label htmlFor="year" className="block text-white mb-2">
                        Year of Study<span className="text-summer-orange">*</span>
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year <span className="summer-icon">🌱</span></option>
                        <option value="2">2nd Year <span className="summer-icon">🌿</span></option>
                        <option value="3">3rd Year <span className="summer-icon">🌲</span></option>
                        <option value="4">4th Year <span className="summer-icon">🌳</span></option>
                        <option value="5+">5th Year or above <span className="summer-icon">🌴</span></option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="fade-in-up stagger-3">
                    <label htmlFor="discord" className="block text-white mb-2">
                      Discord Username
                    </label>
                    <input
                      type="text"
                      id="discord"
                      name="discord"
                      value={formData.discord}
                      onChange={handleChange}
                      placeholder="e.g., username#1234"
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                    />
                    <p className="text-xs text-white/50 mt-1">
                      We'll use Discord for communication during the event
                    </p>
                  </div>
                  
                  <div className="fade-in-up stagger-4">
                    <label htmlFor="category" className="block text-white mb-2">
                      Preferred Track<span className="text-summer-orange">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                    >
                      <option value="">Select Track</option>
                      {mainTracks.map(track => (
                        <option key={track.id} value={track.id}>
                          {track.name} {track.name === "MERN Stack" ? "🔥" : "🧠"}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="fade-in-up stagger-5">
                    <label htmlFor="experience" className="block text-white mb-2">
                      Experience Level<span className="text-summer-orange">*</span>
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="beginner">Beginner (No experience) <span className="summer-icon">🐣</span></option>
                      <option value="intermediate">Intermediate (Some experience) <span className="summer-icon">🦅</span></option>
                      <option value="advanced">Advanced (Significant experience) <span className="summer-icon">🦉</span></option>
                    </select>
                  </div>
                  
                  <div className="fade-in-up stagger-5">
                    <label htmlFor="expectations" className="block text-white mb-2">
                      What do you hope to achieve from this event?
                    </label>
                    <textarea
                      id="expectations"
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 fade-in-up">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(255, 140, 0, 0.4)" }}
                    >
                      <span className="summer-icon">🚀</span> {isSubmitting ? 'Submitting...' : 'Register Now'}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </div>
            
            <div className="mt-8 text-center text-white/70">
              <p>
                Already registered? Join our{' '}
                <a
                  href="https://discord.gg/mstc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-summer-yellow hover:underline"
                >
                  Discord server
                </a>{' '}
                for updates from <span className="mstc-highlight">MSTC</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage; 