import CarouselItem from "@components/ui/CarouselItem";
import { ICarProps } from "@models/CarsInterfaces";
import React, { useState } from "react";
import { Dimensions, InteractionManager } from "react-native";
import Carousel from "react-native-snap-carousel";

interface ICarouselProps {
  car: ICarProps;
  setSelectedCar: (car: number) => void;
  selectedCar: number;
}
export default function ColorsCarousel(props: ICarouselProps) {
  const { car, setSelectedCar, selectedCar } = props;
  const { colors } = car;
  const screenSize = Dimensions.get("window").width;
  const itemWidth = screenSize * 0.7;

  function handleSnapItem(index: number) {
    setSelectedCar(index);
  }

  return (
    <Carousel
      data={colors}
      renderItem={({ item, index }) => (
        <CarouselItem
          item={item}
          selected={selectedCar}
          itemWidth={itemWidth}
        />
      )}
      windowSize={1}
      sliderWidth={screenSize}
      containerCustomStyle={{ flexGrow: 0 }}
      itemWidth={itemWidth}
      onSnapToItem={(index) => handleSnapItem(index)}
      loop
    />
  );
}
