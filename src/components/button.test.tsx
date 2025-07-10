import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button Test", () => {
  test("it should render correctly", () => {
    render(<Button>Click Me</Button>);
    screen.getByText("Click Me");
  });
});
