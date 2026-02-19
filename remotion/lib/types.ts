import { z } from 'zod';

// --- HeroSequence ---

export const heroSequenceSchema = z.object({
  name: z.string(),
  title: z.string(),
  stack: z.array(z.string()),
});

export type HeroSequenceProps = z.infer<typeof heroSequenceSchema>;

// --- SkillsVisualization ---

export const skillSchema = z.object({
  name: z.string(),
  level: z.number().min(0).max(100),
  color: z.string(),
});

export const skillsVisualizationSchema = z.object({
  skills: z.array(
    z.object({
      category: z.string(),
      items: z.array(skillSchema),
    }),
  ),
});

export type SkillsVisualizationProps = z.infer<
  typeof skillsVisualizationSchema
>;

// --- ProjectPreview ---

export const projectPreviewSchema = z.object({
  name: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  accentColor: z.string(),
});

export type ProjectPreviewProps = z.infer<typeof projectPreviewSchema>;
