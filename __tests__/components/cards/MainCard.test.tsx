import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainCard from "components/cards/MainCard";

describe("MainCard component", () => {
  it("should render main card with title = 'a title'", () => {
    const title = "a title";
    render(<MainCard title={title} />);
    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual(title);
  });
  it("should render main card content", () => {
    const content = "a content";
    render(<MainCard>{content}</MainCard>);
    const element = screen.getByText(content);
    expect(element.className).toContain("MuiCardContent-root");
  });
});
