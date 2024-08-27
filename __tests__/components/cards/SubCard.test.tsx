import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SubCard from "components/cards/SubCard";

describe("SubCard component", () => {
  it("should render sub card component with title = 'a title'", () => {
    const title = "a title";
    render(<SubCard title={title} />);
    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual(title);
  });
  it("should render sub card component content", () => {
    const content = "a content";
    render(<SubCard>{content}</SubCard>);
    const element = screen.getByText(content);
    expect(element.className).toContain("MuiCardContent-root");
  });
});
