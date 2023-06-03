import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeRoutes from "./home.routes";

const Drawer = createDrawerNavigator();

const DrawerMenu: React.FC = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeRoutes} options={{
      headerShown: false,
    }}  
    />
  </Drawer.Navigator>
);

export default DrawerMenu;