const { render, screen } = require("@testing-library/react");
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

//test can also be written as it
describe("Contact us page test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load placeholder text inside contact us component", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("Name");
    expect(placeholder).toBeInTheDocument();
  });

  it("Should load all input texts inside contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});
