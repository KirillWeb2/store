'use client';

import { useContext } from 'react';

import { CartData } from './cart-data';
import { CartItem } from './cart-item';
import { CartContext } from '@/context';
import { Loading } from '../loading';
import { Nothing } from '../nothing';

export const CartList = () => {
    const { cart, isLoadingCart } = useContext(CartContext);

    if (isLoadingCart || cart === null) {
        return <Loading />;
    }

    if (cart && cart.items.length === 0) {
        return <Nothing />
    }

    return (
        <>
            <div className="bg-[#070d1c]">{cart?.items.map((el, ind) => <CartItem key={el._id} item={el} />)}</div>
            <CartData cart={cart} />
        </>
    );
};
