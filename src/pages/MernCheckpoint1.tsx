import { motion } from 'framer-motion';
import SunsetBackground from '../components/3d/SunsetBackground';
import { useNavigate } from 'react-router-dom';

const MernCheckpoint1 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative pt-24 pb-16 min-h-screen">
      <SunsetBackground />
      
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        <div className="flex mb-6 items-center">
          <button 
            onClick={() => navigate('/')}
            className="text-white/70 hover:text-white flex items-center gap-2 mb-8"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Events
          </button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 rounded-xl border border-primary/20"
        >
          <div className="mb-8 text-center">
            <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">
              <div className="text-4xl">🔥</div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">MERN Stack Track - Checkpoint 1</h1>
            <p className="text-xl text-white/70">Getting Started with MERN</p>
          </div>
          
          <div className="text-center mb-12">
            <div className="p-8 bg-primary/5 rounded-lg border border-primary/10 mb-6">
              <svg className="w-16 h-16 mx-auto text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-white mb-2">Coming Soon!</h2>
              <p className="text-lg text-white/70 max-w-lg mx-auto">
                The MERN Stack Track Checkpoint 1 materials and challenges will be released soon. 
                Stay tuned for exciting content to kickstart your MERN development journey!
              </p>
            </div>
            
            <p className="text-white/50">
              We're preparing comprehensive resources to help you master MongoDB, Express, React, and Node.js.
              Check back later for updates.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full shadow-md"
            >
              Return to Event Page
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MernCheckpoint1; 