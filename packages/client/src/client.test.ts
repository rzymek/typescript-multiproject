import { describe, it, expect } from "vitest";
import { greetUser, getSystemStatus } from "@workspace/library";

describe("Client Integration Suite", () => {
  it("should securely import public interface functions from @workspace/library", () => {
    const greeting = greetUser("Client App");
    expect(greeting).toContain("Greetings, Client App!");
    expect(greeting).toContain("private utility");
  });

  it("should fetch system status through library connection", () => {
    expect(getSystemStatus()).toContain("operational");
  });
});
