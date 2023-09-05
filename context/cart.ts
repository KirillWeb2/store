'use client';

import { Dispatch, SetStateAction, createContext } from 'react';

import { AddItemInCartBody, CartType, CreateCartBody, DeleteItemInCartBody, UpdateItemInCartBody } from '../types/cart';

type CartContextType = {
    cart: CartType | null;
    createCart: (body: CreateCartBody) => void;
    addItemInCart: (body: AddItemInCartBody) => void;
    deleteItemInCart: (body: DeleteItemInCartBody) => void;
    updateItemInCart: (body: UpdateItemInCartBody) => void;
    setCart: Dispatch<SetStateAction<CartType | null>>;
};

export const CartContext = createContext<CartContextType>({
    cart: null,
    addItemInCart: () => {},
    createCart: () => {},
    setCart: () => {},
    deleteItemInCart: () => {},
    updateItemInCart: () => {},
});
