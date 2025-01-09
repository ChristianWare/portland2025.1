"use client";

// import { useGLTF } from "@react-three/drei";
// import { useThree, useFrame } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";

export interface ModelProps {
  thickness: number;
  roughness: number;
  transmission: number;
  ior: number;
  chromaticAberration: number;
  backside: boolean;
}
export default function Model({
  thickness,
  roughness,
  transmission,
  ior,
  chromaticAberration,
  backside,
}: ModelProps) {
  const mesh = useRef<THREE.Mesh | null>(null);
  const { nodes } = useGLTF("/3dFiles/torrus.glb");
  // const { viewport } = useThree();

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.02;
  });

  return (
    // <group scale={viewport.width / 4.5 }>
    <>
      <group scale={[2, 2, 2]}>
        <mesh ref={mesh} {...nodes.Torus002}>
          <MeshTransmissionMaterial
            thickness={thickness}
            roughness={roughness}
            transmission={transmission}
            ior={ior}
            chromaticAberration={chromaticAberration}
            backside={backside}
          />{" "}
        </mesh>
      </group>
    </>
  );
}
