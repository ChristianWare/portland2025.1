"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import styles from "./Scene2.module.css";

interface SceneProps {
  useViewportScale?: boolean;
  fixedScale?: [number, number, number];
}
export default function Scene2({
  useViewportScale = false,
  fixedScale = [2, 2, 2],
}: SceneProps) {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas}>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset='city' />

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
