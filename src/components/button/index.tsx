import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { ButtonProps } from "./model/ButtonProps";
import colors from "../../theme/colors";

const checkProps = (props: ButtonProps) => ({
    ...props,
    title: props.title ? props.title : "Default title",
    backgroundColor: props.backgroundColor ? props.backgroundColor : colors.color.primary,
    textColor: props.textColor ? props.textColor : colors.color.white,
    clickButtonListener: props.clickButtonListener ? props.clickButtonListener : () => { },
    isLoading: props.loading ? props.loading : false
});

function Button(props: ButtonProps) {
    const { backgroundColor, clickButtonListener, textColor, title, isLoading, ...rest } = checkProps(props)

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: 45,
            backgroundColor: backgroundColor,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 16
        },
        text: {
            fontSize: 14,
            fontWeight: "bold",
            color: textColor,
        }
    })

    return (
        <RectButton {...rest} style={styles.container} onPress={clickButtonListener}>
            {
                isLoading ? (
                    <ActivityIndicator size={16} color={colors.color.white}/>
                ) : (
                    <Text style={styles.text}>{title}</Text>
                )
            }
        </RectButton>
    )
}

export default Button;