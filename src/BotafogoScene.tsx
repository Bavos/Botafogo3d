import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { PerspectiveCamera } from "@react-three/drei";
import { Star } from "./components/Star";
import { OrbitText } from "./components/OrbitText";

export const BotafogoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = frame / 30;

  const starRotationY = progress * 1.25;
  const orbitRotation = progress * 0.9;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <ThreeCanvas width={1920} height={1080}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />
        <pointLight position={[-2, -1, 3]} intensity={0.35} />

        <Star rotationY={starRotationY} />
        <OrbitText orbitRotation={orbitRotation} />
      </ThreeCanvas>
    </AbsoluteFill>
  );
};
