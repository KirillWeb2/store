'use client';

import { useCallback, useContext } from 'react';

import { CartContext, LikeContext } from '@/context';
import { ProductType } from '@/types/product';
import { sendToastify } from '@/utils/sendToastify';

type UseProductProps = {
    product: ProductType;
};
export const useProduct = ({ product }: UseProductProps) => {
    const { cart, deleteItemInCart, addItemInCart, isLoadingCart } = useContext(CartContext);
    const { like, addItemInLike, deleteItemInLike, isLoadingLike } = useContext(LikeContext);

    const containedInTheCart = cart?.items!.find((i) => i.product?._id === product._id);

    const containedInTheLike = like?.products!.find((i) => i._id === product._id);

    const handleSetItemInCart = useCallback(async () => {
        try {
            if (cart) {
                await addItemInCart({ quantity: 1, productId: product._id, cartId: cart._id });
                sendToastify({ text: 'The product has been added to the cart!' });
            }
        } catch (error) {
            console.log(error);
        }
    }, [cart, addItemInCart]);

    const handleDeleteItemInCart = useCallback(async () => {
        try {
            if (cart) {
                await deleteItemInCart({ cartId: cart._id, cartItemId: containedInTheCart?._id ?? '' });
                sendToastify({ text: 'The product has been removed from the cart!' });
            }
        } catch (error) {
            console.log(error);
        }
    }, [cart, deleteItemInCart]);

    const handleDeleteItemInLike = useCallback(async () => {
        try {
            if (like) {
                await deleteItemInLike({ likeId: like._id, productId: product._id });
                sendToastify({ text: 'Item removed from favorites!' });
            }
        } catch (error) {
            console.log(error);
        }
    }, [like, deleteItemInLike]);

    const handleAddItemInLike = useCallback(async () => {
        try {
            if (like) {
                await addItemInLike({ likeId: like._id, productId: product._id });
                sendToastify({ text: 'Product added to favorites!' });
            }
        } catch (error) {
            console.log(error);
        }
    }, [like, addItemInLike]);

    return {
        handleAddItemInLike,
        handleDeleteItemInLike,
        handleDeleteItemInCart,
        handleSetItemInCart,
        containedInTheLike,
        containedInTheCart,
        isLoadingCart,
        isLoadingLike,
    };
};
