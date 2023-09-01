"use client"

import {createContext} from "react";

import {AddItemInCartBody, CartType, CreateCartBody, DeleteItemInCartBody, UpdateItemInCartBody} from "../types/cart";
import {ProductType} from "@/types/product";
import {AddItemInLikeBody, CreateLikeBody, DeleteItemInLikeBody, LikeType} from "@/types/like";

type RootContextType = {
    cart: CartType | null;
    createCart: (body: CreateCartBody) => void;
    addItemInCart: (body: AddItemInCartBody) => void;
    deleteItemInCart: (body: DeleteItemInCartBody) => void;
    updateItemInCart: (body: UpdateItemInCartBody) => void;
    like: LikeType | null;
    createLike: (body: CreateLikeBody) => void;
    addItemInLike: (body: AddItemInLikeBody) => void;
    deleteItemInLike: (body: DeleteItemInLikeBody) => void;
};

export const RootContext = createContext<RootContextType>({
    cart: null,
    like: null,
    addItemInCart: () => {},
    createCart: () => {},
    deleteItemInCart: () => {},
    updateItemInCart: () => {},
    createLike: () => {},
    addItemInLike: () => {},
    deleteItemInLike: () => {}
});
