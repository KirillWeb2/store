'use client';

import { useContext } from 'react';

import { CartContext } from '@/context';
import { CartItem, CartData } from '.';

export const CartList = () => {
    const { cart } = useContext(CartContext);

    if (!cart || (cart && cart.items.length === 0)) {
        return <p>Корзина пуста</p>;
    }

    return (
        <>
            <div className="bg-[#070d1c]">{cart?.items.map((el, ind) => <CartItem key={el._id} item={el} />)}</div>
            <CartData cart={cart} />
        </>
    );
};
