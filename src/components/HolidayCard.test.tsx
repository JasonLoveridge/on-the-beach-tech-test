import { fireEvent, render, screen } from "@testing-library/react";
import HolidayCard from "./HolidayCard";

import mockData from "../mockData.json";

describe("holiday card", () => {
  const mockOnClick = jest.fn();
  const mockHoliday = mockData.holidays[0];

  beforeEach(() => {
    render(
      <HolidayCard holiday={mockHoliday} bookNowClickHandler={mockOnClick} />
    );
  });

  it("renders holiday details", () => {
    const accommodationName = screen.getByText(mockHoliday.accommodationName);
    expect(accommodationName).toBeInTheDocument();
  });

  it("renders book now button", () => {
    const bookNowButton = screen.getByText("Book now");
    expect(bookNowButton).toBeInTheDocument();
  });

  it("does not render overview text when not expanded", () => {
    const readMoreButton = screen.getAllByRole("button").at(1);
    const overviewHeading = screen.queryByText("Overview");
    expect(readMoreButton).toHaveAttribute("aria-expanded", "false");
    expect(overviewHeading).not.toBeInTheDocument();
  });

  it("does render overview text when expanded", () => {
    const readMoreButton = screen.getAllByRole("button").at(1);
    fireEvent.click(readMoreButton!);
    const overviewHeading = screen.getByText("Overview");
    const overviewText = screen.getByText(mockHoliday.overview);
    expect(readMoreButton).toHaveAttribute("aria-expanded", "true");
    expect(overviewHeading).toBeInTheDocument();
    expect(overviewText).toBeInTheDocument();
  });
});
