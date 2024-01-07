import styled from "styled-components";
import { Paragraph, THEME_BLUE, THEME_DARK_GREY } from "../styles";

interface Props {
  regularText: string;
  boldText: string;
  Icon?: React.FunctionComponent;
  onClick: () => void;
  active?: boolean;
}

const Button = styled.button<{ $active?: boolean }>`
  background-color: ${(props) => (props.$active ? THEME_BLUE : "white")};
  color: ${(props) => (props.$active ? "white" : THEME_BLUE)};
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? "white" : THEME_DARK_GREY)};
`;

const SortButtonText = styled(Paragraph)`
  font-size: 18px;
`;

const SortButton = ({
  regularText,
  boldText,
  Icon,
  onClick,
  active,
}: Props) => {
  return (
    <Button
      $active={active}
      onClick={onClick}
      aria-label={
        active
          ? `${regularText} ${boldText}, currently selected`
          : `${regularText} ${boldText}`
      }
    >
      <SortButtonText>
        {regularText} <b>{boldText}</b>
      </SortButtonText>
      {Icon && <IconWrapper $active={active}>{<Icon />}</IconWrapper>}
    </Button>
  );
};

export default SortButton;
