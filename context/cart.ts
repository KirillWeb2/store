'use client';

import { Dispatch, SetStateAction, createContext } from 'react';

import { AddItemInCartBody, CartType, DeleteItemInCartBody, UpdateItemInCartBody } from '../types/cart';

type CartContextType = {
    cart: CartType | null;
    createCart: () => void;
    addItemInCart: (body: AddItemInCartBody) => void;
    deleteItemInCart: (body: DeleteItemInCartBody) => void;
    updateItemInCart: (body: UpdateItemInCartBody) => void;
    setCart: Dispatch<SetStateAction<CartType | null>>;
    isLoadingCart: boolean;
};

export const CartContext = createContext<CartContextType>({
    cart: null,
    addItemInCart: () => {},
    createCart: () => {},
    setCart: () => {},
    deleteItemInCart: () => {},
    updateItemInCart: () => {},
    isLoadingCart: true,
});
