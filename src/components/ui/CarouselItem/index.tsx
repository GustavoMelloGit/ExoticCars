import { ICarColorsProps } from "@models/CarsInterfaces";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, SliderBase } from "react-native";
import { CarImage, Container, GradientWrapper } from "./styles";
interface ICarouselItemProps {
  item: ICarColorsProps;
  itemWidth: number;
  selected: number;
}
const CarouselItem = (props: ICarouselItemProps) => {
  const { item, selected, itemWidth } = props;
  const isSelected = selected + 1 === item.id;
  const colors = ["#ada7ff", "#fff"];

  if (isSelected) {
    return (
      <GradientWrapper>
        <LinearGradient
          colors={colors}
          locations={[0, 1]}
          start={[0, 1]}
          end={[1, 0]}
        >
          <Container width={itemWidth}>
            <CarImage source={{ uri: item.image }} />
          </Container>
        </LinearGradient>
      </GradientWrapper>
    );
  }
  return (
    <Container width={itemWidth}>
      <CarImage source={{ uri: item.image }} />
    </Container>
  );
};

export default React.memo(CarouselItem);
