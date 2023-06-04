import { CartModel } from "./CartModel";

export interface CartContextDataModel {
    products: CartModel[],
    addProduct: (product: CartModel) => void,
    removeProduct: (id: string) => void,
    addQuantity: (id: string) => void,
    removeQuantity: (id: string) => void,
    totalProducts: () => number,
    totalValue: () => number,
    clearCart: () => void
}
