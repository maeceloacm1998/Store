import { ProductCartModel } from "./ProductCartModel";

export interface ProductCartProps {
    data: ProductCartModel
    clickProductListener?: () => void,
    clickAddQuantityListener?: () => void,
    clickRemoveQuantityListener?: () => void,
}