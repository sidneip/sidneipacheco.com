import { terminalContent } from "@content/terminal";
import type { Command, CommandResult } from "./types";

const createCommand = (
  name: string,
  aliases: string[],
  description: string,
  execute: () => CommandResult
): Command => ({
  name,
  aliases,
  description,
  execute,
});

export const commands: Command[] = [
  createCommand("help", ["h", "?"], "Show available commands", () => ({
    output: [
      "",
      "Available Commands:",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "  help     (h, ?)      Show this help message",
      "  about    (whoami)    About me",
      "  skills               Technical skills",
      "  projects (work)      My projects",
      "  contact  (email)     Contact information",
      "  experience (exp)     Work experience",
      "  social   (links)     Social media links",
      "  clear    (cls)       Clear terminal",
      "",
      "Try some easter eggs: sudo, ls, cat, neofetch",
      "",
    ],
  })),

  createCommand("about", ["whoami"], "About me", () => ({
    output: [
      terminalContent.about.ascii,
      ...terminalContent.about.bio,
      "",
    ],
  })),

  createCommand("skills", [], "List technical skills", () => {
    const lines: string[] = [
      "",
      "Technical Skills",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
    ];

    terminalContent.skills.categories.forEach((category) => {
      lines.push(`  ${category.name}:`);
      lines.push(`    ${category.items.join(" | ")}`);
      lines.push("");
    });

    return { output: lines };
  }),

  createCommand("projects", ["work"], "List projects", () => {
    const lines: string[] = [
      "",
      "Projects & Work",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
    ];

    terminalContent.projects.forEach((project) => {
      lines.push(`  ${project.name}`);
      lines.push(`    Role: ${project.role}`);
      lines.push(`    Period: ${project.period}`);
      lines.push(`    ${project.description}`);
      lines.push("");
    });

    return { output: lines };
  }),

  createCommand("contact", ["email"], "Contact information", () => ({
    output: [
      "",
      "Contact Information",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      `  Email:        ${terminalContent.contact.email}`,
      `  Location:     ${terminalContent.contact.location}`,
      `  Status:       ${terminalContent.contact.availability}`,
      "",
    ],
  })),

  createCommand("experience", ["exp"], "Work experience", () => {
    const lines: string[] = [
      "",
      "Work Experience",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
    ];

    terminalContent.projects.forEach((project) => {
      lines.push(`  ${project.period.padEnd(16)} ${project.role} @ ${project.name}`);
    });

    lines.push("");
    lines.push("  Total: 15+ years of experience");
    lines.push("  Startups: 5+ launched");
    lines.push("  Teams: 50+ engineers led");
    lines.push("");

    return { output: lines };
  }),

  createCommand("social", ["links"], "Social media links", () => ({
    output: [
      "",
      "Social Links",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      `  GitHub:   ${terminalContent.social.github}`,
      `  LinkedIn: ${terminalContent.social.linkedin}`,
      `  Twitter:  ${terminalContent.social.twitter}`,
      "",
    ],
  })),

  createCommand("clear", ["cls"], "Clear terminal", () => ({
    output: [],
  })),
];

// Easter egg commands
export const easterEggCommands: Command[] = [
  createCommand("sudo", [], "", () => ({
    output: ["", "Nice try! You don't have sudo privileges here. 🔒", ""],
    isError: true,
  })),

  createCommand("rm", [], "", () => ({
    output: ["", "This portfolio is rm-proof 🛡️", ""],
    isError: true,
  })),

  createCommand("ls", [], "", () => ({
    output: [
      "",
      "drwxr-xr-x  about/",
      "drwxr-xr-x  projects/",
      "drwxr-xr-x  skills/",
      "drwxr-xr-x  blog/",
      "drwxr-xr-x  uses/",
      "-rw-r--r--  README.md",
      "",
    ],
  })),

  createCommand("cat", [], "", () => ({
    output: ["", "🐱 Meow!", ""],
  })),

  createCommand("pwd", [], "", () => ({
    output: ["", "/home/visitor/portfolio", ""],
  })),

  createCommand("cd", [], "", () => ({
    output: ["", "You're already home. 🏠", ""],
  })),

  createCommand("exit", ["quit", "q"], "", () => ({
    output: ["", "You can't escape that easily! Try exploring more commands.", ""],
  })),

  createCommand("vim", ["vi", "nano", "emacs"], "", () => ({
    output: ["", "Editor wars? Let's keep the peace here. 🕊️", ""],
  })),

  createCommand("git", [], "", () => ({
    output: [
      "",
      "git status",
      "On branch main",
      "Your career is up to date with 'origin/success'.",
      "",
      "nothing to commit, working tree clean",
      "",
    ],
  })),

  createCommand("node", ["npm", "yarn", "pnpm", "bun"], "", () => ({
    output: ["", "Runtime detected. Running portfolio at 60fps. ⚡", ""],
  })),

  createCommand("neofetch", ["screenfetch", "fastfetch"], "", () => {
    const info = terminalContent.neofetch;
    const ascii = `
        ⬡⬡⬡⬡⬡⬡⬡
      ⬡⬡       ⬡⬡
    ⬡⬡    ██    ⬡⬡
   ⬡⬡    ████    ⬡⬡
   ⬡⬡   ██████   ⬡⬡
    ⬡⬡    ████    ⬡⬡
      ⬡⬡    ██    ⬡⬡
        ⬡⬡       ⬡⬡
          ⬡⬡⬡⬡⬡⬡⬡`;

    const asciiLines = ascii.split("\n");
    const infoLines = [
      "visitor@sidneipacheco.com",
      "━━━━━━━━━━━━━━━━━━━━━━━",
      `OS: ${info.os}`,
      `Host: ${info.host}`,
      `Kernel: ${info.kernel}`,
      `Uptime: ${info.uptime}`,
      `Packages: ${info.packages}`,
      `Shell: ${info.shell}`,
      `Theme: ${info.theme}`,
      `Icons: ${info.icons}`,
      `Terminal: ${info.terminal}`,
    ];

    const output: string[] = [""];
    const maxAsciiWidth = Math.max(...asciiLines.map((l) => l.length));

    for (let i = 0; i < Math.max(asciiLines.length, infoLines.length); i++) {
      const asciiPart = (asciiLines[i] || "").padEnd(maxAsciiWidth + 4);
      const infoPart = infoLines[i] || "";
      output.push(`  ${asciiPart}${infoPart}`);
    }

    output.push("");
    return { output };
  }),

  createCommand("hello", ["hi", "hey"], "", () => ({
    output: ["", "Hello there! 👋 Welcome to my portfolio.", ""],
  })),

  createCommand("coffee", ["cafe"], "", () => ({
    output: [
      "",
      "  ( (",
      "   ) )",
      " ........",
      " |      |]",
      " \\      /",
      "  `----'",
      "",
      "Here's your coffee! ☕",
      "",
    ],
  })),

  createCommand("matrix", [], "", () => ({
    output: [
      "",
      "Wake up, Neo...",
      "The Matrix has you...",
      "Follow the white rabbit. 🐰",
      "",
    ],
  })),

  createCommand("ping", [], "", () => ({
    output: [
      "",
      "PING sidneipacheco.com (127.0.0.1): 56 data bytes",
      "64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms",
      "64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.039 ms",
      "64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.038 ms",
      "",
      "--- sidneipacheco.com ping statistics ---",
      "3 packets transmitted, 3 packets received, 0.0% packet loss",
      "",
    ],
  })),
];

export const allCommands = [...commands, ...easterEggCommands];
