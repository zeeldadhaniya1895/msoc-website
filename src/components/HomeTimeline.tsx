import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { eventDetails } from '../data/eventData';

const HomeTimeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });
  
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const sunScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.5]);
  const sunRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  return (
    <section ref={timelineRef} className="py-20 bg-gradient-to-b from-transparent to-mstc-dark timeline-container relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center gradient-text"
        >
          Event Timeline
        </motion.h2>
        
        {/* Animated Sun that follows timeline scroll */}
        <motion.div 
          className="fixed right-10 top-1/3 translate-y-0 z-10 pointer-events-none"
          style={{ 
            y: sunY,
            scale: sunScale,
            opacity: sunOpacity,
            rotate: sunRotate
          }}
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-yellow-400"></div>
            {/* Sun rays */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-8 bg-yellow-400 left-1/2 top-1/2 -ml-0.5"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px)`,
                  transformOrigin: 'bottom center',
                  animation: `float ${1 + (i % 3) * 0.5}s ease-in-out infinite alternate`,
                }}
              ></div>
            ))}
          </div>
        </motion.div>
        
        {/* Cloud decorations */}
        <motion.div 
          className="absolute left-5 top-40 opacity-30 pointer-events-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        >
          <div className="cloud bg-white w-16 h-6 rounded-full"></div>
          <div className="cloud bg-white w-10 h-10 rounded-full -mt-4 ml-4"></div>
          <div className="cloud bg-white w-10 h-10 rounded-full -mt-6 -ml-2"></div>
        </motion.div>
        
        <motion.div 
          className="absolute right-20 top-60 opacity-30 pointer-events-none"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        >
          <div className="cloud bg-white w-20 h-8 rounded-full"></div>
          <div className="cloud bg-white w-12 h-12 rounded-full -mt-6 ml-5"></div>
          <div className="cloud bg-white w-12 h-12 rounded-full -mt-7 -ml-3"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-summer-yellow/30"></div>
          
          {eventDetails.timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 text-right">
                  <motion.div 
                    className={`card ${index % 2 === 0 ? '' : 'ml-auto'}`}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <h3 className="font-display font-bold text-lg text-summer-yellow">
                      <span className="summer-icon">{index === 0 ? '🚀' : index === 1 ? '📚' : index === 2 ? '💻' : index === 3 ? '🎯' : '🏆'}</span>
                      {event.event}
                    </h3>
                    <p className="text-white/70">{event.date}</p>
                  </motion.div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-summer-yellow z-10 flex items-center justify-center timeline-circle">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTimeline; 