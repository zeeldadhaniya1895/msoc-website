import { useState } from 'react';
import { motion } from 'framer-motion';
import SunsetBackground from '../components/3d/SunsetBackground';
import { categories } from '../data/eventData';
import { toast } from 'react-hot-toast';
import useAPI from '../hooks/useAPI';
import { isValidEmail, isValidName, isValidPhoneNumber } from '../utils/validation';
import { getFormattedTimestamp } from '../utils/formatters';

interface FormData {
  fullName: string;
  email: string;
  college: string;
  year: string;
  discord: string;
  phoneNumber: string;
  category: string;
  experience: string;
  expectations: string;
}

interface APIError {
  response?: {
    data?: {
      message?: string;
    };
  };
}
 
const RegistrationPage = () => {
  const { POST } = useAPI();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    college: '',
    year: '',
    discord: '',
    phoneNumber: '',
    category: '',
    experience: '',
    expectations: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJustVerify, setIsJustVerify] = useState(false);
  
  const mainTracks = categories.filter(category => category.isMainTrack);
  
  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      isValidEmail(formData.email) &&
      formData.college.trim() !== '' &&
      formData.year.trim() !== '' &&
      formData.phoneNumber.trim() !== '' &&
      (formData.phoneNumber.trim() === '' || isValidPhoneNumber(formData.phoneNumber)) &&
      formData.category !== ''
    );
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Add validation for specific fields
    if (name === 'fullName' && !isValidName(value) && value.length > 0) {
      return;
    }
    
    if (name === 'phoneNumber' && value.length > 0) {
      // Allow only digits in phone number field
      if (!/^\d*$/.test(value)) {
        return;
      }
      
      // Limit to 10 digits
      if (value.length > 10) {
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsJustVerify(true);

    if (!isFormValid()) {
      toast.error('Please fill all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    
    const sheetsData = {
      spreadsheetId: "1bMGUvmXFYPMxNRNAbHenvL0tlLaokELL4gDiuD3CCwo",
      sheetName: "Sheet1",
      data: [
        formData.fullName.trim(),
        formData.email,
        formData.college.trim(),
        formData.year,
        formData.discord,
        formData.phoneNumber,
        formData.category,
        formData.experience.trim(),
        formData.expectations.trim(),
        getFormattedTimestamp(),
      ],
    };

    try {
      await POST("/data-services/store-data", sheetsData);
      await POST("/mail-services/send-mail/register", formData);
      
      toast.success('Registration successful!');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        college: '',
        year: '',
        discord: '',
        phoneNumber: '',
        category: '',
        experience: '',
        expectations: '',
      });
      setIsJustVerify(false);
    } catch (error: unknown) {
      console.error(error);
      const apiError = error as APIError;
      toast.error(apiError.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            <span className="summer-icon">📝</span> Register for MSOC 2025
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
              {isJustVerify ? (
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
                    Thank you for registering for MSOC 2025. We have sent you a confirmation email with further details. Also, make sure to join our Discord server for updates!
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
                        className={`w-full bg-white/10 border ${
                          isJustVerify && !formData.fullName.trim() 
                            ? 'border-red-500' 
                            : 'border-white/20'
                        } rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all`}
                      />
                      {isJustVerify && !formData.fullName.trim() && (
                        <p className="text-red-500 text-sm mt-1">Full name is required</p>
                      )}
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
                        className={`w-full bg-white/10 border ${
                          isJustVerify && !isValidEmail(formData.email)
                            ? 'border-red-500'
                            : 'border-white/20'
                        } rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all`}
                      />
                      {isJustVerify && !isValidEmail(formData.email) && (
                        <p className="text-red-500 text-sm mt-1">
                          {formData.email.trim() === '' 
                            ? 'Email is required' 
                            : 'Please enter a valid email address'}
                        </p>
                      )}
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
                        className={`w-full bg-white/10 border ${
                          isJustVerify && !formData.college.trim()
                            ? 'border-red-500'
                            : 'border-white/20'
                        } rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all`}
                      />
                      {isJustVerify && !formData.college.trim() && (
                        <p className="text-red-500 text-sm mt-1">College/University is required</p>
                      )}
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
                        className={`w-full bg-white/10 border ${
                          isJustVerify && !formData.year
                            ? 'border-red-500'
                            : 'border-white/20'
                        } rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all`}
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year <span className="summer-icon">🌱</span></option>
                        <option value="2">2nd Year <span className="summer-icon">🌿</span></option>
                        <option value="3">3rd Year <span className="summer-icon">🌲</span></option>
                        <option value="4">4th Year <span className="summer-icon">🌳</span></option>
                        <option value="5+">5th Year or above <span className="summer-icon">🌴</span></option>
                      </select>
                      {isJustVerify && !formData.year && (
                        <p className="text-red-500 text-sm mt-1">Year of study is required</p>
                      )}
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
                    <label htmlFor="phoneNumber" className="block text-white mb-2">
                      Phone Number<span className="text-summer-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 9876543210"
                      className={`w-full bg-white/10 border ${
                        isJustVerify && !formData.phoneNumber.trim()
                          ? 'border-red-500'
                          : 'border-white/20'
                      } rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all`}
                    />
                    {isJustVerify && formData.phoneNumber.trim() !== '' && !isValidPhoneNumber(formData.phoneNumber) && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit phone number</p>
                    )}
                    {isJustVerify && !formData.phoneNumber.trim() && (
                      <p className="text-red-500 text-sm mt-1">Phone number is required</p>
                    )}
                  </div>
                  
                  <div className="fade-in-up stagger-5">
                    <label htmlFor="category" className="block text-white mb-2">
                      Preferred Track<span className="text-summer-orange">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className={`w-full bg-white/10 border ${
                        isJustVerify && !formData.category
                          ? 'border-red-500'
                          : 'border-white/20'
                      } rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all`}
                    >
                      <option value="">Select Track</option>
                      {mainTracks.map(track => (
                        <option key={track.id} value={track.id}>
                          {track.name} {track.name === "MERN Stack" ? "🔥" : "🧠"}
                        </option>
                      ))}
                    </select>
                    {isJustVerify && !formData.category && (
                      <p className="text-red-500 text-sm mt-1">Please select a track</p>
                    )}
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