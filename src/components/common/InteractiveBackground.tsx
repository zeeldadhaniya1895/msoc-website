import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

const InteractiveBackground = ({ children }: InteractiveBackgroundProps) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setTime(prev => (prev + 0.01) % 100);
    };

    const interval = setInterval(handleTimeUpdate, 16);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.07)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(251,146,60,0.07)_1.5px,transparent_1.5px)] bg-[size:40px_40px] opacity-15"></div>
      
      {/* Enhanced Auto-Flowing Gradients */}
      <motion.div 
        className="absolute -inset-[100px] opacity-20 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 20%, rgba(251,146,60,0.3) 0%, rgba(0,0,0,0) 50%)',
            'radial-gradient(circle at 70% 60%, rgba(251,146,60,0.3) 0%, rgba(0,0,0,0) 50%)',
            'radial-gradient(circle at 40% 80%, rgba(251,146,60,0.3) 0%, rgba(0,0,0,0) 50%)',
            'radial-gradient(circle at 30% 20%, rgba(251,146,60,0.3) 0%, rgba(0,0,0,0) 50%)'
          ]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Enhanced Animated Horizontal Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1.5px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
          style={{
            width: '150%',
            left: '-25%',
            top: `${10 + i * 12}%`,
            opacity: 0.2,
            filter: 'blur(0.5px)'
          }}
          animate={{
            translateX: ['-20%', '10%', '-20%'],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Enhanced Flowing Circuit Paths */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Circuit Pattern */}
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M100,0 L100,200 M0,100 L200,100" stroke="rgba(251,146,60,0.3)" strokeWidth="1" fill="none" />
          <path d="M0,0 L200,200 M200,0 L0,200" stroke="rgba(251,146,60,0.15)" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="3" fill="rgba(251,146,60,0.3)" />
          <circle cx="0" cy="100" r="3" fill="rgba(251,146,60,0.3)" />
          <circle cx="200" cy="100" r="3" fill="rgba(251,146,60,0.3)" />
          <circle cx="100" cy="0" r="3" fill="rgba(251,146,60,0.3)" />
          <circle cx="100" cy="200" r="3" fill="rgba(251,146,60,0.3)" />
        </pattern>
        
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
        
        {/* Enhanced Auto-Animated Circuit Pulses */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={`${20 + i * 15}%`}
            cy={`${30 + (i % 3) * 20}%`}
            r="3"
            fill="rgba(251,146,60,0.8)"
            filter="url(#glow)"
            animate={{
              r: [3, 50, 3],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 8 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Enhanced Diagonal Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`diag-${i}`}
          className="absolute w-full h-[1px] bg-orange-600/10"
          style={{
            top: '50%',
            left: '0',
            transform: `rotate(${15 + i * 15}deg)`,
            transformOrigin: 'center',
            filter: 'blur(0.5px)'
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Enhanced Auto-Animated Hex Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => {
          const xPos = (i % 4) * 25;
          const yPos = Math.floor(i / 4) * 25;
          
          return (
            <motion.div
              key={`hex-${i}`}
              className="absolute w-40 h-40 border border-orange-600/10"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                left: `${xPos}%`,
                top: `${yPos}%`,
                opacity: 0.05,
                filter: 'blur(0.5px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 15 + i % 5 * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Enhanced Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-orange-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50
            ],
            y: [
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50, 
              Math.random() * 100 - 50
            ],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-50"></div>

      {/* Content with padding to prevent navbar overlap and margin at bottom */}
      <div className="relative z-10 pt-20 pb-16">
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground; 