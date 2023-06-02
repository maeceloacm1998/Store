import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { FirebaseClient } from './src/service/external/firebase/client/firebaseClient';
import Navigation from './src/router';

interface Props {
  nome: string
}

export default function App() {
  const client = new FirebaseClient();

  useEffect(() => {
    dale()
  }, [])

  async function dale() {
    const dale1 = await client.getDocument<Props[]>("teste")
    const collection = await client.getDocumentPerId<Props>("teste", "qFwHtjbNZH7La4vamx3d")
  }

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#FFFFFF"
      />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
