import { Text, View, StyleSheet } from "react-native";

import ProductCart from "./components/productCart";
import Tollbar from "../../components/tollbar";
import { ScreenProps } from "../../router/model/ScreenPropsModel";

function Cart({ navigation }: ScreenProps) {
    const clickGoBack = () => navigation.goBack()

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