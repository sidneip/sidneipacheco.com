export interface CommandResult {
  output: string[];
  isError?: boolean;
  isHtml?: boolean;
}

export interface Command {
  name: string;
  aliases: string[];
  description: string;
  execute: () => CommandResult;
}

export interface HistoryEntry {
  id: string;
  command: string;
  output: string[];
  isError?: boolean;
  isHtml?: boolean;
  timestamp: Date;
}
