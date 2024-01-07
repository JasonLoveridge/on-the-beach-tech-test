import { Guests } from "../types";
import { Caption, Heading, Paragraph } from "../styles";
import Rating from "./Rating";
import { getFormattedDateString } from "../utilities";

interface Props {
  accommodationName: string;
  location: string;
  rating: number;
  guests: Guests;
  startDate: string;
  duration: number;
  departureLocation: string;
}

const guestsString = (guests: Guests): JSX.Element => {
  const { adults, children, infants } = guests;
  return (
    <Paragraph>
      <b>{adults}</b> Adult{adults > 1 ? "s" : ""}
      {children > 0 && (
        <span>
          , <b>{children}</b> child{children > 1 ? "ren" : ""}
        </span>
      )}
      {infants > 0 && (
        <span>
          {" & "}
          <b>{infants}</b> infant{infants > 1 ? "s" : ""}
        </span>
      )}
    </Paragraph>
  );
};

const durationString = (date: string, duration: number): JSX.Element => {
  const dateString = getFormattedDateString(new Date(date));

  return (
    <Paragraph>
      <b>{dateString}</b>
      {" for "}
      <b>{duration} days</b>
    </Paragraph>
  );
};

const departureString = (departureLocation: string): JSX.Element => {
  return (
    <Paragraph>
      departing from <b>{departureLocation}</b>
    </Paragraph>
  );
};

const HolidayDetails = ({
  accommodationName,
  location,
  rating,
  guests,
  startDate,
  duration,
  departureLocation,
}: Props) => {
  return (
    <div>
      <Heading>{accommodationName}</Heading>
      <Caption>{location}</Caption>
      <Rating rating={rating} />
      {guestsString(guests)}
      {durationString(startDate, duration)}
      {departureString(departureLocation)}
    </div>
  );
};

export default HolidayDetails;
