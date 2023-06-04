import { ProductCardModel } from "../../components/productCard/models/ProductCardModel";

export interface CartModel extends ProductCardModel {
    quantitySelected: number
}