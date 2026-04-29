import { Composition } from "remotion";
import { BotafogoScene } from "./BotafogoScene";

export const Root: React.FC = () => {
  return (
    <Composition
      id="BotafogoScene"
      component={BotafogoScene}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
