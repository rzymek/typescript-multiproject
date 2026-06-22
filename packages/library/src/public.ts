import { formatGreeting } from "./private";

/**
 * Greets the user using the internal private formatting tool.
 */
export function greetUser(name: string): string {
  return formatGreeting(name);
}

/**
 * Returns a simple public system status message.
 */
export function getSystemStatus(): string {
  return "System is operational. Core services are running.";
}
