import React, { useMemo } from "react";
import * as THREE from "three";

type StarProps = {
  rotationY: number;
};

const createStarShape = (): THREE.Shape => {
  const shape = new THREE.Shape();
  const spikes = 5;
  const outerRadius = 1;
  const innerRadius = 0.45;

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }

  shape.closePath();
  return shape;
};

export const Star: React.FC<StarProps> = ({ rotationY }) => {
  const geometry = useMemo(() => {
    const shape = createStarShape();
    const extrude = new THREE.ExtrudeGeometry(shape, {
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 4,
    });

    extrude.center();
    return extrude;
  }, []);

  return (
    <mesh geometry={geometry} rotation={[0, rotationY, 0]}>
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#DCDCDC"
        emissiveIntensity={0.3}
        metalness={0.2}
        roughness={0.35}
      />
    </mesh>
  );
};
