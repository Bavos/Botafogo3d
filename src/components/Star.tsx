import React, {useMemo} from 'react';
import * as THREE from 'three';

interface StarProps {
  rotationY: number;
}

/**
 * 3D 5-point star built from a custom Shape + ExtrudeGeometry.
 */
export const Star: React.FC<StarProps> = ({rotationY}) => {
  const geometry = useMemo(() => {
    const outerRadius = 1;
    const innerRadius = 0.45;
    const shape = new THREE.Shape();

    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
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

    const extrudeGeometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.25,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    });

    extrudeGeometry.center();
    return extrudeGeometry;
  }, []);

  return (
    <mesh geometry={geometry} rotation={[0, rotationY, 0]}>
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#222222"
        emissiveIntensity={0.45}
        metalness={0.2}
        roughness={0.35}
      />
    </mesh>
  );
};
