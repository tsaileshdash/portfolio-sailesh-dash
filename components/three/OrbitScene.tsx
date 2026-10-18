'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, TorusKnot } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Core() {
  const mesh = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.12;
    mesh.current.rotation.y += delta * 0.22;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.45}>
      <TorusKnot ref={mesh} args={[0.92, 0.24, 160, 24, 2, 5]} scale={1.12}>
        <MeshDistortMaterial color="#7c7cff" emissive="#3428a8" emissiveIntensity={1.1} roughness={0.18} metalness={0.72} distort={0.22} speed={1.8} />
      </TorusKnot>
    </Float>
  );
}

export default function OrbitScene() {
  return (
    <div className="scene-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 44 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 2, 4]} intensity={24} color="#6ce8ff" />
        <pointLight position={[-3, -2, 1]} intensity={20} color="#8b5cf6" />
        <Core />
        <TorusKnot args={[1.42, 0.008, 120, 8, 1, 3]} rotation={[0.4, 0.3, 0]}>
          <meshBasicMaterial color="#65d9ff" transparent opacity={0.48} />
        </TorusKnot>
        <Sparkles count={54} scale={4.8} size={2.2} speed={0.25} color="#a8b5ff" />
      </Canvas>
    </div>
  );
}
