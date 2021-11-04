import React from "react";
import { Text, View } from "react-native";
import { Header, Background, Cars } from "@components/index";
import { IRouteProps } from "@models/RouteInterfaces";

export default function Home({ navigation }: IRouteProps) {
  return (
    <Background>
      <Header navigation={navigation} />
      <Cars />
    </Background>
  );
}
