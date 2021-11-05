import { ICarProps } from "@models/CarsInterfaces";
import React, { useState } from "react";
import { Text, Modal, View } from "react-native";
import {
  CarLogo,
  CarName,
  Container,
  CarInfo,
  BackToCatalog,
  CarImage,
  CarPrice,
  ColorInfo,
  ColorText,
  BookNow,
  BookText,
  ActionsWrapper,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ColorsCarousel from "@components/Carousel";
interface ICarDetailsProps {
  visible: boolean;
  setModalState: (state: boolean) => void;
  car: ICarProps;
}
export default function CarDetails(props: ICarDetailsProps) {
  const [selectedColor, setSectedColor] = useState(0);
  const { visible, car, setModalState } = props;
  const { logo, colors } = car;

  const linearColors = ["#fff", "#D8D7D7"];
  const color = colors[selectedColor].color;
  const index = ("0" + (selectedColor + 1)).slice(-2);

  function closeModal() {
    setModalState(false);
  }

  if (!colors) return null;

  return (
    <Modal visible={visible}>
      <LinearGradient
        colors={linearColors}
        style={{ flex: 1, width: "100%" }}
        locations={[0, 1]}
        start={[0, 0]}
        end={[1, 0]}
      >
        <Container>
          <CarInfo>
            <CarLogo source={{ uri: logo }} />
            <View>
              <CarName>
                {car.brand} {car.model}
              </CarName>
              <CarPrice>${car.price}/day</CarPrice>
            </View>
          </CarInfo>
          <View>
            <CarImage source={{ uri: colors[selectedColor].image }} />
            <Text style={{ fontSize: 30, marginLeft: 15 }}>
              <ColorInfo>{index}</ColorInfo>
              <ColorText>{color}</ColorText>
            </Text>
            <ActionsWrapper>
              <BackToCatalog onPress={closeModal}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text>Back to catalog</Text>
              </BackToCatalog>
              <BookNow>
                <BookText>Book now</BookText>
                <AntDesign name="arrowright" size={24} color="white" />
              </BookNow>
            </ActionsWrapper>
          </View>
          <ColorsCarousel
            car={car}
            setSelectedCar={setSectedColor}
            selectedCar={selectedColor}
          />
        </Container>
      </LinearGradient>
    </Modal>
  );
}
