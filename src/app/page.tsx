"use client";

import { useSpring, animated } from "react-spring";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Box from "@/components/Box";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/Particles"; // Ensure correct import

export default function Home() {
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black/50 z-10">
        <h1 className="text-2xl font-bold text-white">WebAppName</h1>
        <Button variant="outline" className="bg-white text-black">
          Sign In
        </Button>
      </header>

      <main className="text-center text-white z-10 relative">
        <Section className="bg-transparent">
          <animated.div style={fadeInProps}>
            <h2 className="text-6xl font-bold mb-4">Welcome to WebAppName</h2>
            <p className="text-2xl mb-8">
              Create and share your handmade animations with ease.
            </p>
            <Button size="lg" className="bg-white text-black">
              Get Started
            </Button>
          </animated.div>
        </Section>

        <Section className="bg-transparent">
          <div>
            <h2 className="text-5xl font-bold mb-4">3D Visualization</h2>
            <div className="h-96">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} />
                <Stars />
                <Box />
                <OrbitControls />
              </Canvas>
            </div>
          </div>
        </Section>

        {/* Add more sections as needed */}
      </main>

      <ParticlesBackground />
    </div>
  );
}