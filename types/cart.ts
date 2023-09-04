import {ProductType} from "./product";


export type CartType = {
    _id: string;
    userId: string;
    items: CartItemType[];
}

export type GetCartBody = {
    userId: string;
}

export type GetCartResponse = {
    cart: CartType
}

export type CartItemType = {
    _id: string;
    quantity: number;
    product: ProductType;
}

export type CreateCartBody = {
    userId: string;
    products: string[];
}

export type CreateCartResponse = {
    cart: CartType;
}

export type AddItemInCartBody = {
    quantity?: number;
    productId: string;
    cartId: string;
}
export type AddItemInCartResponse = {
    cart: CartType;
}

export type DeleteItemInCartBody = {
    productId: string;
    cartId: string;
}
export type DeleteItemInCartResponse = {
    cart: CartType;
}

export type UpdateItemInCartBody = {
    cartId: string;
    cartItemId: string;
    quantity: number;
}

export type UpdateItemInCartResponse = {
    cart: CartType;
}