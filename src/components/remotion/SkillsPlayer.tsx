'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { PlayerRef } from '@remotion/player';
import { Player } from '@remotion/player';
import { SkillsVisualization } from '@remotion/compositions/SkillsVisualization';
import {
  COLORS,
  FPS,
  HERO_WIDTH,
  HERO_HEIGHT,
  SKILLS_DURATION_FRAMES,
} from '@remotion/lib/constants';
import type { SkillsVisualizationProps } from '@remotion/lib/types';

interface SkillsPlayerProps {
  className?: string;
}

const defaultSkillsProps: SkillsVisualizationProps = {
  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'Ruby', level: 90, color: COLORS.accent },
        { name: 'TypeScript', level: 95, color: COLORS.accent },
        { name: 'Go', level: 70, color: COLORS.accent },
        { name: 'Rust', level: 50, color: COLORS.accent },
        { name: 'Python', level: 75, color: COLORS.accent },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'Rails', level: 95, color: COLORS.accent },
        { name: 'React', level: 90, color: COLORS.accent },
        { name: 'Next.js', level: 85, color: COLORS.accent },
        { name: 'React Native', level: 80, color: COLORS.accent },
        { name: 'Expo', level: 75, color: COLORS.accent },
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        { name: 'AWS', level: 90, color: COLORS.accent },
        { name: 'Kubernetes', level: 80, color: COLORS.accent },
        { name: 'Docker', level: 95, color: COLORS.accent },
        { name: 'Redis', level: 85, color: COLORS.accent },
        { name: 'Cassandra', level: 70, color: COLORS.accent },
      ],
    },
  ],
};

export const SkillsPlayer: React.FC<SkillsPlayerProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<PlayerRef>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasPlayed = useRef(false);

  const inputProps = useMemo(() => defaultSkillsProps, []);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry?.isIntersecting && !hasPlayed.current) {
        setIsVisible(true);
        hasPlayed.current = true;
      }
    },
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  // Play when visible
  useEffect(() => {
    if (isVisible && playerRef.current) {
      playerRef.current.play();
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative' }}>
      <Player
        ref={playerRef}
        component={SkillsVisualization}
        inputProps={inputProps}
        durationInFrames={SKILLS_DURATION_FRAMES}
        compositionWidth={HERO_WIDTH}
        compositionHeight={HERO_HEIGHT}
        fps={FPS}
        autoPlay={false}
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
