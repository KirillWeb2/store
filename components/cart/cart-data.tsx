'use client';

import { useCallback, useContext } from 'react';

import { formatPrice } from '@/utils/format-price';

import { OrderEnum } from '@/types/order';
import { CartType } from '@/types/cart';
import { OrderContext } from '@/context';

import { Button } from '../ui/button';

type CartDataProps = {
    cart: CartType;
};
export const CartData = ({ cart }: CartDataProps) => {
    const { createOrder } = useContext(OrderContext);

    const totalPrice = cart.items.reduce((acc, el) => {
        return (acc += el.quantity * el.product.price);
    }, 0);

    const handleFormOrder = useCallback(async () => {
        try {
            const items = cart.items.map((el) => {
                return {
                    itemId: el.product._id,
                    quantity: el.quantity,
                };
            });

            await createOrder({
                userId: '',
                items: items,
                price: totalPrice,
                status: OrderEnum.CREATE,
            });
        } catch (error) {
            console.log(error);
        }
    }, [createOrder]);

    return (
        <div className={'flex items-center justify-center gap-10 fixed bottom-0 right-0 w-[100%] h-[100px]'}>
            <p>
                Общая стоимость: <span>{formatPrice(totalPrice)}</span>
            </p>
            <Button onClick={handleFormOrder} variant={'secondary'}>
                Form an order
            </Button>
        </div>
    );
};
