import { useState } from 'react';
import { motion } from 'framer-motion';
import { phaseDetails, categories } from '../data/eventData';
import SunsetBackground from '../components/3d/SunsetBackground';
import QuizModal from '../components/QuizModal';
import CheckpointModal from '../components/CheckpointModal';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const navigate = useNavigate();
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isCheckpointModalOpen, setIsCheckpointModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  
  // Find MERN and GenAI categories
  const mainTracks = categories.filter(category => category.isMainTrack);
  const mernTrack = mainTracks.find(track => track.id === 'mern');
  const genAITrack = mainTracks.find(track => track.id === 'genai');

  const openQuizModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQuizModalOpen(true);
  };
  
  const openCheckpointModal = (trackId: string) => {
    setSelectedTrack(trackId);
    setIsCheckpointModalOpen(true);
  };
  
  // Navigate to detailed roadmap
  const navigateToRoadmap = (trackId: string) => {
    navigate(`/${trackId}`);
  };

  return (
    <div className="relative pt-20 pb-20">
      <SunsetBackground />
      
      <QuizModal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} />
      <CheckpointModal 
        isOpen={isCheckpointModalOpen} 
        onClose={() => setIsCheckpointModalOpen(false)} 
        trackId={selectedTrack}
      />
      
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center gradient-text"
          >
            MSOC Main Event Tracks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto text-center"
          >
            Participate in our main event tracks and build your skills through guided learning and projects with <span className="mstc-highlight">MSTC</span>
          </motion.p>
        </div>
      </section>
      
      {/* Main Event Tracks */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MERN Track */}
            {mernTrack && (
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl bg-primary/20 p-4 rounded-full">🔥</div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
                      MERN Stack Track
                    </h2>
                    <p className="text-gray-300 drop-shadow-md">Full Stack Web Development</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Learn the complete MERN (MongoDB, Express, React, Node.js) stack and become a full-stack web developer. Build real-world applications from scratch.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-secondary">You'll Learn:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>MongoDB database design and operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Express.js server and API development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>React frontend application development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Node.js backend framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full-stack application integration and deployment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openCheckpointModal('mern')}
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full inline-flex items-center gap-2 shadow-md"
                  >
                    View Checkpoints
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openQuizModal}
                    className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full shadow-md"
                  >
                    Take Quiz
                  </motion.button>
                </div>
              </motion.div>
            )}
            
            {/* GenAI Track */}
            {genAITrack && (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-8 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl bg-secondary/20 p-4 rounded-full">🧠</div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
                      GenAI Track
                    </h2>
                    <p className="text-gray-300 drop-shadow-md">Generative AI & LLMs</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Dive into the world of Generative AI, Large Language Models, and AI application development. Learn to build applications that leverage cutting-edge AI capabilities.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">You'll Learn:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Understanding of Large Language Models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Prompt engineering techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Integration of AI APIs (OpenAI, Hugging Face, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Building AI-powered applications and tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ethical considerations and best practices</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openCheckpointModal('genai')}
                    className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full inline-flex items-center gap-2 shadow-md"
                  >
                    View Checkpoints
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openQuizModal}
                    className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-md"
                  >
                    Take Quiz
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Event Format */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Event Format
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Learning Phase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-primary/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Learning Phase</h3>
                <p className="text-gray-400 text-sm">6 Weeks</p>
              </div>
              
              <p className="text-gray-300 mb-4 text-center">
                {phaseDetails.learning.description}
              </p>
              
              <ul className="space-y-2 mt-6">
                {phaseDetails.learning.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Development Phase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-secondary/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Development Phase</h3>
                <p className="text-gray-400 text-sm">3 Weeks</p>
              </div>
              
              <p className="text-gray-300 mb-4 text-center">
                {phaseDetails.development.description}
              </p>
              
              <ul className="space-y-2 mt-6">
                {phaseDetails.development.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPage; 