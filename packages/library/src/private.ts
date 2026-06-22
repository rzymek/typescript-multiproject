export function getInternalKey(): string {
  return "INTERNAL-SECRET-KEY-12345";
}

export function formatGreeting(name: string): string {
  return `Greetings, ${name}! This was formatted using a private utility inside @workspace/library.`;
}
