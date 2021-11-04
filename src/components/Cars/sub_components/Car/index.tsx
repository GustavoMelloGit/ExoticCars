import React from "react";
import { Image, Text, View } from "react-native";
import Card from "@components/ui/Card";
import {
  Brand,
  CarContainer,
  CarImage,
  ContentWrapper,
  DolarSign,
  Header,
  Model,
  PriceText,
  PriceWrapper,
  SubText,
  TouchableImage,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "@utils/theme";

type ICarProps = {
  brand: string;
  model: string;
  price: number;
  image: string;
  setModalState: () => void;
};
export default function Car(props: ICarProps) {
  const { brand, model, price, image, setModalState } = props;

  return (
    <CarContainer>
      <Card>
        <ContentWrapper>
          <Header>
            <Brand>{brand}</Brand>
            <TouchableOpacity>
              <Entypo
                name="dots-three-horizontal"
                size={20}
                color={theme.colors.options}
              />
            </TouchableOpacity>
          </Header>
          <Model>{model}</Model>
          <TouchableImage onPress={setModalState}>
            <CarImage
              source={{
                uri: image,
              }}
            />
          </TouchableImage>
          <PriceWrapper>
            <DolarSign>$</DolarSign>
            <PriceText>{price}</PriceText>
            <SubText>/day</SubText>
          </PriceWrapper>
        </ContentWrapper>
      </Card>
    </CarContainer>
  );
}
