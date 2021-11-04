import React from "react";
import Home from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Heebo_600SemiBold,
  Heebo_400Regular,
  Heebo_700Bold,
} from "@expo-google-fonts/heebo";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Heebo_600SemiBold,
    Heebo_400Regular,
    Heebo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
