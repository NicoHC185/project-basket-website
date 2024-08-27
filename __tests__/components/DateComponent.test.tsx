import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DateComponent from "components/DateComponent";
import moment, { Moment } from "moment";

describe("Date Components", () => {
  it("should render Date Component with today date", () => {
    const date = moment();
    const setDate = jest.fn();
    render(
      <DateComponent
        value={date}
        handleChange={(value: Moment | null) => {
          setDate(value);
        }}
      />
    );
    const element = document.querySelector(`[type="text"]`);
    expect(element).toBeInTheDocument();
  });
});
