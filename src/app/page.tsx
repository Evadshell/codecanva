"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Globe from "@/components/magicui/globe"; // Ensure this path is correct based on your directory structure
import TextReveal from "@/components/magicui/text-reveal";
import { useInView } from "react-intersection-observer";
import TypingAnimation from "@/components/magicui/typing-animation";

function Box(props: any) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 scroll-smooth">
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black/50 z-10">
        <h1 className="text-2xl font-bold text-white">WebAppName</h1>
        <button className="bg-white text-black px-4 py-2 rounded">Sign In</button>
      </header>

      <main className="text-center text-white z-10 relative">
        <Section>
          <section className="bg-transparent py-16">
            <h2 className="text-6xl font-bold mb-4">Welcome to WebAppName</h2>
            <TypingAnimation
      className="text-4xl font-bold text-black dark:text-white"
      text="Create and share your handmade animations with ease." />
            <button className="bg-white text-black px-6 py-3 text-lg rounded">
              Get Started
            </button>
          </section>
        </Section>

        <Section>
          <section className="bg-transparent py-16">
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
          </section>
        </Section>

        <Section>
          <section className="bg-transparent py-16">
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Globe
              </span>
              <Globe className="top-28" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
          </section>
        </Section>
      </main>
    </div>
  );
}
