import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { ProductCardProps } from "./models/ProductCardProps";
import colors from "../../theme/colors";

const checkProps = (props: ProductCardProps) => ({
    data: props.data ? props.data : {},
    clickProductListener: props.clickProductListener ? props.clickProductListener : () => { }
});

function ProductCard(props: ProductCardProps) {
    const { clickProductListener } = checkProps(props)
    const data = {
        productName: "Celular Sansung S10 - Preto",
        value: 10,
        image: "https://firebasestorage.googleapis.com/v0/b/lovephotos-ee4c5.appspot.com/o/photo%2F09fa8df4-3307-354f-a7d7-c96918ada245?alt=media&token=9b02f469-a9a2-41b1-b9d4-a84e36aea58f&_gl=1*1m0v9bu*_ga*NTYyMTk5NjEzLjE2ODU2ODI4MzM.*_ga_CW55HF8NVT*MTY4NTc3NDQ4NC4yLjEuMTY4NTc3NDUxOS4wLjAuMA.."
    }

    function currencyFormat(num: number) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <Pressable onPress={clickProductListener} style={styles.background}>
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
        padding: 10
    },
    container: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        backgroundColor: colors.color.white,
        borderRadius: 15,
        elevation: 5,
    },
    imageContainer: {
        width: "30%",
        height: "100%",
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