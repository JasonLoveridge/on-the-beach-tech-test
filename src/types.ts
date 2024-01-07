export type Holiday = {
  id: string;
  imageUrl: string;
  overview: string;
  accommodationName: string;
  location: string;
  rating: number;
  guests: Guests;
  startDate: string;
  duration: number;
  departureLocation: string;
  price: number;
};

export type Guests = {
  adults: number;
  children: number;
  infants: number;
};
