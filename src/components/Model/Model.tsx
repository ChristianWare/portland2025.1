"use client";

// import { useGLTF } from "@react-three/drei";
// import { useThree, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
// import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { Float } from "@react-three/drei";

export interface ModelProps {
  thickness: number;
  roughness: number;
  transmission: number;
  ior: number;
  chromaticAberration: number;
  backside: boolean;
  useViewportScale?: boolean;
  fixedScale?: [number, number, number];
}

export default function Model({
  thickness,
  roughness,
  transmission,
  ior,
  chromaticAberration,
  backside,
  useViewportScale = false,
  fixedScale = [3, 3, 3],
}: ModelProps) {
  const mesh = useRef<THREE.Mesh | null>(null);
  const { nodes } = useGLTF("/3dFiles/usa_map_-_low_poly.glb");
  const { viewport } = useThree();

  // useFrame(() => {
  //   if (!mesh.current) return;
  //   mesh.current.rotation.y += 0.01;
  // });

  const groupScale = useViewportScale ? viewport.width / 4.5 : fixedScale;

  return (
    <Float>
      <group scale={groupScale} position={[-1, 2, 0]}>
        <mesh ref={mesh} {...nodes.Arizona_0}>
          <MeshTransmissionMaterial
            thickness={thickness}
            roughness={roughness}
            transmission={transmission}
            ior={ior}
            chromaticAberration={chromaticAberration}
            backside={backside}
          />
        </mesh>
      </group>
    </Float>
  );
}
