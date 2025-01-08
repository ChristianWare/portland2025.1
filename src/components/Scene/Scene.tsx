// Scene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "../Model/Model";
import styles from "./Scene.module.css";

export default function Scene() {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas}>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset='city' />
        {/* <Model thickness={3.5} roughness={0} transmission={1} ior={1.1} chromaticAberration={0.70} backside={true} /> */}
        <Model
          thickness={2}
          roughness={0}
          transmission={0.9}
          ior={1}
          chromaticAberration={0.5}
          backside={true}
        />
      </Canvas>
    </div>
  );
}
