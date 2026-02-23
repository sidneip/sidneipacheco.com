// Re-export posts metadata
export { posts, categoryColors } from "./posts";

// Content loader - maps slugs to content
import { content as introducingMagda } from "./introducing-magda";
import { content as whyIStillLoveRuby } from "./why-i-still-love-ruby";
import { content as scalingStartupsInBrazil } from "./scaling-startups-in-brazil";
import { content as rustForWebDevelopers } from "./rust-for-web-developers";

export const blogContent: Record<string, string> = {
  "introducing-magda": introducingMagda,
  "why-i-still-love-ruby": whyIStillLoveRuby,
  "scaling-startups-in-brazil": scalingStartupsInBrazil,
  "rust-for-web-developers": rustForWebDevelopers,
};
