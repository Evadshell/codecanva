"use client";

import { useSpring, animated } from "react-spring";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Box from "@/components/Box";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Globe from "@/components/magicui/globe";

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

        <Section className="bg-transparent">
          <div className="h-96 flex items-center justify-center">
            <GlobeDemo />
          </div>
        </Section>

        {/* Add more sections as needed */}
      </main>
    </div>
  );
}

function GlobeDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
