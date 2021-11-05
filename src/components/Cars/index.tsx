import React, { useState } from "react";
import Car from "./sub_components/Car";
import api from "@api/api.json";
import { FlatList } from "react-native";
import CarDetails from "../../screens/CarDetails";
import { ICarsProps, ICarProps } from "@models/CarsInterfaces";

export default function Cars() {
  const [modal, setModal] = useState(false);
  const [car, setCar] = useState<ICarProps>({} as ICarProps);

  function handleOpenModal(item: ICarProps) {
    setModal((prev) => !prev);
    setCar(item);
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
      {modal && (
        <CarDetails visible={modal} car={car} setModalState={setModal} />
      )}
    </>
  );
}
