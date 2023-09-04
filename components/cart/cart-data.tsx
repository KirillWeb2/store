'use client';

import { CartType } from '@/types/cart';
import { Button } from '../ui/button';
import { formatPrice } from '@/utils/format-price';
import { useOrder } from '@/hook/useOrder';
import { useCallback } from 'react';
import { OrderEnum } from '@/types/order';

type CartDataProps = {
    cart: CartType;
};
export const CartData = ({ cart }: CartDataProps) => {
 
    const { createOrder } = useOrder({});

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
