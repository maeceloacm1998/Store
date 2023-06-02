import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./store.routes"

export default function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}