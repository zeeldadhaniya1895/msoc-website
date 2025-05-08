import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

interface SphereProps {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
  isSmallScreen: boolean;
}

interface StarProps {
  position: [number, number, number];
  size: number;
  color: string;
}

// Glowing spheres component
function GlowingSphere({ position, size, color, speed, isSmallScreen }: SphereProps) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      // Reduce movement on small screens
      const movementFactor = isSmallScreen ? 0.2 : 0.5;
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * speed) * movementFactor;
      ref.current.rotation.z = state.clock.getElapsedTime() * (isSmallScreen ? 0.2 : 0.5);
    }
  });

  // Reduce size on small screens
  const adjustedSize = isSmallScreen ? size * 0.6 : size;

  return (
    <Float
      speed={isSmallScreen ? 1 : 2}
      rotationIntensity={isSmallScreen ? 0.5 : 1}
      floatIntensity={isSmallScreen ? 0.5 : 1}
    >
      <mesh position={position} ref={ref}>
        <sphereGeometry args={[adjustedSize, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.4}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={isSmallScreen ? 0.3 : 0.5}
        />
      </mesh>
    </Float>
  );
}

// Subtle moving particles
function MovingParticle({ position, size, color, speed, isSmallScreen }: SphereProps) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      // Reduce movement on small screens
      const movementFactor = isSmallScreen ? 0.6 : 1.5;
      ref.current.position.x = position[0] + Math.sin(t * speed) * movementFactor;
      ref.current.position.y = position[1] + Math.cos(t * speed * 0.7) * (isSmallScreen ? 0.5 : 1.2);
      ref.current.position.z = position[2] + Math.cos(t * speed * 0.5) * (isSmallScreen ? 0.4 : 1);
    }
  });

  // Reduce size on small screens
  const adjustedSize = isSmallScreen ? size * 0.6 : size;

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[adjustedSize, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={isSmallScreen ? 0.4 : 0.6} />
    </mesh>
  );
}

// Distant stars that twinkle
function TwinklingStar({ position, size, color }: StarProps) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      // Subtle pulsing effect
      ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = 
        size * (1 + Math.sin(t * Math.random() * 2) * 0.2);
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

// Main scene
function Scene({ isSmallScreen }: { isSmallScreen: boolean }) {
  // Darker orange/yellow color palette that's less distracting
  const colors = {
    yellow: "#D4AF37", // Darker gold
    lightOrange: "#CC7722", // Darker orange
    orange: "#B25D00", // Deeper orange
    deepOrange: "#AD2A00", // Deeper orange red
    amber: "#AA8C00" // Deeper amber
  };

  // Reduce number of particles on small screens
  const particleCount = isSmallScreen ? 15 : 35;
  const starCount = isSmallScreen ? 20 : 40;

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.7} color={colors.yellow} />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color={colors.orange} />
      
      {/* Stars with warm tint but less count */}
      <Stars 
        radius={100} 
        depth={50} 
        count={isSmallScreen ? 300 : 500}
        factor={isSmallScreen ? 3 : 4} 
        saturation={0.5}
        fade
        speed={0.2}
        color={colors.amber}
      />
      
      {/* Larger glowing spheres - positioned differently for small screens */}
      <GlowingSphere 
        position={isSmallScreen ? [-2, 0, -8] : [-4, 0, -5]} 
        size={0.5} 
        color={colors.yellow} 
        speed={0.5} 
        isSmallScreen={isSmallScreen}
      />
      <GlowingSphere 
        position={isSmallScreen ? [4, -1, -15] : [2, -2, -10]} 
        size={1.5} 
        color={colors.orange} 
        speed={0.3} 
        isSmallScreen={isSmallScreen}
      />
      <GlowingSphere 
        position={isSmallScreen ? [8, 5, -20] : [5, 3, -15]} 
        size={0.8} 
        color={colors.lightOrange} 
        speed={0.4} 
        isSmallScreen={isSmallScreen}
      />
      <GlowingSphere 
        position={isSmallScreen ? [-8, 4, -12] : [-6, 2, -8]} 
        size={0.6} 
        color={colors.deepOrange} 
        speed={0.6} 
        isSmallScreen={isSmallScreen}
      />
      <GlowingSphere 
        position={isSmallScreen ? [1, -4, -10] : [0, -3, -5]} 
        size={0.4} 
        color={colors.amber} 
        speed={0.7} 
        isSmallScreen={isSmallScreen}
      />
      
      {/* Moving particles */}
      {Array.from({ length: particleCount }).map((_, i) => {
        // Move particles further back on small screens
        const distanceFactor = isSmallScreen ? 1.5 : 1;
        const posX = (Math.random() - 0.5) * 30;
        const posY = (Math.random() - 0.5) * 30;
        const posZ = -Math.random() * 30 * distanceFactor - 5 * distanceFactor;
        const size = 0.05 + Math.random() * 0.15;
        const color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        const speed = 0.1 + Math.random() * 0.3;
        
        return (
          <MovingParticle 
            key={i} 
            position={[posX, posY, posZ]} 
            size={size} 
            color={color} 
            speed={speed}
            isSmallScreen={isSmallScreen}
          />
        );
      })}
      
      {/* Distant twinkling stars */}
      {Array.from({ length: starCount }).map((_, i) => {
        const posX = (Math.random() - 0.5) * 40;
        const posY = (Math.random() - 0.5) * 40;
        const posZ = -20 - Math.random() * 10;
        const size = 0.03 + Math.random() * 0.08;
        const color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
        
        return (
          <TwinklingStar 
            key={`star-${i}`} 
            position={[posX, posY, posZ]} 
            size={size} 
            color={color} 
          />
        );
      })}
    </>
  );
}

const SunsetBackground = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    // Check if we're on a small screen
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-orange-900 to-amber-900">
      {/* Dark semi-transparent overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: isSmallScreen ? 50 : 60 }} 
        dpr={[1, 2]} 
        performance={{ min: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        resize={{ scroll: false }}
      >
        <Scene isSmallScreen={isSmallScreen} />
      </Canvas>
    </div>
  );
};

export default SunsetBackground; 