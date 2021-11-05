import theme from "@utils/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const CarLogo = styled.Image`
  width: 70px;
  height: undefined;
  aspect-ratio: 1;
  resize-mode: contain;
`;
export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CarName = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
  font-family: ${theme.fonts.bold};
`;
export const CarPrice = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.regular};
`;
export const ColorInfo = styled.Text`
  font-family: ${theme.fonts.bold};
`;
export const ColorText = styled.Text`
  font-family: ${theme.fonts.thin};
`;
export const BackToCatalog = styled.TouchableOpacity`
  position: absolute;
  top: 50%;
  left: 15px;
  flex-direction: row;
  align-items: center;
  padding: 6px 15px;
  border-radius: 100px;
  background-color: transparent;
  border-color: #000;
  border-width: 2px;
`;
export const CarImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 10px;
`;
