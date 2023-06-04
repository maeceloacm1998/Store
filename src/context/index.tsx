import React from 'react';
import { CartProvider } from './cart';


export const CartProviderHook = ({ children }: any) => {
  return <CartProvider>{children}</CartProvider>;
};