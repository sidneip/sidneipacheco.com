'use client';

import React, { useMemo } from 'react';
import { Player } from '@remotion/player';
import { HeroSequence } from '@remotion/compositions/HeroSequence';
import {
  FPS,
  HERO_WIDTH,
  HERO_HEIGHT,
  HERO_DURATION_FRAMES,
} from '@remotion/lib/constants';
import type { HeroSequenceProps } from '@remotion/lib/types';

interface HeroPlayerProps {
  className?: string;
}

const defaultHeroProps: HeroSequenceProps = {
  name: 'sidnei pacheco',
  title: 'Senior Software Engineer',
  stack: ['Ruby', 'TypeScript', 'Go', 'React', 'Rails', 'AWS'],
};

export const HeroPlayer: React.FC<HeroPlayerProps> = ({ className }) => {
  const inputProps = useMemo(() => defaultHeroProps, []);

  return (
    <div className={className} style={{ position: 'relative' }}>
      <Player
        component={HeroSequence}
        inputProps={inputProps}
        durationInFrames={HERO_DURATION_FRAMES}
        compositionWidth={HERO_WIDTH}
        compositionHeight={HERO_HEIGHT}
        fps={FPS}
        autoPlay
        loop
        controls={false}
        style={{
          width: '100%',
          aspectRatio: `${HERO_WIDTH} / ${HERO_HEIGHT}`,
        }}
      />
    </div>
  );
};
