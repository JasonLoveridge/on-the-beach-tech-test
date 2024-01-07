import styled from "styled-components";
import { Holiday } from "../types";
import { useState } from "react";
import { ReactComponent as ChevronDown } from "../icons/chevron-down.svg";
import { ReactComponent as ChevronRight } from "../icons/chevron-right.svg";
import { ButtonText, Subheading, THEME_BLUE } from "../styles";
import BookNowButton from "./BookNowButton";
import HolidayDetail from "./HolidayDetails";

interface Props {
  holiday: Holiday;
  bookNowClickHandler: () => void;
}

const CardImage = styled.img`
  height: 320px;
`;

const CardWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 900px;
  position: relative;
`;

const CardBody = styled.div`
  display: flex;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
  width: 100%;
`;

const ReadMoreButton = styled.button`
  background-color: white;
  border: none;
  width: 300px;
  height: 50px;
  text-align: left;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 270px;

  &:hover {
    cursor: pointer;
  }
`;

const OverviewWrapper = styled.div`
  text-align: left;
  padding: 0 16px 16px;
`;

const HolidayCard = ({ holiday, bookNowClickHandler }: Props) => {
  const [overviewExpanded, setOverviewExpanded] = useState(false);

  return (
    <CardWrapper>
      <CardBody>
        <CardImage
          src={holiday.imageUrl}
          alt={`photo of ${holiday.accommodationName}`}
        />
        <CardContent>
          <HolidayDetail
            accommodationName={holiday.accommodationName}
            location={holiday.location}
            rating={holiday.rating}
            guests={holiday.guests}
            startDate={holiday.startDate}
            duration={holiday.duration}
            departureLocation={holiday.departureLocation}
          />
          <BookNowButton price={holiday.price} onClick={bookNowClickHandler} />
        </CardContent>
      </CardBody>
      <ReadMoreButton
        onClick={() => {
          setOverviewExpanded(!overviewExpanded);
        }}
        aria-expanded={overviewExpanded}
      >
        {
          <ButtonText>
            <b>Read {overviewExpanded ? "less" : "more"}</b>{" "}
            {"about this hotel"}
          </ButtonText>
        }
        {overviewExpanded ? (
          <ChevronRight fill={THEME_BLUE} />
        ) : (
          <ChevronDown fill={THEME_BLUE} />
        )}
      </ReadMoreButton>
      {overviewExpanded && (
        <OverviewWrapper>
          <Subheading>Overview</Subheading>
          {holiday.overview}
        </OverviewWrapper>
      )}
    </CardWrapper>
  );
};

export default HolidayCard;
