import { ProductCardModel } from "../../../components/productCard/models/ProductCardModel";
import { CartModel } from "../../../context/models/CartModel";

export interface OrderModel {
    id: string,
    productList: CartModel[],
    quantitySelected: number,
    totalValue?: number
}