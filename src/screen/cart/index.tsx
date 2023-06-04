import React, {useEffect} from "react"
import { View, StyleSheet } from "react-native";

import ProductCart from "./components/productCart";
import Tollbar from "../../components/tollbar";
import { ScreenProps } from "../../router/model/ScreenPropsModel";
import { useCartContext } from "../../context/cart";

function Cart({ navigation }: ScreenProps) {
    const clickGoBack = () => navigation.goBack()
    const {products} = useCartContext()

    useEffect(() => {console.log(products) }, [])

    return (
        <View>
            <Tollbar navigation={navigation} isNavigationHeader={true} clickGoBackListener={clickGoBack} />
            <ProductCart />
        </View>
    )

    const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    })
}

export default Cart;