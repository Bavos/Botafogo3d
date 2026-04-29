import {Composition} from 'remotion';
import {BotafogoScene} from './BotafogoScene';

/**
 * Root with all Remotion compositions.
 */
export const RemotionRoot = () => {
  return (
    <Composition
      id="Botafogo3d"
      component={BotafogoScene}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
