import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories, phaseDetails } from '../data/eventData';
import SunsetBackground from '../components/3d/SunsetBackground';
import { Link, useNavigate } from 'react-router-dom';

const RoadmapPage = () => {
  const navigate = useNavigate();
  
  // Filter out MERN and GenAI categories
  const filteredCategories = categories.filter(
    category => category.id !== "mern" && category.id !== "genai"
  );
  
  const [selectedCategory, setSelectedCategory] = useState(filteredCategories[0]); // Default to first category
  const [activePhase, setActivePhase] = useState('learning'); // Track which phase is active
  
  // Reset selected category if it's MERN or GenAI
  useEffect(() => {
    if (selectedCategory && (selectedCategory.id === "mern" || selectedCategory.id === "genai")) {
      setSelectedCategory(filteredCategories[0]);
    }
  }, [selectedCategory]);
  
  // Navigate to detailed roadmap when view button is clicked
  const handleViewDetailedRoadmap = () => {
    if (selectedCategory) {
      navigate(`/${selectedCategory.id}`);
    }
  };
  
  return (
    <div className="relative pt-20 pb-20">
      <SunsetBackground />
      
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center gradient-text"
          >
            Learning Roadmaps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto text-center drop-shadow-lg"
          >
            Explore our comprehensive learning paths for different technologies
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-primary font-semibold mb-2 drop-shadow-md">Looking for MERN Stack or GenAI tracks?</p>
            <Link to="/events" className="text-secondary hover:text-primary underline font-bold drop-shadow-md">
              Check out our main event page →
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Category Selection */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filteredCategories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-full transition-all shadow-md interactive-item ${
                  selectedCategory && selectedCategory.id === category.id 
                    ? 'bg-primary text-white font-bold' 
                    : 'bg-gray-800/80 hover:bg-gray-800/90 text-gray-200'
                }`}
              >
                {category.icon} {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected Category Roadmap */}
      <section>
        <div className="container mx-auto px-4 lg:px-6">
          {selectedCategory && (
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-card max-w-5xl mx-auto p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl bg-primary/20 p-4 rounded-full">{selectedCategory.icon}</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {selectedCategory.name} Roadmap
                  </h2>
                  <p className="text-gray-300 drop-shadow-md">{selectedCategory.description}</p>
                </div>
              </div>
              
              {/* Phase Selector */}
              <div className="flex justify-center gap-4 my-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActivePhase('learning')}
                  className={`px-5 py-2 rounded-full transition-all ${
                    activePhase === 'learning' 
                      ? 'bg-primary text-white font-bold' 
                      : 'bg-gray-800/70 hover:bg-gray-800/90 text-gray-200'
                  }`}
                >
                  Learning Phase
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActivePhase('development')}
                  className={`px-5 py-2 rounded-full transition-all ${
                    activePhase === 'development' 
                      ? 'bg-primary text-white font-bold' 
                      : 'bg-gray-800/70 hover:bg-gray-800/90 text-gray-200'
                  }`}
                >
                  Development Phase
                </motion.button>
              </div>
              
              {/* Learning Phase */}
              {activePhase === 'learning' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-secondary">
                    {phaseDetails.learning.title} (6 weeks)
                  </h3>
                  
                  <div className="card bg-gray-800/80 p-8 text-center">
                    <p className="text-gray-300 mb-6">
                      Detailed weekly breakdown will be available once registration opens.
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleViewDetailedRoadmap}
                      className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full inline-flex items-center gap-2 shadow-md"
                    >
                      View Detailed Roadmap
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Development Phase */}
              {activePhase === 'development' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-secondary">
                    {phaseDetails.development.title} (3 weeks)
                  </h3>
                  
                  <div className="card bg-gray-800/80">
                    <h4 className="font-bold text-lg mb-2 text-primary">Project Development</h4>
                    <p className="text-gray-300 mb-4">
                      After completing the learning phase, you'll work on building a complete project
                      either individually or as part of a team.
                    </p>
                    
                    <p className="text-gray-400 text-center mt-6">
                      More details about project development will be available closer to the development phase.
                    </p>
                    
                    
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage; 