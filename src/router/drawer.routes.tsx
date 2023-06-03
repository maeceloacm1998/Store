import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screen/home";


const Drawer = createDrawerNavigator();

const DrawerMenu: React.FC = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} options={{
      headerShown: false
    }} />
  </Drawer.Navigator>
);

export default DrawerMenu;