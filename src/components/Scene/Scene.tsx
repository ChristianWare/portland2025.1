// Scene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../Model/Model";
import styles from "./Scene.module.css";

interface SceneProps {
  useViewportScale?: boolean;
  fixedScale?: [number, number, number];
}

export default function Scene({
  useViewportScale = false,
  fixedScale = [2, 2, 2],
}: SceneProps) {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas}>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset='city' />
        <OrbitControls enableZoom={false} />
        <Model
          thickness={2}
          roughness={0}
          transmission={0.9}
          ior={1}
          chromaticAberration={0.5}
          backside={true}
          useViewportScale={useViewportScale}
          fixedScale={fixedScale}
        />
      </Canvas>
    </div>
  );
}
