import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import SunsetBackground from '../components/3d/SunsetBackground';
import { categories } from '../data/eventData';
import { useRef } from 'react';
import HomeTimeline from '../components/HomeTimeline';
import EventSlideshow from '../components/EventSlideshow';

const HomePage = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });
  
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
                <span className="animated-gradient-text">MSOC</span>
                <span className="block text-white">MSTC-Summer of Code 2025</span>
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
              
              <div className="mt-4">
                <a 
                  href="https://discord.com/invite/G8uBzqZ8CX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-2 px-6 rounded-md transition-all duration-300 w-1/2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg>
                  Join Discord Channel
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-summer-yellow"></div>
                  <span>Event Begins: <span className="summer-icon">🔥</span> May 15, 2025</span>
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
              <div className="w-full max-w-[350px] mx-auto relative overflow-visible p-2">
                <div className="w-full relative overflow-visible rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-summer-yellow/30 p-3 backdrop-blur-sm shadow-xl shadow-primary/20">
                  {/* Slideshow Component */}
                  <EventSlideshow />
                </div>
                <div className="absolute -bottom-4 left-0 right-0 h-16"></div>
              </div>
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