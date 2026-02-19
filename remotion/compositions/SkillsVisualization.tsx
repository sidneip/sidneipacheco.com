import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';
import { COLORS, FONTS } from '../lib/constants';
import type { SkillsVisualizationProps } from '../lib/types';

// ---- Single skill bar ----

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delayFrames: number;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  level,
  color,
  delayFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const barProgress = spring({
    frame: Math.max(0, frame - delayFrames),
    fps,
    config: { damping: 18, stiffness: 60, mass: 0.6 },
  });

  const labelOpacity = interpolate(
    frame,
    [delayFrames, delayFrames + 8],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  const barWidth = barProgress * level;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 10,
        opacity: labelOpacity,
      }}
    >
      {/* Skill name */}
      <div
        style={{
          width: 140,
          fontFamily: FONTS.mono,
          fontSize: 14,
          color: COLORS.foreground,
          textAlign: 'right',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </div>

      {/* Bar track */}
      <div
        style={{
          flex: 1,
          height: 20,
          backgroundColor: COLORS.muted,
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Bar fill */}
        <div
          style={{
            width: `${barWidth}%`,
            height: '100%',
            borderRadius: 4,
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            position: 'relative',
          }}
        >
          {/* Subtle shine effect */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
              borderRadius: '4px 4px 0 0',
            }}
          />
        </div>
      </div>

      {/* Percentage */}
      <div
        style={{
          width: 44,
          fontFamily: FONTS.mono,
          fontSize: 13,
          color: '#888',
          textAlign: 'left',
        }}
      >
        {Math.round(barWidth)}%
      </div>
    </div>
  );
};

// ---- Category section ----

interface CategorySectionProps {
  category: string;
  items: { name: string; level: number; color: string }[];
  baseDelay: number;
  staggerDelay: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  items,
  baseDelay,
  staggerDelay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerScale = spring({
    frame: Math.max(0, frame - baseDelay),
    fps,
    config: { damping: 14, stiffness: 90, mass: 0.5 },
  });

  const headerOpacity = interpolate(
    frame,
    [baseDelay, baseDelay + 10],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  return (
    <div style={{ flex: 1, minWidth: 300 }}>
      {/* Category header */}
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 18,
          fontWeight: 700,
          color: COLORS.accent,
          marginBottom: 16,
          opacity: headerOpacity,
          transform: `scale(${headerScale})`,
          transformOrigin: 'left center',
          textTransform: 'uppercase',
          letterSpacing: 2,
        }}
      >
        {category}
      </div>

      {/* Skill bars */}
      {items.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={skill.color}
          delayFrames={baseDelay + 8 + i * staggerDelay}
        />
      ))}
    </div>
  );
};

// ---- Main composition ----

export const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({
  skills,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title entrance
  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 70, mass: 0.6 },
  });

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const titleY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: 'clamp',
  });

  // Stagger base delays per category
  const categoryBaseDelays = [15, 35, 55];
  const staggerPerBar = 5;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        padding: '48px 60px',
        fontFamily: FONTS.sans,
      }}
    >
      {/* Section title */}
      <Sequence from={0} premountFor={5}>
        <div
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: COLORS.foreground,
            marginBottom: 40,
            opacity: titleOpacity * titleProgress,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Technical Skills
        </div>
      </Sequence>

      {/* Skills grid - 3 columns */}
      <div
        style={{
          display: 'flex',
          gap: 48,
          flex: 1,
        }}
      >
        {skills.map((section, sectionIdx) => (
          <Sequence
            key={section.category}
            from={categoryBaseDelays[sectionIdx] ?? 15 + sectionIdx * 20}
            premountFor={10}
          >
            <CategorySection
              category={section.category}
              items={section.items}
              baseDelay={categoryBaseDelays[sectionIdx] ?? 15 + sectionIdx * 20}
              staggerDelay={staggerPerBar}
            />
          </Sequence>
        ))}
      </div>
    </AbsoluteFill>
  );
};
