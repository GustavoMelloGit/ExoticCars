import React from "react";
import { View, Text, Modal } from "react-native";

interface ICarDetailsProps {
  visible: boolean;
}
export default function CarDetails(props: ICarDetailsProps) {
  const { visible } = props;
  return (
    <Modal visible={visible}>
      <Text></Text>
    </Modal>
  );
}
