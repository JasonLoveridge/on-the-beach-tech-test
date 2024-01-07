import styled from "styled-components";

export const THEME_BLUE = "#213a85";
export const THEME_GREY = "#949494";
export const THEME_BLUE_GREY = "#b7bfd8";
export const THEME_DARK_GREY = "#d4d4d4";
export const THEME_YELLOW = "#fedc07";
export const THEME_YELLOW_HOVER = "#fec307";
export const THEME_ERROR = "#e8492c";

export const Heading = styled.h2`
  margin: 4px 0;
  color: ${THEME_BLUE};
`;

export const Subheading = styled.h4`
  color: ${THEME_BLUE};
  margin: 16px 0;
`;

export const Paragraph = styled.p`
  margin: 4px 0;
  font-size: 16px;
`;

export const Caption = styled(Paragraph)`
  color: ${THEME_GREY};
`;

export const ButtonText = styled(Paragraph)`
  color: ${THEME_BLUE};
`;

export const LargeButtonText = styled(ButtonText)`
  font-size: 28px;
`;

export const ErrorText = styled(Paragraph)`
  font-style: italic;
  color: ${THEME_ERROR};
`;
