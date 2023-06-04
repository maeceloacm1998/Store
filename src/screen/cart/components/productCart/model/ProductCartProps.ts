import { CartModel } from "../../../../../context/models/CartModel";

export interface ProductCartProps {
    data: CartModel
    clickAddQuantityListener?: (id: string) => void,
    clickRemoveQuantityListener?: (id: string) => void,
}