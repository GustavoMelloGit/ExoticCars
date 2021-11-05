import theme from "@utils/theme";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
const screenWidth = Dimensions.get("window").width;

interface CarouselItemProps {
  width: number;
}
export const Container = styled.View<CarouselItemProps>`
  height: 150px;
  width: ${(p) => p.width}px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const CarImage = styled.Image`
  position: absolute;
  height: 100px;
  width: 250px;
`;

export const GradientWrapper = styled.View`
  border-radius: 20px;
  overflow: hidden;
`;
