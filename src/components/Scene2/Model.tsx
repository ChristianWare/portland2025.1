"use client";

// import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";

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
  fixedScale = [2, 2, 2],
}: ModelProps) {
  const mesh = useRef<THREE.Mesh | null>(null);
  const { nodes } = useGLTF("/3dFiles/foot_ball.glb");
  const { viewport } = useThree();

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.01; // spins horizontally
  });

  const groupScale = useViewportScale ? viewport.width / 4.5 : fixedScale;

  return (
    <Float>
      <group scale={groupScale}>
        <mesh ref={mesh} {...nodes.Object_4}>
          <MeshTransmissionMaterial
            thickness={thickness}
            roughness={roughness}
            transmission={transmission}
            ior={ior}
            chromaticAberration={chromaticAberration}
            backside={backside}
          />
        </mesh>
        {/* <mesh ref={mesh} {...nodes.pPlane1_lambert1_0}>
          <MeshTransmissionMaterial
            thickness={thickness}
            roughness={roughness}
            transmission={transmission}
            ior={ior}
            chromaticAberration={chromaticAberration}
            backside={backside}
          />
        </mesh> */}
      </group>
    </Float>
  );
}
