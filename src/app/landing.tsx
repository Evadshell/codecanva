"use client";

import { useSpring, animated } from "react-spring";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Box from "@/components/Box";
import { Button } from "@/components/ui/button";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export default function Home() {
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black/50">
        <h1 className="text-2xl font-bold text-white">WebAppName</h1>
        <Button variant="outline" className="bg-white text-black">
          Sign In
        </Button>
      </header>

      <main className="flex flex-col items-center justify-center h-full text-center text-white">
        <animated.div style={fadeInProps}>
          <h2 className="text-6xl font-bold mb-4">Welcome to WebAppName</h2>
          <p className="text-2xl mb-8">
            Create and share your handmade animations with ease.
          </p>
          <Button size="lg" className="bg-white text-black">
            Get Started
          </Button>
        </animated.div>
      </main>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={2}
        repeatDelay={1}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} />
          <Stars />
          <Box />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
