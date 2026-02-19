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
import type { ProjectPreviewProps } from '../lib/types';

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  name,
  description,
  stack,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ---- Card slide-in from right ----
  const slideProgress = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 70, mass: 0.7 },
  });

  const cardX = interpolate(slideProgress, [0, 1], [400, 0], {
    extrapolateRight: 'clamp',
  });

  const cardOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // ---- Typewriter for project name ----
  const nameStart = 12;
  const nameTypeFrames = 25;
  const nameProgress = interpolate(
    frame,
    [nameStart, nameStart + nameTypeFrames],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );
  const nameCharCount = Math.floor(nameProgress * name.length);
  const typedName = name.slice(0, nameCharCount);

  // ---- Cursor for name typing ----
  const isNameTyping = frame >= nameStart && frame < nameStart + nameTypeFrames;
  const cursorOpacity = isNameTyping
    ? interpolate(frame % 30, [0, 14, 15, 29], [1, 1, 0, 0], {
        extrapolateRight: 'clamp',
      })
    : 0;

  // ---- Description fade-in ----
  const descStart = nameStart + nameTypeFrames + 5;
  const descOpacity = interpolate(frame, [descStart, descStart + 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const descY = interpolate(frame, [descStart, descStart + 15], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // ---- Stack badges timing ----
  const stackStart = descStart + 12;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONTS.sans,
      }}
    >
      {/* Card */}
      <div
        style={{
          width: 780,
          padding: '48px 56px',
          backgroundColor: COLORS.muted,
          borderRadius: 16,
          border: `1px solid ${COLORS.border}`,
          boxShadow: `0 20px 60px ${accentColor}15`,
          transform: `translateX(${cardX}px)`,
          opacity: cardOpacity,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent bar at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)`,
          }}
        />

        {/* Project name with typewriter */}
        <Sequence from={nameStart} premountFor={8}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: COLORS.foreground,
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            {typedName}
            <span
              style={{
                display: 'inline-block',
                width: 3,
                height: 32,
                backgroundColor: accentColor,
                marginLeft: 2,
                verticalAlign: 'text-bottom',
                opacity: cursorOpacity,
              }}
            />
          </div>
        </Sequence>

        {/* Description */}
        <Sequence from={descStart} premountFor={8}>
          <div
            style={{
              fontSize: 20,
              color: '#aaa',
              lineHeight: 1.6,
              marginBottom: 28,
              opacity: descOpacity,
              transform: `translateY(${descY}px)`,
              maxWidth: 650,
            }}
          >
            {description}
          </div>
        </Sequence>

        {/* Stack badges */}
        <Sequence from={stackStart} premountFor={8}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            {stack.map((tech, i) => {
              const badgeDelay = stackStart + i * 5;

              const badgeSpring = spring({
                frame: Math.max(0, frame - badgeDelay),
                fps,
                config: { damping: 14, stiffness: 100, mass: 0.4 },
              });

              const badgeOpacity = interpolate(
                frame,
                [badgeDelay, badgeDelay + 8],
                [0, 1],
                { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
              );

              const badgeY = interpolate(badgeSpring, [0, 1], [20, 0], {
                extrapolateRight: 'clamp',
              });

              return (
                <span
                  key={tech}
                  style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    fontSize: 14,
                    fontFamily: FONTS.mono,
                    color: accentColor,
                    backgroundColor: `${accentColor}12`,
                    border: `1px solid ${accentColor}30`,
                    borderRadius: 8,
                    opacity: badgeOpacity,
                    transform: `translateY(${badgeY}px)`,
                  }}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
