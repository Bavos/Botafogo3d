import {Text} from '@react-three/drei';

interface OrbitTextProps {
  baseAngle: number;
  radius?: number;
  y?: number;
}

/**
 * Creates an orbital circular text ring with repeated BOTAFOGO labels.
 */
export const OrbitText = ({baseAngle, radius = 2.25, y = 0}: OrbitTextProps) => {
  const labels = Array.from({length: 12}, () => 'BOTAFOGO');

  return (
    <group>
      {labels.map((label, index) => {
        const angle = baseAngle + (index / labels.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Text
            key={`${label}-${index}`}
            position={[x, y, z]}
            rotation={[0, -angle + Math.PI / 2, 0]}
            fontSize={0.28}
            maxWidth={1.8}
            lineHeight={1}
            color="#D4AF37"
            anchorX="center"
            anchorY="middle"
            fontWeight={800}
            characters="BOTAFOG"
          >
            {label}
          </Text>
        );
      })}
    </group>
  );
};
