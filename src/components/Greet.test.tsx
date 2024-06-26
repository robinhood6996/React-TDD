import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet test", () => {
  render(<Greet />);
  const element = screen.getByText("Greet");
  expect(element).toBeInTheDocument();
});
