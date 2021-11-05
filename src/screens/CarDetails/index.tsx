import { ICarProps } from "@models/CarsInterfaces";
import React from "react";
import { Text, Modal, TouchableOpacity, View } from "react-native";
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
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
interface ICarDetailsProps {
  visible: boolean;
  setModalState: (state: boolean) => void;
  car: ICarProps;
}
export default function CarDetails(props: ICarDetailsProps) {
  const { visible, car, setModalState } = props;
  const { logo, colors } = car;

  const linearColors = ["#fff", "#D8D7D7"];
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
          <CarImage source={{ uri: colors[0].image }} />
          <Text style={{ fontSize: 30 }}>
            <ColorInfo>03</ColorInfo>
            <ColorText>Gray</ColorText>
          </Text>
          <BackToCatalog onPress={closeModal}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text>Back to catalog</Text>
          </BackToCatalog>
        </Container>
      </LinearGradient>
    </Modal>
  );
}
