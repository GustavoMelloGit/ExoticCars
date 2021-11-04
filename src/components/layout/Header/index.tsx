import React from "react";
import { Container, Logo, Span } from "./styles";
import { IRouteProps } from "@models/RouteInterfaces";
import { Ionicons } from "@expo/vector-icons";
import theme from "@utils/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header({ navigation }: IRouteProps) {
  function handleOpenDrawer() {
    navigation.openDrawer();
  }
  return (
    <Container>
      <Logo>
        Exotic <Span>cars</Span>
      </Logo>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Ionicons name="menu" size={24} color={theme.colors.actions} />
      </TouchableOpacity>
    </Container>
  );
}
