import { useState } from 'react';
import { motion } from 'framer-motion';
import SunsetBackground from '../components/3d/SunsetBackground';
import { categories } from '../data/eventData';
import { toast } from 'react-hot-toast';
import useAPI from '../hooks/useAPI';
import { isValidEmail, isValidName, isValidPhoneNumber } from '../utils/validation';
import { getFormattedTimestamp } from '../utils/formatters';
import { Link } from 'react-router-dom';

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
  
  // Set this flag to true to close registration, or false to open it
  const isRegistrationClosed = true;
  
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
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  
  const mainTracks = categories.filter(category => category.isMainTrack);
  
  const isFormValid = () => {
    // Check if discord contains only whitespace
    const isDiscordValid = formData.discord.trim() !== '';
    
    return (
      formData.fullName.trim() !== '' &&
      isValidEmail(formData.email) &&
      formData.college.trim() !== '' &&
      formData.year.trim() !== '' &&
      formData.phoneNumber.trim() !== '' &&
      (formData.phoneNumber.trim() === '' || isValidPhoneNumber(formData.phoneNumber)) &&
      isDiscordValid &&
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
    
    // Set to true to show validation errors
    setIsJustVerify(true);
    
    // First check for Discord username with only spaces
    if (formData.discord.trim() === '') {
      toast.error('Discord username cannot contain only spaces');
      return;
    }

    // Then check all other validations
    if (!isFormValid()) {
      toast.error('Please fill all required fields correctly');
      return;
    }

    // Only if all validations pass, proceed with submission
    setIsSubmitting(true);
    
    const sheetsData = {
      spreadsheetId: "1bMGUvmXFYPMxNRNAbHenvL0tlLaokELL4gDiuD3CCwo",
      sheetName: "Sheet1",
      data: [
        formData.fullName.trim(),
        formData.email,
        formData.college.trim(),
        formData.year,
        formData.discord.trim(), // Make sure to trim the discord username
        formData.phoneNumber,
        formData.category,
        formData.experience.trim(),
        formData.expectations.trim(),
        getFormattedTimestamp(),
      ],
    };

    try {
      await POST("/data-services/store-data", sheetsData);
      await POST("/mail-services/send-mail/register", {
        ...formData,
        discord: formData.discord.trim() // Make sure to send trimmed discord username
      });
      
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
      
      // Show success message
      setIsRegistrationSuccess(true);
      setIsJustVerify(false);
    } catch (error: unknown) {
      console.error(error);
      const apiError = error as APIError;
      toast.error(apiError.response?.data?.message || 'Registration failed. Please try again.');
      setIsRegistrationSuccess(false);
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
            {isRegistrationClosed ? (
              <><span className="summer-icon">🔒</span> Registration Closed</>
            ) : (
              <><span className="summer-icon">📝</span> Register for MSOC 2025</>
            )}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto text-center mb-8"
          >
            {isRegistrationClosed ? (
              <>Thank you for your interest in <span className="mstc-highlight">MSOC</span>. Registration for this event is now closed.</>
            ) : (
              <>Join us for an exciting summer of learning and building projects with <span className="mstc-highlight">MSTC</span>!</>
            )}
          </motion.p>
          
          <div className="max-w-3xl mx-auto">
            <div className="card">
              {isRegistrationClosed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-6 summer-icon">⏰</div>
                  <h2 className="text-2xl font-display font-bold text-summer-yellow mb-4">
                    Registration Period Has Ended
                  </h2>
                  <p className="text-gray-300 max-w-xl mx-auto mb-8">
                    We've reached maximum capacity for this event. Follow us on social media for updates about future events and opportunities.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link 
                      to="/events" 
                      className="btn btn-primary px-6 py-3"
                    >
                      View Current Events
                    </Link>
                    <Link 
                      to="/" 
                      className="btn btn-secondary px-6 py-3"
                    >
                      Back to Homepage
                    </Link>
                  </div>
                  
                  {/* <div className="mt-10 pt-8 border-t border-gray-800">
                    <p className="text-gray-400">
                      Have questions? Contact us at <a href="mailto:mstcvitc@gmail.com" className="text-primary hover:text-primary-dark transition">mstcvitc@gmail.com</a>
                    </p>
                  </div> */}
                </motion.div>
              ) : (
                <>
                {isRegistrationSuccess ? (
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
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <a
                        href="https://discord.com/invite/G8uBzqZ8CX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-2 px-6 rounded-md inline-flex items-center gap-2 justify-center"
                      >
                        <svg width="20" height="20" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
                        </svg>
                        Join Discord Server
                      </a>
                      <button
                        onClick={() => setIsRegistrationSuccess(false)}
                        className="btn-primary justify-center inline-flex items-center gap-2"
                      >
                        Register Another Person
                      </button>
                    </div>
                    <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <p className="text-white font-medium">
                        <span className="text-xl mr-2">✓</span> Your registration has been successfully recorded. You will receive a confirmation email shortly.
                      </p>
                    </div>
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
                        Discord Username<span className="text-summer-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="discord"
                        name="discord"
                        value={formData.discord}
                        onChange={handleChange}
                        required
                        placeholder="e.g., username#1234"
                        className={`w-full bg-white/10 border ${
                          isJustVerify && !formData.discord.trim()
                            ? 'border-red-500'
                            : 'border-white/20'
                        } rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-summer-yellow transition-all`}
                      />
                      {isJustVerify && !formData.discord.trim() && (
                        <p className="text-red-500 text-sm mt-1">Discord username is required</p>
                      )}
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
                </>
              )}
            </div>
            
            {!isRegistrationClosed && (
              <div className="mt-8 text-center text-white/70">
                <p>
                  Already registered? Join our{' '}
                  <a
                    href="https://discord.com/invite/G8uBzqZ8CX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-summer-yellow hover:underline"
                  >
                    Discord server
                  </a>{' '}
                  for updates from <span className="mstc-highlight">MSTC</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage; 