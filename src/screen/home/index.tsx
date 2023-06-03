import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Tollbar from "../../components/tollbar";
import { ScreenProps } from "../../router/model/ScreenPropsModel";

function Home({ navigation }: ScreenProps) {
    return (
        <View>
            <Tollbar navigation={navigation} />
            <Text>Entrou na HOME</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;
