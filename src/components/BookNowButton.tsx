import styled from "styled-components";
import {
  ButtonText,
  LargeButtonText,
  THEME_YELLOW,
  THEME_YELLOW_HOVER,
} from "../styles";

interface Props {
  price: number;
  onClick: () => void;
}

const Button = styled.button`
  background-color: ${THEME_YELLOW};
  border: none;
  border-radius: 5px;
  margin: 16px 0;
  padding: 8px;

  &:hover {
    background-color: ${THEME_YELLOW_HOVER};
    cursor: pointer;
  }
`;

const BookNowButton = ({ price, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <ButtonText>
        <b>Book now</b>
      </ButtonText>
      <LargeButtonText>
        <b>{`£${price.toLocaleString("en-gb", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}</b>
      </LargeButtonText>
    </Button>
  );
};

export default BookNowButton;
