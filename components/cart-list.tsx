"use client"

import {useContext} from "react";

import {RootContext} from "@/context/root";
import {CartData} from "@/components/cart-data";
import {CartItem} from "@/components/cart-item";

export const CartList = () => {
    const {cart} = useContext(RootContext)

    if (!cart || (cart && cart.products.length === 0)) {
        return <div>
            <p>Корзина пуста</p>
        </div>
    }

    return <div>
        {cart?.products.map((el, ind) => (
            <CartItem key={el._id} item={el}/>
        ))}
        <CartData/>
    </div>
}