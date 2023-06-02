import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screen/home';

const Stack = createNativeStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
