import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "./styles";
import Car from "./sub_components/Car";

export default function Cars() {
  return (
    <ScrollView style={{ marginTop: 15 }}>
      <Container>
        <Car brand="Ferrari" model="CALIFORNIA" price={725} />
      </Container>
    </ScrollView>
  );
}
