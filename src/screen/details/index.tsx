import React, { useState, useEffect } from "react"

import { View, StyleSheet, Image, Text, ActivityIndicator } from "react-native"
import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { ProductCardModel } from "../../components/productCard/models/ProductCardModel";
import Button from "../../components/button";
import Tollbar from "../../components/tollbar";

import { CartModel } from "../../context/models/CartModel";
import { ScreenProps } from "../../router/model/ScreenPropsModel";

import colors from "../../theme/colors";
import { useCartContext } from "../../context/cart";
import { screensName } from "../../router/constants";


function Details({ navigation, route }: ScreenProps) {
    const params = route.params as ProductCardModel
    const clickGoBack = () => navigation.goBack()
    const { addProduct } = useCartContext()

    const [productCart, setProductCart] = useState<CartModel>({ value: 1 } as CartModel);
    const [loadingScreen, setLoadingScreen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getProductCart()
    }, [])

    function getProductCart() {
        setLoadingScreen(true)
        const productCart: CartModel = {
            ...params,
            quantitySelected: 1,
            totalValue: params.value
        }
        setProductCart(productCart)
        setLoadingScreen(false)
    }

    function currencyFormat(num: number) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function clickAddQuantityListener() {
        if (productCart.quantitySelected < productCart.quantity) {
            const newProduct: CartModel = {
                ...productCart,
                quantitySelected: productCart.quantitySelected + 1,
                totalValue: productCart.value * (productCart.quantitySelected + 1)
            }
            setProductCart(newProduct)
        }
    }

    function clickRemoveQuantityListener() {
        if (productCart.quantitySelected > 1) {
            const newProduct: CartModel = {
                ...productCart,
                quantitySelected: productCart.quantitySelected - 1,
                totalValue: productCart.value * (productCart.quantitySelected - 1)
            }
            setProductCart(newProduct)
        }
    }

    function clickBuyProduct() {
        setLoading(true)
        addProduct(productCart)
        navigation.navigate(screensName.Cart)
        setLoading(false)
    }

    function isOutOfStock() {
        return params.quantity === 0
    }

    return (
        <View style={styles.container}>
            <Tollbar navigation={navigation} isNavigationHeader={true} clickGoBackListener={clickGoBack} />
            {
                loadingScreen ? (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size={25} color={colors.color.primary} />
                    </View>
                ) : (
                    <>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: productCart.image }} style={styles.image} />
                        </View>
                        <View style={styles.containerInformation}>
                            <Text style={styles.productName}>{productCart.productName}</Text>

                            {
                                isOutOfStock() ? (
                                    <Text style={styles.outStock}>Sem produto no estoque</Text>
                                ) : (
                                    <>
                                        <Text style={styles.priceName}>{currencyFormat(productCart.value)}</Text>
                                        <View style={styles.quantityContainer}>
                                            <RectButton onPress={clickAddQuantityListener}>
                                                <MaterialIcons color={colors.color.primary} size={20} name="add" />
                                            </RectButton>

                                            <Text style={styles.quantity}>{productCart.quantitySelected}</Text>

                                            <RectButton onPress={clickRemoveQuantityListener}>
                                                <MaterialCommunityIcons color={colors.color.primary} size={20} name="minus" />
                                            </RectButton>
                                        </View>

                                        <Button title="Comprar" clickButtonListener={clickBuyProduct} loading={loading} />
                                    </>
                                )
                            }
                        </View>
                    </>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    imageContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 300,
        width: 300,
        resizeMode: "contain"
    },
    containerInformation: {
        width: "100%",
        backgroundColor: colors.color.white,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 16
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.color.black
    },
    outStock: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: colors.color.error
    },
    priceName: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: "bold",
        color: colors.color.text_color
    },
    quantityContainer: {
        width: 70,
        height: 30,
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
        fontSize: 14,
        color: colors.color.black,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5
    },
})

export default Details;