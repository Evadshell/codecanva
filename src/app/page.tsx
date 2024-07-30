"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Globe from "@/components/magicui/globe"; // Ensure this path is correct based on your directory structure
import TextReveal from "@/components/magicui/text-reveal";
import { useInView } from "react-intersection-observer";
import TypingAnimation from "@/components/magicui/typing-animation";
import Head from "next/head";
import { useSpring, animated } from 'react-spring';
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
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <animated.div ref={ref} style={props} className="relative py-16">
      {children}
    </animated.div>
  );
}
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-neon-green scroll-smooth">
      <Head>
        <title>CodeCanva</title>
      </Head>
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black/80 z-10 border-b border-neon-green">
        <h1 className="text-2xl font-bold text-neon-green">CodeCanva</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-neon-green">About</a>
          <a href="#features" className="text-neon-green">Features</a>
          <a href="#contact" className="text-neon-green">Contact</a>
          <button className="bg-neon-green text-black px-4 py-2 rounded">Sign In</button>
        </nav>
      </header>

      <main className="text-center z-10 relative">
        <Section>
          <h2 className="text-6xl font-bold mb-4 text-neon-green">Welcome to CodeCanva</h2>
          <TypingAnimation
            className="text-4xl font-bold text-neon-green mb-8"
            text="Create and share your handmade animations with ease."
          />
          <button className="bg-neon-green text-black px-6 py-3 text-lg rounded">
            Get Started
          </button>
        </Section>

        <Section>
          <h2 className="text-5xl font-bold mb-4 text-neon-green">3D Visualization</h2>
          <div className="h-96 bg-black/50 rounded-lg p-4 border border-neon-green">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 10, 5]} />
              <Stars />
              <Box />
              <OrbitControls />
            </Canvas>
          </div>
        </Section>

        <Section>
          <div className="relative flex flex-col items-center h-full w-full max-w-[32rem] overflow-hidden rounded-lg border bg-black p-8 border-neon-green md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-neon-green to-black bg-clip-text text-center text-8xl font-semibold leading-none text-transparent mb-8">
              Globe
            </span>
            <Globe className="top-28" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,255,0,0.2),rgba(0,0,0,0))]" />
          </div>
        </Section>
      </main>
    </div>
  );
}