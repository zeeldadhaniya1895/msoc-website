import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InteractiveBackground from '../../../components/common/InteractiveBackground';

const GenAICheckpoint1 = () => {
  const navigate = useNavigate();

  return (
    <InteractiveBackground>
      <div className="container mx-auto px-4 py-8 mb-16">
        {/* Decorative Circular Rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute h-72 w-72 rounded-full border-4 border-orange-500/10 top-20 -right-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute h-80 w-80 rounded-full border-2 border-orange-600/5 bottom-20 -left-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute h-48 w-48 rounded-full border-8 border-orange-700/5 top-1/2 left-1/4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute h-64 w-64 rounded-full border border-dashed border-orange-400/10 top-1/4 right-1/3"
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex justify-between items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/events')}
            className="px-6 py-2.5 bg-orange-500/10 hover:bg-orange-500/20 text-white rounded-lg backdrop-blur-xl border border-orange-500/20 transition-all duration-300 shadow-lg"
          >
            ← Back to Events
          </motion.button>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-orange-900/30 shadow-xl text-center max-w-2xl w-full"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full border border-orange-500/10 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full border-2 border-dashed border-orange-600/5 animate-spin -z-10" style={{ animationDuration: '60s' }}></div>
            
              <motion.h1 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent mb-6"
                animate={{ 
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '300% 100%' }}
              >
                Coming Soon
              </motion.h1>
              
              <motion.div 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                The GenAI Checkpoint resources are being prepared and will be available shortly.
              </motion.div>
              
              {/* <motion.div
                className="mb-6 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="h-2.5 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "30%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                  />
                </div>
                <div className="mt-2 text-right text-sm text-gray-400">
                  30% complete
                </div>
              </motion.div> */}
              
              <motion.p
                className="text-gray-400 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Our team is working hard to curate high-quality learning materials for the GenAI track. Check back soon!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </InteractiveBackground>
  );
};

export default GenAICheckpoint1; 