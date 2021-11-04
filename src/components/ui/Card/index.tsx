import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { Container } from "./styles";

interface ICardProps {
  children: ReactNode;
}
export default function Card({ children }: ICardProps) {
  return <Container>{children}</Container>;
}
