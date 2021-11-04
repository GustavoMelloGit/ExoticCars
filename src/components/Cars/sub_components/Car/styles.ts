import theme from "@utils/theme";
import styled from "styled-components/native";

export const CarContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-vertical: 15px;
`;
export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Brand = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
`;
export const Model = styled.Text`
  font-family: ${theme.fonts.regular};
  align-self: flex-start;
`;
export const TouchableImage = styled.TouchableOpacity`
  width: 100%;
`;
export const CarImage = styled.Image`
  width: 100%;
  height: 100px;
`;
export const PriceWrapper = styled.View`
  flex-direction: row;
  align-self: flex-end;
`;
export const PriceText = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
`;
export const DolarSign = styled.Text`
  font-size: 12px;
  line-height: 17px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
`;
export const SubText = styled.Text`
  font-size: 13px;
  line-height: 30px;
  font-family: ${theme.fonts.light};
  color: ${theme.colors.primary};
`;
