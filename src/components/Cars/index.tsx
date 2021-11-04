import React from "react";
import Car from "./sub_components/Car";
import api from "@api/api.json";
import { FlatList } from "react-native";

export default function Cars() {
  return (
    <FlatList
      data={api.cars}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Car
          brand={item.brand}
          model={item.model}
          price={item.price}
          image={item.image}
        />
      )}
    />
  );
}
