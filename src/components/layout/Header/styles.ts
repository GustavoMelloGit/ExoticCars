import theme from "@utils/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  background: #ffffff;
  shadow-color: #000;
  shadow-offset: 0 10px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 4;
`;
export const Logo = styled.Text`
  text-transform: uppercase;
  font-size: 22px;
  font-family: ${theme.fonts.semi_bold};
`;
export const Span = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.regular};
`;
