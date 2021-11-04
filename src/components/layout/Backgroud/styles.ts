import styled from "styled-components/native";
import Constants from "expo-constants";

const { statusBarHeight } = Constants;

export const Container = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;
