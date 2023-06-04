import { ProductCardModel } from "./ProductCardModel";

export interface ProductCardProps {
    data: ProductCardModel
    clickProductListener?: (data: ProductCardModel) => void,
}