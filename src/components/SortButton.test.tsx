import { fireEvent, render, screen } from "@testing-library/react";
import SortButton from "./SortButton";
import { ReactComponent as SortAZ } from "../icons/sort-az.svg";
import { THEME_BLUE } from "../styles";

describe("sort button component", () => {
  const mockOnClick = jest.fn();

  const defaultProps = {
    regularText: "regular",
    boldText: "bold",
    onClick: mockOnClick,
    Icon: SortAZ,
  };

  it("renders text and icon", () => {
    render(<SortButton {...defaultProps} />);
    const textEl = screen.getByText("regular");
    expect(textEl.textContent).toEqual("regular bold");
    const icon = screen.getByText("sort-az.svg");
    expect(icon).toBeInTheDocument();
  });

  it("triggers click handler on click", () => {
    render(<SortButton {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("changes background colour according to value of active prop", () => {
    const { rerender } = render(<SortButton {...defaultProps} />);
    let button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: white`);

    rerender(<SortButton {...defaultProps} active={true} />);
    button = screen.getByRole("button");

    expect(button).toHaveStyle(`background-color: ${THEME_BLUE}`);
  });

  it("has suitable aria label when active and when not", () => {
    const { rerender } = render(<SortButton {...defaultProps} />);
    let button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "regular bold");

    rerender(<SortButton {...defaultProps} active={true} />);
    button = screen.getByRole("button");

    expect(button).toHaveAttribute(
      "aria-label",
      "regular bold, currently selected"
    );
  });
});
