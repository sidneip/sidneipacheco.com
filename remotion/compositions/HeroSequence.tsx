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
import type { HeroSequenceProps } from '../lib/types';

// ---- Particle background ----

const PARTICLE_COUNT = 18;

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  // Deterministic seed-like approach using index math
  for (let i = 0; i < count; i++) {
    particles.push({
      x: ((i * 73 + 17) % 100) / 100,
      y: ((i * 47 + 31) % 100) / 100,
      size: 2 + (i % 4),
      speedX: ((i * 13) % 7) - 3,
      speedY: ((i * 11) % 5) - 2,
      opacity: 0.15 + ((i % 5) * 0.05),
    });
  }
  return particles;
}

const particles = generateParticles(PARTICLE_COUNT);

const ParticleBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill>
      {particles.map((p, i) => {
        // Use sin/cos for gentle floating motion
        const t = (frame / durationInFrames) * Math.PI * 2;
        const offsetX = Math.sin(t + i * 0.8) * p.speedX * 20;
        const offsetY = Math.cos(t + i * 0.6) * p.speedY * 15;
        const cx = p.x * width + offsetX;
        const cy = p.y * height + offsetY;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: cx,
              top: cy,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: COLORS.accent,
              opacity: p.opacity,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ---- Blinking cursor ----

const Cursor: React.FC<{ visible: boolean }> = ({ visible }) => {
  const frame = useCurrentFrame();
  // Blink every ~15 frames (0.5s at 30fps)
  const cursorOpacity = visible
    ? interpolate(frame % 30, [0, 14, 15, 29], [1, 1, 0, 0], {
        extrapolateRight: 'clamp',
      })
    : 0;

  return (
    <span
      style={{
        display: 'inline-block',
        width: 10,
        height: 22,
        backgroundColor: COLORS.accent,
        marginLeft: 2,
        verticalAlign: 'text-bottom',
        opacity: cursorOpacity,
      }}
    />
  );
};

// ---- Terminal chrome ----

const TerminalChrome: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 16px',
        backgroundColor: COLORS.muted,
        borderBottom: `1px solid ${COLORS.border}`,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#ff5f57',
        }}
      />
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#ffbd2e',
        }}
      />
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#28c840',
        }}
      />
      <span
        style={{
          flex: 1,
          textAlign: 'center',
          fontFamily: FONTS.mono,
          fontSize: 13,
          color: '#666',
          marginRight: 44, // offset for dots width to center text
        }}
      >
        sidnei@dev ~ %
      </span>
    </div>
  );
};

// ---- Main composition ----

export const HeroSequence: React.FC<HeroSequenceProps> = ({
  name,
  title,
  stack,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ---- Typing timings ----
  const line1Text = `> ${name}`;
  const line1Start = 10;
  const line1TypeFrames = 30; // 1 second to type

  const line2Text = title;
  const line2Start = line1Start + line1TypeFrames + 10;
  const line2TypeFrames = 35;

  const line3Text = '15+ years \u00B7 CTO \u00B7 Founder';
  const line3Start = line2Start + line2TypeFrames + 8;
  const line3TypeFrames = 30;

  const stackStart = line3Start + line3TypeFrames + 10;

  // ---- Typed text helpers ----
  const getTypedText = (
    text: string,
    startFrame: number,
    typeFrames: number,
  ): string => {
    const progress = interpolate(frame, [startFrame, startFrame + typeFrames], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const charCount = Math.floor(progress * text.length);
    return text.slice(0, charCount);
  };

  // Determine which line is actively typing (for cursor placement)
  const isLine1Typing = frame >= line1Start && frame < line1Start + line1TypeFrames;
  const isLine2Typing = frame >= line2Start && frame < line2Start + line2TypeFrames;
  const isLine3Typing = frame >= line3Start && frame < line3Start + line3TypeFrames;
  const showCursorOnLine =
    isLine1Typing ? 1 : isLine2Typing ? 2 : isLine3Typing ? 3 : 4;

  // ---- Terminal entrance spring ----
  const terminalScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80, mass: 0.8 },
  });

  const terminalOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONTS.mono,
      }}
    >
      <ParticleBackground />

      {/* Terminal window */}
      <div
        style={{
          width: 900,
          transform: `scale(${terminalScale})`,
          opacity: terminalOpacity,
          borderRadius: 12,
          border: `1px solid ${COLORS.border}`,
          overflow: 'hidden',
          boxShadow: '0 25px 80px rgba(0, 212, 255, 0.08)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <TerminalChrome />

        <div
          style={{
            padding: '32px 40px',
            backgroundColor: COLORS.background,
            minHeight: 280,
          }}
        >
          {/* Line 1: name with prompt */}
          <Sequence from={line1Start} premountFor={10}>
            <div
              style={{
                fontSize: 28,
                color: COLORS.accent,
                marginBottom: 16,
                lineHeight: 1.4,
              }}
            >
              {getTypedText(line1Text, line1Start, line1TypeFrames)}
              {showCursorOnLine === 1 && <Cursor visible />}
            </div>
          </Sequence>

          {/* Line 2: title */}
          <Sequence from={line2Start} premountFor={10}>
            <div
              style={{
                fontSize: 36,
                color: COLORS.foreground,
                fontFamily: FONTS.sans,
                fontWeight: 700,
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              {getTypedText(line2Text, line2Start, line2TypeFrames)}
              {showCursorOnLine === 2 && <Cursor visible />}
            </div>
          </Sequence>

          {/* Line 3: subtitle */}
          <Sequence from={line3Start} premountFor={10}>
            <div
              style={{
                fontSize: 22,
                color: '#888',
                marginBottom: 28,
                lineHeight: 1.4,
              }}
            >
              {getTypedText(line3Text, line3Start, line3TypeFrames)}
              {showCursorOnLine === 3 && <Cursor visible />}
            </div>
          </Sequence>

          {/* Line 4: stack items */}
          <Sequence from={stackStart} premountFor={10}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                alignItems: 'center',
              }}
            >
              {stack.map((item, i) => {
                const itemDelay = stackStart + i * 6;
                const itemOpacity = interpolate(
                  frame,
                  [itemDelay, itemDelay + 10],
                  [0, 1],
                  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
                );
                const itemY = interpolate(
                  frame,
                  [itemDelay, itemDelay + 10],
                  [12, 0],
                  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
                );

                return (
                  <React.Fragment key={item}>
                    {i > 0 && (
                      <span
                        style={{
                          color: '#555',
                          fontSize: 18,
                          opacity: itemOpacity,
                        }}
                      >
                        {'\u2022'}
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: 20,
                        color: COLORS.accent,
                        opacity: itemOpacity,
                        transform: `translateY(${itemY}px)`,
                        display: 'inline-block',
                        padding: '4px 14px',
                        backgroundColor: 'rgba(0, 212, 255, 0.08)',
                        borderRadius: 6,
                        border: '1px solid rgba(0, 212, 255, 0.15)',
                      }}
                    >
                      {item}
                    </span>
                  </React.Fragment>
                );
              })}
              {showCursorOnLine === 4 && <Cursor visible />}
            </div>
          </Sequence>
        </div>
      </div>
    </AbsoluteFill>
  );
};
