import React from "react";
import { Image, Text, View } from "react-native";
import Card from "@components/ui/Card";
import { CarContainer, CarImage, DolarSign } from "./styles";

type ICarProps = {
  brand: string;
  model: string;
  price: number;
};
export default function Car(props: ICarProps) {
  const { brand, model, price } = props;
  return (
    <Card>
      <CarContainer>
        <CarImage source={require("@assets/ferrari_california.png")} />
        <Text>
          <DolarSign>$</DolarSign> {price}
        </Text>
      </CarContainer>
    </Card>
  );
}
