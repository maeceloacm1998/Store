import React from "react";
import { StyleSheet, Pressable, View, Text, Image } from "react-native";
import colors from "../../../../theme/colors";
import { OrderModel } from "../../../cart/model/OrderMode";

interface Props {
    data: OrderModel
}

function OrderCard(props: Props) {
    return (
        <Pressable  style={styles.background}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: props.data.productList[0].image }} style={styles.image} />
                </View>
                <View style={styles.informationsContainer}>
                    <View>
                        <Text style={styles.productName}>{`analizando o pagamento :)`}</Text>
                        <Text style={styles.priceName}>{`foi feito o pedido de ${props.data.productList.length} items`}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: 10,
        paddingVertical: 5
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
        justifyContent: "space-between",
        padding: 10
    },
    image: {
        width: 70,
        height: 70,
        margin:10 
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.color.primary_dark
    },
    priceName: {
        marginTop: 10,
        fontSize: 14,
        color: colors.color.text_color
    },
    quantityContainer: {
        width: 80,
        paddingStart: 6,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.color.background_card_option_color,
        borderRadius: 15,
        backgroundColor: colors.color.background_card_color
    },
    quantity: {
        width: 26,
        fontSize: 14,
        color: colors.color.black,
        justifyContent: "center",
        paddingHorizontal: 5
    },
})

export default OrderCard;