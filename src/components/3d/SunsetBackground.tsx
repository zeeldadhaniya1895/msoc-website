import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

// Glowing spheres component
function GlowingSphere({ position, size, color, speed }) {
  const ref = useRef();
  
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.5;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1}
    >
      <mesh position={position} ref={ref}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.4}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Subtle moving particles
function MovingParticle({ position, size, color, speed }) {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.x = position[0] + Math.sin(t * speed) * 1.5;
    ref.current.position.y = position[1] + Math.cos(t * speed * 0.7) * 1.2;
    ref.current.position.z = position[2] + Math.cos(t * speed * 0.5) * 1;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

// Distant stars that twinkle
function TwinklingStar({ position, size, color }) {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Subtle opacity pulsing for twinkling effect
    ref.current.material.opacity = 0.4 + Math.sin(t * (1 + Math.random())) * 0.2;
  });

  return (
    <mesh position={position} ref={ref}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

// Main scene
function Scene() {
  // Darker orange/yellow color palette that's less distracting
  const colors = {
    yellow: "#D4AF37", // Darker gold
    lightOrange: "#CC7722", // Darker orange
    orange: "#B25D00", // Deeper orange
    deepOrange: "#AD2A00", // Deeper orange red
    amber: "#AA8C00" // Deeper amber
  };

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.7} color={colors.yellow} />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color={colors.orange} />
      
      {/* Stars with warm tint but less count */}
      <Stars 
        radius={100} 
        depth={50} 
        count={500}
        factor={4} 
        saturation={0.5}
        fade
        speed={0.2}
        color={colors.amber}
      />
      
      {/* Larger glowing spheres */}
      <GlowingSphere position={[-4, 0, -5]} size={0.5} color={colors.yellow} speed={0.5} />
      <GlowingSphere position={[2, -2, -10]} size={1.5} color={colors.orange} speed={0.3} />
      <GlowingSphere position={[5, 3, -15]} size={0.8} color={colors.lightOrange} speed={0.4} />
      <GlowingSphere position={[-6, 2, -8]} size={0.6} color={colors.deepOrange} speed={0.6} />
      <GlowingSphere position={[0, -3, -5]} size={0.4} color={colors.amber} speed={0.7} />
      
      {/* Moving particles */}
      {Array.from({ length: 35 }).map((_, i) => {
        const posX = (Math.random() - 0.5) * 30;
        const posY = (Math.random() - 0.5) * 30;
        const posZ = -Math.random() * 30 - 5;
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
          />
        );
      })}
      
      {/* Distant twinkling stars */}
      {Array.from({ length: 40 }).map((_, i) => {
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
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-orange-900 to-amber-900">
      {/* Dark semi-transparent overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default SunsetBackground; 