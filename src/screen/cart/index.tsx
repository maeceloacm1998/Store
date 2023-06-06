import React, {useState} from "react"
import { View, StyleSheet, FlatList, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProductCart from "./components/productCart";
import Tollbar from "../../components/tollbar";
import { ScreenProps } from "../../router/model/ScreenPropsModel";
import { useCartContext } from "../../context/cart";
import { CartModel } from "../../context/models/CartModel";
import colors from "../../theme/colors";
import Button from "../../components/button";
import { OrderModel } from "./model/OrderMode";
import { FirebaseClient } from "../../service/external/firebase/client";

function Cart({ navigation }: ScreenProps) {
    const client = new FirebaseClient()
    const clickGoBack = () => navigation.goBack()
    const { products, totalProducts, totalValue, addQuantity, removeQuantity, removeProduct, clearCart } = useCartContext()

    const [loading, setLoading] = useState<boolean>(false)

    function HandleProductCart(data: CartModel) {
        return (
            <ProductCart data={data} clickAddQuantityListener={clickAddQuantityListener} clickRemoveQuantityListener={clickRemoveQuantityListener} />
        )
    }

    function currencyFormat(num: number) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function clickAddQuantityListener(id: string) {
        addQuantity(id)
    }

    function clickRemoveQuantityListener(id: string) {
        removeQuantity(id)
    }

    async function finishOrder() {
        setLoading(true)
        const order: OrderModel = {
            id: "1",
            productList: products,
            quantitySelected: totalProducts(),
            totalValue: totalValue()
        }
        client.setDocument("orders", order)
        clearCart()
        clearStack()
        setLoading(false)
    }

    function clearStack() {
        navigation.reset({
            index: 0,
            routes: [{name: 'Inicio'}],
          });
    }

    if(products.length === 0) {
        return (
            <View style={styles.containerEmptyScreen}>
                <MaterialCommunityIcons color={colors.color.primary} size={120} name="cart-remove" />
                <Text style={styles.title}>Carrinho está vazio.</Text>
                <Button title="Ver produtos" clickButtonListener={() => navigation.goBack()} loading={false} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Tollbar navigation={navigation} isNavigationHeader={true} clickGoBackListener={clickGoBack} />
            <Text style={styles.title}>Carrinho</Text>
            <FlatList
                data={products}
                renderItem={(data) => HandleProductCart(data.item)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 5 }}
            />
            <View style={styles.containerInformation}>
                <Text style={styles.productQuantity}>{totalProducts()} produtos</Text>
                <Text style={styles.valueTitle}>Total: <Text style={styles.value}>{currencyFormat(totalValue())}</Text></Text>
                <Button title="Finalizar pedido" clickButtonListener={finishOrder} loading={loading} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginHorizontal: 16,
        marginVertical: 5,
        color: colors.color.text_color
    },
    containerInformation: {
        width: "100%",
        backgroundColor: colors.color.white,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 16
    },
    productQuantity: {
        fontSize: 13,
        color: colors.color.text_color
    },
    valueTitle: {
        fontSize: 14,
        color: colors.color.black
    },
    value: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.color.black
    },
    containerEmptyScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40
    }
})

export default Cart;