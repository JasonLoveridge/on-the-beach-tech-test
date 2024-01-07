import { render, screen } from "@testing-library/react";
import Rating from "./Rating";

describe("rating component", () => {
  it("renders correct number of stars", () => {
    render(<Rating rating={3} />);
    const stars = screen.getAllByText("rating-star.svg");
    expect(stars.length).toBe(3);
  });

  it("renders error message for rating value not between 1 and 5", () => {
    render(<Rating rating={0} />);
    const error = screen.getByText("Error with rating");
    expect(error).toBeInTheDocument();
  });

  it("has suitable aria label", () => {
    render(<Rating rating={3} />);
    expect(screen.getByTestId("rating-wrapper")).toHaveAttribute(
      "aria-label",
      "Rating: 3 out of five stars"
    );
  });
});
