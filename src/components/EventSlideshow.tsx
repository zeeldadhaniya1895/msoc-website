import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/main.jpg',
    alt: 'MSTC-summer of code'
  },
  {
    id: 2,
    image: '/c1.png',
    alt: 'Category 1'
  },
  {
    id: 3,
    image: '/c2.png',
    alt: 'Category 2'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    scale: 0.9,
  }),
};

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  
  return (
    <div className="w-full aspect-[3/4] relative group perspective max-h-[450px]">
      {/* 3D Frame Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-summer-yellow/30 to-primary/30 transform -skew-x-1 skew-y-1 scale-[1.03] blur-sm z-0 animate-pulse" />
      
      <div className="absolute inset-0 rounded-xl overflow-hidden z-10 bg-black/30">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].alt} 
              className="w-full h-full object-contain"
            />
            
            {/* Gradient overlay to match theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-summer-yellow/20 mix-blend-overlay" />
            
            {/* Poster information */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-bold text-lg">{slides[currentSlide].alt}</h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-primary/70 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-primary/70 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Improved Indicators */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1.5 transition-all duration-500 ${
              index === currentSlide ? 'w-8 bg-summer-yellow' : 'w-4 bg-white/40 hover:bg-white/60'
            } rounded-full overflow-hidden`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div 
                initial={{ x: "-100%" }} 
                animate={{ x: "0%" }} 
                transition={{ duration: 5, ease: "linear" }}
                className="absolute inset-0 bg-primary"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventSlideshow; 