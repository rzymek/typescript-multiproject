import { describe, it, expect } from "vitest";
import { greetUser, getSystemStatus } from "./public";
import { getInternalKey, formatGreeting } from "./private";

describe("Library Tests", () => {
  it("should greet a user via the public API which uses the private utility", () => {
    const result = greetUser("Alice");
    expect(result).toContain("Greetings, Alice!");
    expect(result).toContain("private utility");
  });

  it("should get system status", () => {
    expect(getSystemStatus()).toBe("System is operational. Core services are running.");
  });

  it("should access private exports internally", () => {
    expect(getInternalKey()).toBe("INTERNAL-SECRET-KEY-12345");
  });
});
