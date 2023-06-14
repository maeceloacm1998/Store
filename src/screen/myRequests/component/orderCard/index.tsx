import React, { useState } from "react";
import { StyleSheet, Pressable, View, Text, Image, Alert } from "react-native";
import colors from "../../../../theme/colors";
import { OrderModel } from "../../../cart/model/OrderMode";
import { FirebaseClient } from "../../../../service/external/firebase/client";

interface Props {
    data: OrderModel,
    updateList: () => void
}

function OrderCard(props: Props) {
    const client = new FirebaseClient()
    const [openInformations, setOpenInformations] = useState<boolean>(false)
    

    function clickDeleteListener() {
        Alert.alert('Cancelar pedido', 'Você realmente deseja cancelar esse pedido?', [
            {
                text: 'Não',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Sim', onPress: () => {
                client.deleteDocument("orders", props.data.id)
                props.updateList()
            } },
        ]);
    }

    function clickFinishListener() {
        Alert.alert('Pedido entregue', 'O seu pedido ja foi entregue? Te espero em uma próxima oportunidade :)', [
            {
                text: 'Não',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Sim', onPress: () => {
                const newOrder: OrderModel = {...props.data, finish: true}
                client.putDocument("orders", props.data.id, newOrder)
                props.updateList()
            } },
        ]);
    }

    return (
        <Pressable onPress={() => setOpenInformations(!openInformations)} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: props.data.productList[0].image }} style={styles.image} />
                </View>
                <View style={styles.informationsContainer}>
                    <View>
                        {props.data.finish ? (
                            <Text style={[styles.productName, {color: colors.color.blue}]}>{`Pedido concluido :D`}</Text>
                        ): (
                            <Text style={styles.productName}>{`analizando o pagamento :)`}</Text>
                        )}
                        <Text style={styles.priceName}>{`foi feito o pedido de ${props.data.productList.length} items`}</Text>
                    </View>

                    {
                        (openInformations && !props.data.finish) && (
                            <View style={styles.buttonsContainer}>
                                <Pressable onPress={clickDeleteListener} style={[styles.containerButton, { backgroundColor: colors.color.error }]}>
                                    <Text style={styles.textButton}>Cancelar</Text>
                                </Pressable>

                                <Pressable onPress={clickFinishListener} style={[styles.containerButton, { backgroundColor: colors.color.primary_dark }]}>
                                    <Text style={styles.textButton}>Entregue</Text>
                                </Pressable>
                            </View>
                        )
                    }
                </View>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: 10,
        paddingVertical: 5,
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
        margin: 10
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
    buttonsContainer: {
        marginTop: 16,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    containerButton: {
        width: "48%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textButton: {
        color: colors.color.white,
        fontSize: 14
    }
})

export default OrderCard;