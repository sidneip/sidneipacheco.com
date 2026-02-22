"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface MorphingMeshProps {
  mousePosition: { x: number; y: number };
}

export function MorphingMesh({ mousePosition }: MorphingMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const gradientColors = useMemo(() => {
    return {
      color1: new THREE.Color("#00d4ff"),
      color2: new THREE.Color("#a855f7"),
      color3: new THREE.Color("#ec4899"),
    };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Slow rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;

    // Mouse parallax effect
    const targetX = mousePosition.x * 0.3;
    const targetY = mousePosition.y * 0.3;
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z += (targetX - meshRef.current.rotation.z) * 0.05;

    // Animate color
    const material = meshRef.current.material as THREE.MeshStandardMaterial;
    if (material.color) {
      const t = (Math.sin(time * 0.5) + 1) / 2;
      material.color.lerpColors(gradientColors.color1, gradientColors.color2, t);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.8, 64, 64]} position={[1.5, 0, 0]}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}
