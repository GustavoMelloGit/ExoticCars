import React from "react";
import { View } from "react-native";
import { Container } from "./styles";

interface IBackgroundProps {
  children: React.ReactNode;
}
export default function Background({ children }: IBackgroundProps) {
  return <Container>{children}</Container>;
}
