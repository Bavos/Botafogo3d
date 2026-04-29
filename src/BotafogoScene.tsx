import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {Star} from './components/Star';
import {OrbitText} from './components/OrbitText';

/**
 * Main 3D scene for the Botafogo composition.
 */
export const BotafogoScene = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  // Smooth normalized progress [0..1].
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const starRotationY = progress * Math.PI * 4;
  const orbitRotation = progress * Math.PI * 4;

  return (
    <AbsoluteFill style={{backgroundColor: '#000000'}}>
      <ThreeCanvas camera={{position: [0, 0, 5], fov: 45}}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[2, 3, 4]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-3, -1, -2]} intensity={0.35} color="#9bb3ff" />

        <Star rotationY={starRotationY} />
        <OrbitText baseAngle={orbitRotation} />
      </ThreeCanvas>
    </AbsoluteFill>
  );
};
