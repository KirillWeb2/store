'use client';

import { useCallback, useEffect, useState } from 'react';

import { cartService } from '@/service/cart-service';
import { AddItemInCartBody, CartType, DeleteItemInCartBody, UpdateItemInCartBody } from '@/types/cart';

export const useCart = () => {
    const [isLoadingCart, setIsLoadingCart] = useState(true);
    const [cart, setCart] = useState<CartType | null>(null);

    const getCart = useCallback(async () => {
        setIsLoadingCart(true);

        const { cart } = await cartService.getCart();

        if (cart) {
            setCart(cart);
            setIsLoadingCart(false);
        } else {
            await createCart();
            setIsLoadingCart(false);
        }
    }, [setCart]);

    const createCart = useCallback(async () => {
        const { cart } = await cartService.createCart();
        setCart(cart);
    }, [setCart]);

    const deleteItem = useCallback(
        async (body: DeleteItemInCartBody) => {
            const { cart } = await cartService.deleteItemInCart(body);
            setCart(cart);
        },
        [setCart],
    );

    const updateItem = useCallback(
        async (body: UpdateItemInCartBody) => {
            const { cart } = await cartService.updateItemInCart(body);
            setCart(cart);
        },
        [setCart],
    );

    const addItem = useCallback(
        async (body: AddItemInCartBody) => {
            const { cart } = await cartService.addItemInCart(body);
            setCart(cart);
        },
        [setCart],
    );

    useEffect(() => {
        if (cart === null) {
            getCart();
        }
    }, [cart]);

    return {
        cart,
        createCart,
        addItem,
        setCart,
        deleteItem,
        updateItem,
        isLoadingCart,
    };
};
