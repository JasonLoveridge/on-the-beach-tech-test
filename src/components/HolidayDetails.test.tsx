import { render, screen } from "@testing-library/react";
import HolidayDetails from "./HolidayDetails";

describe("holiday details", () => {
  const mockOnClick = jest.fn();

  const defaultProps = {
    accommodationName: "test name",
    location: "test location",
    rating: 3,
    guests: { adults: 2, children: 2, infants: 1 },
    startDate: "2024/01/01",
    duration: 7,
    departureLocation: "Manchester",
  };

  it("renders name and location", () => {
    render(<HolidayDetails {...defaultProps} />);
    expect(screen.getByText("test name")).toBeInTheDocument();
    expect(screen.getByText("test location")).toBeInTheDocument();
  });

  describe("guest details", () => {
    it("renders correctly for adults, children and infants", () => {
      render(<HolidayDetails {...defaultProps} />);
      const guestDetails = screen.getByText("Adults");
      expect(guestDetails.textContent).toBe("2 Adults, 2 children & 1 infant");
    });
    it("renders correctly for adults and child", () => {
      const updatedProps = {
        ...defaultProps,
        guests: { adults: 2, children: 1, infants: 0 },
      };
      render(<HolidayDetails {...updatedProps} />);
      const guestDetails = screen.getByText("Adults");
      expect(guestDetails.textContent).toBe("2 Adults, 1 child");
    });
    it("renders correctly for adults only", () => {
      const updatedProps = {
        ...defaultProps,
        guests: { adults: 1, children: 0, infants: 0 },
      };
      render(<HolidayDetails {...updatedProps} />);
      const guestDetails = screen.getByText("Adult");
      expect(guestDetails.textContent).toBe("1 Adult");
    });
  });

  it("renders departure date and duration", () => {
    render(<HolidayDetails {...defaultProps} />);
    const departureDate = screen.getByText("for");
    expect(departureDate.textContent).toBe("1st January 2024 for 7 days");
  });

  it("renders departure location", () => {
    render(<HolidayDetails {...defaultProps} />);
    const departureLocation = screen.getByText("departing from");
    expect(departureLocation.textContent).toBe("departing from Manchester");
  });
});
