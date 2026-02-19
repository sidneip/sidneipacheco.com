import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { HeroSequence } from './compositions/HeroSequence';
import { SkillsVisualization } from './compositions/SkillsVisualization';
import { ProjectPreview } from './compositions/ProjectPreview';
import {
  heroSequenceSchema,
  skillsVisualizationSchema,
  projectPreviewSchema,
} from './lib/types';
import {
  FPS,
  HERO_WIDTH,
  HERO_HEIGHT,
  HERO_DURATION_FRAMES,
  SKILLS_DURATION_FRAMES,
  PROJECT_DURATION_FRAMES,
  COLORS,
} from './lib/constants';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroSequence"
        component={HeroSequence}
        durationInFrames={HERO_DURATION_FRAMES}
        fps={FPS}
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
        schema={heroSequenceSchema}
        defaultProps={{
          name: 'sidnei pacheco',
          title: 'Senior Software Engineer',
          stack: ['Ruby', 'TypeScript', 'Go', 'React', 'Rails', 'AWS'],
        }}
      />

      <Composition
        id="SkillsVisualization"
        component={SkillsVisualization}
        durationInFrames={SKILLS_DURATION_FRAMES}
        fps={FPS}
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
        schema={skillsVisualizationSchema}
        defaultProps={{
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
        }}
      />

      <Composition
        id="ProjectPreview"
        component={ProjectPreview}
        durationInFrames={PROJECT_DURATION_FRAMES}
        fps={FPS}
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
        schema={projectPreviewSchema}
        defaultProps={{
          name: 'Example Project',
          description:
            'A full-stack application built with modern technologies and best practices.',
          stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
          accentColor: COLORS.accent,
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
