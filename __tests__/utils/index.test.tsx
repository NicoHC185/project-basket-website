import "@testing-library/jest-dom";
import { findLogo } from "utils";
import { render, screen } from "@testing-library/react";

describe("findLogo NBA functions", () => {
  it("should find info nba logo for the Boston Celtics team", () => {
    const logo = findLogo("BOS");
    render(logo);
    const getLogo = screen.getByRole("img");
    expect(getLogo).toBeInTheDocument();
  });
  it("should send error when dont find NBA logo", () => {
    const logo = findLogo("Atl");
    expect(logo).toBeUndefined()
  });
});
