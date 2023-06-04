import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { ProductCartProps } from "./model/ProductCartProps";
import colors from "../../../../theme/colors";
import { RectButton } from "react-native-gesture-handler";
import { CartModel } from "../../../../context/models/CartModel";

const checkProps = (props: ProductCartProps) => ({
    data: props.data ? props.data : {value: 1} as CartModel,
    clickAddQuantityListener: props.clickAddQuantityListener ? props.clickAddQuantityListener : () => { },
    clickRemoveQuantityListener: props.clickRemoveQuantityListener ? props.clickRemoveQuantityListener : () => { },
});

function ProductCart(props: ProductCartProps) {
    const { clickAddQuantityListener, clickRemoveQuantityListener, data } = checkProps(props)
    
    function currencyFormat(num: number) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <Pressable  style={styles.background}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: data.image }} style={styles.image} />
                </View>
                <View style={styles.informationsContainer}>
                    <View>
                        <Text style={styles.productName}>{data.productName}</Text>
                        <Text style={styles.priceName}>{currencyFormat(data.totalValue!!)}</Text>
                    </View>

                    <View style={styles.quantityContainer}>
                        <Pressable onPress={() => clickAddQuantityListener(data.id)}>
                            <MaterialIcons color={colors.color.primary} size={20} name="add" />
                        </Pressable>

                        <Text style={styles.quantity}>{data.quantitySelected}</Text>

                        <Pressable onPress={() => clickRemoveQuantityListener(data.id)}>
                            <MaterialCommunityIcons color={colors.color.primary} size={20} name="minus" />
                        </Pressable>
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

export default ProductCart;