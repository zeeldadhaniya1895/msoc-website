import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MiniGame = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [targets, setTargets] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const gameAreaRef = useRef(null);
  const timerRef = useRef(null);

  const colors = ['#FFD700', '#FF8C00', '#1E90FF', '#0078D4'];

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setGameOver(false);
    setTimeLeft(30);
    setTargets([]);
    
    // Create initial targets
    createTarget();
    createTarget();
    
    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const createTarget = () => {
    if (!gameAreaRef.current) return;
    
    const { width, height } = gameAreaRef.current.getBoundingClientRect();
    
    // Generate random position within game area
    const x = Math.random() * (width - 60);
    const y = Math.random() * (height - 60);
    
    // Generate random size between 30 and 60px
    const size = Math.floor(Math.random() * 30) + 30;
    
    // Generate random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Create new target
    const newTarget = {
      id: Date.now(),
      x,
      y,
      size,
      color,
    };
    
    setTargets(prev => [...prev, newTarget]);
  };

  const handleTargetClick = (id) => {
    // Remove clicked target
    setTargets(prev => prev.filter(target => target.id !== id));
    
    // Increase score
    setScore(prev => prev + 1);
    
    // Create a new target
    createTarget();
    
    // 20% chance to create an extra target
    if (Math.random() < 0.2) {
      createTarget();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="card w-full max-w-3xl mx-auto h-[400px] relative overflow-hidden">
      <div className="absolute top-4 right-4 text-white z-10 flex gap-4">
        <div className="bg-black/50 backdrop-blur-md p-2 rounded-md">
          Time: <span className="font-bold">{timeLeft}s</span>
        </div>
        <div className="bg-black/50 backdrop-blur-md p-2 rounded-md">
          Score: <span className="font-bold">{score}</span>
        </div>
      </div>
      
      {!gameStarted || gameOver ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-2xl font-display font-bold mb-4">
            {gameOver ? 'Game Over!' : 'Summer Click Challenge'}
          </h3>
          
          {gameOver && (
            <p className="text-xl mb-4">Final Score: <span className="font-bold">{score}</span></p>
          )}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={startGame}
          >
            {gameOver ? 'Play Again' : 'Start Game'}
          </motion.button>
          
          {!gameOver && (
            <p className="mt-4 text-white/70 text-center max-w-md mx-auto">
              Click on the colored circles as quickly as you can to score points. You have 30 seconds!
            </p>
          )}
        </div>
      ) : (
        <div ref={gameAreaRef} className="w-full h-full relative cursor-pointer">
          {targets.map(target => (
            <motion.div
              key={target.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                position: 'absolute',
                left: `${target.x}px`,
                top: `${target.y}px`,
                width: `${target.size}px`,
                height: `${target.size}px`,
                backgroundColor: target.color,
                borderRadius: '50%',
              }}
              onClick={() => handleTargetClick(target.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="shadow-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MiniGame; 