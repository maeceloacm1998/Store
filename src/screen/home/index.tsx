import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Tollbar from "../../components/tollbar";
import ProductCard from "../../components/productCard";
import { ProductCardModel } from "../../components/productCard/models/ProductCardModel";

import { ScreenProps } from "../../router/model/ScreenPropsModel";
import { FirebaseClient } from "../../service/external/firebase/client";
import { screensName } from "../../router/constants";

function Home({ navigation }: ScreenProps) {
    const client = new FirebaseClient();

    const [products, setProducts] = useState<ProductCardModel[]>([] as ProductCardModel[])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchProducts()
    },[])

    async function fetchProducts() {
        setLoading(true)
        const res = await client.getDocument<ProductCardModel[]>("products")
        setLoading(false)
        setProducts(res);
    }

    function HandleProductCard(data: ProductCardModel) {
        return (
            <ProductCard data={data} clickProductListener={clickProduct}/>
        )
    }

    function clickProduct(data: ProductCardModel) {
        navigation.navigate(screensName.Details, data)
    }

    return (
        <View style={styles.container}>
            <Tollbar navigation={navigation} />
            <FlatList
                data={products}
                renderItem={(data) => HandleProductCard(data.item)}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                onRefresh={fetchProducts}
                refreshing={loading}
                style={{paddingHorizontal: 5}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;
