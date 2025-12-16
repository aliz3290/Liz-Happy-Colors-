"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.rotation.x = Math.cos(t / 4) / 2;
            meshRef.current.rotation.y = Math.sin(t / 4) / 2;
            meshRef.current.rotation.z = Math.sin(t / 4) / 2;
            meshRef.current.position.y = Math.sin(t / 1.5) / 10;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 32, 32]} ref={meshRef} scale={2}>
                <MeshDistortMaterial
                    color="#C4B5FD"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.8}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </Sphere>
            {/* Floating particles around the orb */}
            <group>
                {[...Array(5)].map((_, i) => (
                    <Float key={i} speed={3} rotationIntensity={2} floatIntensity={4} position={[
                        (Math.random() - 0.5) * 6,
                        (Math.random() - 0.5) * 6,
                        (Math.random() - 0.5) * 6
                    ]}>
                        <Sphere args={[0.1, 16, 16]}>
                            <meshStandardMaterial
                                color={[
                                    "#FF6E6E", // Coral
                                    "#4AC9C1", // Teal
                                    "#F6D860", // Yellow
                                    "#6CC8FF", // Sky Blue
                                    "#D6B46A"  // Gold
                                ][i % 5]}
                                emissive={[
                                    "#FF6E6E",
                                    "#4AC9C1",
                                    "#F6D860",
                                    "#6CC8FF",
                                    "#D6B46A"
                                ][i % 5]}
                                emissiveIntensity={2}
                            />
                        </Sphere>
                    </Float>
                ))}
            </group>
        </Float>
    );
}

export default function HeroOrb() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#D6B46A" />
                <pointLight position={[5, 5, 5]} intensity={0.8} color="#60A5FA" />
                <Orb />
                <Environment preset="studio" />
            </Canvas>
        </div>
    );
}
