import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from "./drawer.routes"
import { CartProviderHook } from '../context';

export default function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <CartProviderHook>
          <DrawerNavigation />
        </CartProviderHook>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}