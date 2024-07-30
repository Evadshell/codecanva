import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

// Extend THREE namespace
extend({ BoxBufferGeometry: THREE.BufferGeometry });

const Box = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
};

export default Box;
