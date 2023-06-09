import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screen/cart';
import Home from '../screen/home';
import Details from '../screen/details';

const Stack = createNativeStackNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator initialRouteName="Destaques">
      <Stack.Screen
        name="Destaques"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeRoutes;