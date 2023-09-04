'use client';

import { useContext } from 'react';

import { RootContext } from '@/context/root';
import { CartData } from '@/components/cart/cart-data';
import { CartItem } from './cart-item';

export const CartList = () => {
    const { cart } = useContext(RootContext);

    if (!cart || (cart && cart.items.length === 0)) {
        return (
            <div>
                <p>Корзина пуста</p>
            </div>
        );
    }

    return (
        <div>
            <div className='bg-[#070d1c]'>
            {cart?.items.map((el, ind) => <CartItem key={el._id} item={el} />)}
            </div>
            <CartData cart={cart}/>
        </div>
    );
};
