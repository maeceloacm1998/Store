import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { ProductCardProps } from "./models/ProductCardProps";
import { ProductCardModel } from "./models/ProductCardModel";

import colors from "../../theme/colors";

const checkProps = (props: ProductCardProps) => ({
    data: props.data ? props.data : {} as ProductCardModel,
    clickProductListener: props.clickProductListener ? props.clickProductListener : () => { }
});

function ProductCard(props: ProductCardProps) {
    const { clickProductListener, data } = checkProps(props)

    function currencyFormat(num: number) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <Pressable onPress={()=> clickProductListener(data)} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: data.image }} style={styles.image} />
                </View>
                <View style={styles.informationsContainer}>
                    <Text style={styles.productName}>{data.productName}</Text>
                    <Text style={styles.priceName}>{currencyFormat(data.value)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    background: {
        padding: 5
    },
    container: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: colors.color.white,
        borderRadius: 15,
        elevation: 5,
    },
    imageContainer: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        backgroundColor: colors.color.background_card_color
    },
    informationsContainer: {
        width: "70%",
        height: "100%",
        padding: 10
    },
    image: {
        width: 70,
        height: 70
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.color.black
    },
    priceName: {
        marginTop: 10,
        fontSize: 14,
        color: colors.color.text_color
    }
})

export default ProductCard;