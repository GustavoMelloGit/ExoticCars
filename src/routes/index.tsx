import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import LogIn from "../screens/LogIn";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="LogIn" component={LogIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
