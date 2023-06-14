import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Tollbar from "../../components/tollbar";

import { ScreenProps } from "../../router/model/ScreenPropsModel";
import colors from "../../theme/colors";
import { FirebaseClient } from "../../service/external/firebase/client";
import { OrderModel } from "../cart/model/OrderMode";
import OrderCard from "./component/orderCard";

function MyRequests({ navigation }: ScreenProps) {
    const client = new FirebaseClient();

    const [orders, setOrders] = useState<OrderModel[]>([] as OrderModel[])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchMyRequests()
    }, [])

    async function fetchMyRequests() {
        setLoading(true)
        const res = await client.getDocument<OrderModel[]>("orders")
        setOrders(res);
        setLoading(false)
    }

    function HandleOrderCard(data: OrderModel) {
        return (
            <OrderCard data={data} updateList={fetchMyRequests} />
        )
    }

    return (
        <View>
            <Tollbar navigation={navigation} />
            <Text style={styles.title}>Meus pedidos</Text>

            <FlatList
                data={orders}
                renderItem={(data) => HandleOrderCard(data.item)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                onRefresh={fetchMyRequests}
                refreshing={loading}
                style={{paddingHorizontal: 5}}
            />
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
    }
})

export default MyRequests;