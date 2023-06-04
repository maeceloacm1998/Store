import { ProductCardModel } from "../../../components/productCard/models/ProductCardModel";

export interface OrderModel {
    id: string,
    product: ProductCardModel,
    quantitySelected: number,
    totalValue?: number
}