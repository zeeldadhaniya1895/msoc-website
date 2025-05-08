import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import SunsetBackground from '../components/3d/SunsetBackground';
import MiniGame from '../components/MiniGame';
import { categories, eventDetails } from '../data/eventData';
import { useRef } from 'react';
import HomeTimeline from '../components/HomeTimeline';

const HomePage = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });
  
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  
  return (
    <div className="relative overflow-x-hidden">
      <SunsetBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-summer-yellow">MSOC</span>
                <span className="block text-white">Summer of Code 2023</span>
              </h1>
              <p className="text-xl mt-6 text-white/80 max-w-2xl">
                Join <span className="mstc-highlight">Microsoft Student Technical Club's</span> summer coding event to learn, build, and showcase your skills with MERN Stack and GenAI technologies.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/register" className="btn-primary">
                  <span className="summer-icon">🌞</span> Register Now
                </Link>
                <Link to="/event" className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold py-2 px-6 rounded-md transition-all duration-300">
                  View Event Tracks
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-summer-yellow"></div>
                  <span>Event Begins: <span className="summer-icon">🔥</span> May 15, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-summer-orange"></div>
                  <span>Registration: <span className="summer-icon">📝</span> May 11 - May 14</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img src="/vite.svg" alt="MSOC 2023" className="w-full max-w-md mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-title gradient-text"
            >
              Learning Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Explore these 8 tech categories and then choose between MERN Stack and GenAI for deep dive
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3 summer-icon">{category.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-summer-yellow transition-colors">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {categories.slice(8).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className="card border-2 border-summer-yellow/50 group fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl summer-icon">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-summer-yellow transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/70">Main Track</p>
                  </div>
                </div>
                <p className="text-white/70 mt-4">{category.description}</p>
                <Link 
                  to="/event" 
                  className="inline-block mt-4 text-summer-yellow font-semibold hover:underline"
                >
                  Learn more about this track →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section with HomeTimeline component */}
      <HomeTimeline />
      
      {/* Mini Game Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title text-center gradient-text"
          >
            <span className="summer-icon">🎮</span> Take a Fun Break!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 max-w-2xl mx-auto text-center mb-8"
          >
            Challenge yourself with our quick summer-themed mini-game.
          </motion.p>
          
          <MiniGame />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto text-center py-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Summer of Code</span>?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of students this summer to learn, build, and grow your tech skills with <span className="mstc-highlight">MSTC</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/event" 
                className="btn-primary text-lg px-8 py-3"
              >
                <span className="summer-icon">☀️</span> Explore Our Tracks
              </Link>
              <Link 
                to="/register" 
                className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 