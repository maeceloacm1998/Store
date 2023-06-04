import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';


import { FirebaseClient } from './src/service/external/firebase/client/firebaseClient';
import Navigation from './src/router';
import colors from './src/theme/colors';
import { addDoc, collection, doc, documentId, updateDoc } from 'firebase/firestore';
import database from './src/service/external/firebase/config/firebase';
import { ProductCardModel } from './src/components/productCard/models/ProductCardModel';

interface Props {
  nome: string
}

export default function App() {
  const client = new FirebaseClient();

  useEffect(() => {
    dale()
  }, [])

  async function dale() {
    const dale1 = await client.getDocument<Props[]>("products")
    console.log(dale1)
    // const collection = await client.getDocumentPerId<Props>("teste", "qFwHtjbNZH7La4vamx3d")
    // createDocument()
  }

  async function createDocument() {
    const docRef = await addDoc(collection(database, "products"), {});
    const item = {
      id:  docRef.id,
      productName: 
      "Smartphone Samsung Galaxy A03 Core 32GB 4G Wi-Fi Tela 6.5'' Dual Chip 2GB RAM Câmera 8MP + Selfie 5MP - Verde",
      value: 1220,
      image: 
      "https://images-americanas.b2w.io/produtos/01/00/img/539642441/0/5396424440G1.jpg"
    }
    const doc1 = doc(database, "products", docRef.id.toString())
    await updateDoc(doc1, item)
  }

  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={colors.color.primary}
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
