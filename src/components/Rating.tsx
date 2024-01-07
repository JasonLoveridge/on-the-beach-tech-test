import styled from "styled-components";
import { ReactComponent as Star } from "../icons/rating-star.svg";
import { ErrorText } from "../styles";

interface Props {
  rating: number;
}

const RatingWrapper = styled.div`
  display: flex;
  margin: 8px 0;

  svg + svg {
    margin-left: 4px;
  }
`;

const Rating = ({ rating }: Props) => {
  if (rating < 1 || rating > 5) {
    return <ErrorText>Error with rating</ErrorText>;
  }

  const stars: JSX.Element[] = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <Star height='20' width='20' color='#fedc07' key={`rating-star-${i}`} />
    );
  }
  return (
    <RatingWrapper
      data-testid='rating-wrapper'
      aria-label={`Rating: ${rating} out of five stars`}
    >
      {stars}
    </RatingWrapper>
  );
};

export default Rating;
