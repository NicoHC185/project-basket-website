import { IconButton } from "@mui/material";
import { IconSettings } from "@tabler/icons-react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AnimateButton from "components/extended/AnimateButton";

describe("AnimateButton", () => {
  it("should render AnimateButton Component with the children element", async () => {
    const children = (
      <IconButton
        color="inherit"
        size="large"
        disableRipple
        data-testid="button"
      >
        <IconSettings data-testid="iconSetting" />
      </IconButton>
    );
    render(
      <AnimateButton type="rotate" data-testid="button">
        {children}
      </AnimateButton>
    );
    const element = await screen.findByTestId("button");
    const icon = await screen.findByTestId("iconSetting");
    expect(element).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
