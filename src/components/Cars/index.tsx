import React, { useState } from "react";
import Car from "./sub_components/Car";
import api from "@api/api.json";
import { FlatList } from "react-native";
import CarDetails from "../../screens/CarDetails";
import { ICarsProps, ICarProps } from "@models/CarsInterfaces";

export default function Cars() {
  const [modal, setModal] = useState(false);
  const [cars, setCars] = useState<ICarsProps>();

  function handleOpenModal(item: ICarProps) {
    setModal((prev) => !prev);
  }

  return (
    <>
      <FlatList
        data={api.cars}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Car
            brand={item.brand}
            model={item.model}
            price={item.price}
            image={item.image}
            setModalState={() => handleOpenModal(item)}
          />
        )}
      />
      <CarDetails visible={modal} />
    </>
  );
}
