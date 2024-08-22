import { findLogo } from "utils";

describe("findLogo NBA functions", () => {
  it("should find info nba logo for the Boston Celtics team", () => {
    const logo = findLogo("BOS");
    expect(logo).toHaveProperty("code");
    expect(logo).toHaveProperty("logo");
  });
});
