import React from "react";
import { Text, View } from "react-native";
import { Header, Background } from "@components/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IRouteProps } from "@models/RouteInterfaces";

export default function Home({ navigation }: IRouteProps) {
  return (
    <Background>
      <Header navigation={navigation} />
    </Background>
  );
}
