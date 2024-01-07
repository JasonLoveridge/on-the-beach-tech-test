import { fireEvent, render, screen } from "@testing-library/react";
import HolidayList from "./HolidayList";

describe("book now button", () => {
  it("renders sort buttons", () => {
    render(<HolidayList />);
    const alphabeticallyButton = screen.getByText("alphabetically");
    const priceButton = screen.getByText("price");
    const ratingButton = screen.getByText("star rating");
    expect(alphabeticallyButton).toBeInTheDocument();
    expect(priceButton).toBeInTheDocument();
    expect(ratingButton).toBeInTheDocument();
  });

  it("renders three holiday cards", () => {
    render(<HolidayList />);
    const headings = screen.getAllByRole("heading");
    expect(headings).toHaveLength(3);
  });

  it("sorts alphabetically correctly", () => {
    render(<HolidayList />);
    fireEvent.click(screen.getByText("alphabetically"));
    const firstAccommodationName = screen.getAllByRole("heading").at(0);
    expect(firstAccommodationName?.textContent).toBe("Aguamarina Golf Hotel");
  });

  it("sorts by price correclty", () => {
    render(<HolidayList />);
    fireEvent.click(screen.getByText("price"));
    const firstAccommodationName = screen.getAllByRole("heading").at(0);
    expect(firstAccommodationName?.textContent).toBe("Las Piramides Resort");
  });

  it("sorts by rating correclty", () => {
    render(<HolidayList />);
    fireEvent.click(screen.getByText("star rating"));
    const firstAccommodationName = screen.getAllByRole("heading").at(0);
    expect(firstAccommodationName?.textContent).toBe("Iberostar Grand Salome");
  });
});
