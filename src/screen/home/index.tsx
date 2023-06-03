import React from "react";
import { View, StyleSheet } from "react-native";

import Tollbar from "../../components/tollbar";
import ProductCard from "../../components/productCard";

import { ScreenProps } from "../../router/model/ScreenPropsModel";

function Home({ navigation }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Tollbar navigation={navigation} />
            <ProductCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;
