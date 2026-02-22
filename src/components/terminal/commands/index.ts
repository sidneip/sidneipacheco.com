import { allCommands, commands } from "./commands";
import type { CommandResult } from "./types";

export * from "./types";
export { commands, allCommands };

export function executeCommand(input: string): CommandResult {
  const trimmedInput = input.trim().toLowerCase();

  if (!trimmedInput) {
    return { output: [] };
  }

  // Extract the command name (first word)
  const [commandName] = trimmedInput.split(" ");

  // Find matching command
  const command = allCommands.find(
    (cmd) =>
      cmd.name === commandName || cmd.aliases.includes(commandName)
  );

  if (command) {
    return command.execute();
  }

  // Unknown command
  return {
    output: [
      "",
      `Command not found: ${commandName}`,
      'Type "help" to see available commands.',
      "",
    ],
    isError: true,
  };
}

export function getCommandSuggestions(input: string): string[] {
  const trimmedInput = input.trim().toLowerCase();

  if (!trimmedInput) {
    return [];
  }

  const suggestions: string[] = [];

  // Only suggest from main commands (not easter eggs) for autocomplete
  commands.forEach((cmd) => {
    if (cmd.name.startsWith(trimmedInput)) {
      suggestions.push(cmd.name);
    }
    cmd.aliases.forEach((alias) => {
      if (alias.startsWith(trimmedInput)) {
        suggestions.push(alias);
      }
    });
  });

  return suggestions.sort();
}
