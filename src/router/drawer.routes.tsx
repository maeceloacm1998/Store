import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeRoutes from "./home.routes";
import MyRequestsRoutes from "./myRequests.routes";

const Drawer = createDrawerNavigator();

const DrawerMenu: React.FC = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Inicio"
      component={HomeRoutes}
      options={{
        headerShown: false,
      }}
    />

    <Drawer.Screen name="Meus Pedidos"
      component={MyRequestsRoutes}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerMenu;