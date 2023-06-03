import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { TollbarProps } from "./model/ToolbarProps";
import { screensName } from "../../router/constants";

import colors from "../../theme/colors";

const checkProps = (props: TollbarProps) => ({
    navigation: props.navigation ? props.navigation : null,
    isNavigationHeader: props.isNavigationHeader ? props.isNavigationHeader : false,
    clickGoBackListener: props.clickGoBackListener ? props.clickGoBackListener : () => { }
});

function Tollbar(props: TollbarProps) {
    const { navigation, clickGoBackListener, isNavigationHeader } = checkProps(props)
    const openMenu = () => navigation?.openDrawer()
    const openCart = () => navigation?.navigate(screensName.Cart)

    return (
        <View style={styles.container}>
            {
                isNavigationHeader ? (
                    <RectButton style={styles.button} onPress={clickGoBackListener}>
                        <MaterialCommunityIcons color={colors.color.white} size={25} name="arrow-left" />
                    </RectButton>
                ) : (
                    <RectButton style={styles.button} onPress={openMenu}>
                        <MaterialCommunityIcons color={colors.color.white} size={30} name="menu" />
                    </RectButton>
                )
            }
            <RectButton style={styles.button} onPress={openCart}>
                <MaterialCommunityIcons color={colors.color.white} size={25} name="cart" />
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        elevation: 10,
        backgroundColor: colors.color.primary
    },
    button: {
        width: 45,
        height: 45,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Tollbar;