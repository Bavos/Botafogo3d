import React from "react";
import { Text } from "@react-three/drei";

type OrbitTextProps = {
  orbitRotation: number;
};

export const OrbitText: React.FC<OrbitTextProps> = ({ orbitRotation }) => {
  const count = 20;
  const radius = 2.3;

  return (
    <group rotation={[0, 0, orbitRotation * 0.25]}>
      {Array.from({ length: count }, (_, index) => {
        const angle = (index / count) * Math.PI * 2 + orbitRotation;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <Text
            key={`botafogo-${index}`}
            position={[x, y, 0]}
            color="#D4AF37"
            fontSize={0.2}
            fontWeight="bold"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.0035}
            outlineColor="#6B571B"
          >
            BOTAFOGO
          </Text>
        );
      })}
    </group>
  );
};
