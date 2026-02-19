'use client';

import React, { useMemo } from 'react';
import { Player } from '@remotion/player';
import { ProjectPreview } from '@remotion/compositions/ProjectPreview';
import {
  COLORS,
  FPS,
  HERO_WIDTH,
  HERO_HEIGHT,
  PROJECT_DURATION_FRAMES,
} from '@remotion/lib/constants';
import type { ProjectPreviewProps } from '@remotion/lib/types';

interface ProjectPlayerProps {
  name: string;
  description: string;
  stack: string[];
  accentColor?: string;
  className?: string;
}

export const ProjectPlayer: React.FC<ProjectPlayerProps> = ({
  name,
  description,
  stack,
  accentColor = COLORS.accent,
  className,
}) => {
  const inputProps: ProjectPreviewProps = useMemo(
    () => ({
      name,
      description,
      stack,
      accentColor,
    }),
    [name, description, stack, accentColor],
  );

  return (
    <div className={className} style={{ position: 'relative' }}>
      <Player
        component={ProjectPreview}
        inputProps={inputProps}
        durationInFrames={PROJECT_DURATION_FRAMES}
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
