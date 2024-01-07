import { render, screen } from "@testing-library/react";
import BookNowButton from "./BookNowButton";

describe("book now button", () => {
  const mockOnClick = jest.fn();

  it("renders text", () => {
    render(<BookNowButton price={100} onClick={mockOnClick} />);
    const text = screen.getByText("Book now");
    expect(text).toBeInTheDocument();
  });

  it("formats price correctly", () => {
    const { rerender } = render(
      <BookNowButton price={100} onClick={mockOnClick} />
    );
    expect(screen.getByText("£100.00")).toBeInTheDocument();
    rerender(<BookNowButton price={1000.5} onClick={mockOnClick} />);
    expect(screen.getByText("£1,000.50")).toBeInTheDocument();
  });
});
