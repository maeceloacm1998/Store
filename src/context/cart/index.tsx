import React, { createContext, useContext, useState } from 'react';

import { CartModel } from '../models/CartModel';
import { CartContextDataModel } from '../models/CartContextDataModel';

const CartContext = createContext<CartContextDataModel>({} as CartContextDataModel);

export const CartProvider = ({ children }: any) => {
    const [products, setProducts] = useState<CartModel[]>([] as CartModel[]);

    function addProduct(product: CartModel) {
      const existId = products.findIndex((item) => item.id === product.id) != -1
      if(existId) {
        addQuantity(product.id)
      } else {
        setProducts((oldValue) => [...oldValue, product])
      }
    }

    function removeProduct(id: string) {
        const filter = products.filter((item) => item.id !== id)
        setProducts(filter);
    }

    function addQuantity(id: string) {
        const product = products.filter((item) => item.id === id)
        const filter = products.filter((item) => item.id !== id)

        if(product.length != 0) {
            product[0].quantitySelected += 1;
            filter.push(product[0])
            setProducts(filter);
        }
    }

    function removeQuantity(id: string) {
        const product = products.filter((item) => item.id === id)
        const filter = products.filter((item) => item.id !== id)

        if(product.length != 0) {
            product[0].quantitySelected -= 1;
            filter.push(product[0])
            setProducts(filter);
        }
    }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        addQuantity,
        removeProduct,
        removeQuantity
      }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext(): CartContextDataModel {
    return useContext(CartContext);
}