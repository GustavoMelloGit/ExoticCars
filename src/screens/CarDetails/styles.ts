import theme from "@utils/theme";
import styled from "styled-components/native";

const actionsWidth = 150;
export const Container = styled.View`
  flex: 1;
  padding-vertical: 20px;
  justify-content: space-between;
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
  text-transform: capitalize;
`;
export const ActionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 40px;
  align-self: center;
  margin-top: 35px;
`;
export const BookNow = styled.TouchableOpacity`
  height: 100%;
  width: ${actionsWidth}px;
  padding-horizontal: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.primary};
  border-radius: 100px;
`;
export const BookText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: ${theme.fonts.thin};
`;
export const BackToCatalog = styled.TouchableOpacity`
  height: 100%;
  width: ${actionsWidth}px;
  padding-horizontal: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-color: #000;
  border-width: 2px;
  border-radius: 100px;
`;
export const CarImage = styled.Image`
  width: 100%;
  height: 170px;
`;
