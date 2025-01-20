"use client";

import styles from "./Envelope.module.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./Model";

interface SceneProps {
  useViewportScale?: boolean;
  fixedScale?: [number, number, number];
}

export default function Envelope({
  useViewportScale = false,
  fixedScale = [2, 2, 2],
}: SceneProps) {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas}>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset='city' />
        <OrbitControls enableZoom={false} />
        <group rotation={[Math.PI / 2, 0, 0]}>
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
        </group>
      </Canvas>
    </div>
  );
}
