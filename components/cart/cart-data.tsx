'use client';

import { useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';

import { formatPrice } from '@/utils/format-price';

import { OrderEnum } from '@/types/order';
import { CartType } from '@/types/cart';
import { OrderContext } from '@/context';

import { ButtonLoading } from '../ui/button-loading';

type CartDataProps = {
    cart: CartType;
};
export const CartData = ({ cart }: CartDataProps) => {
    const { createOrder } = useContext(OrderContext);
    const router = useRouter();

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

            await router.push('/orders');
        } catch (error) {
            console.log(error);
        }
    }, [createOrder, cart]);

    return (
        <div className={'flex items-center justify-center gap-10 fixed bottom-0 right-0 w-[100%] h-[100px]'}>
            <p>
                Общая стоимость: <span>{formatPrice(totalPrice)}</span>
            </p>
            <ButtonLoading onClick={handleFormOrder} variant={'secondary'}>
                Form an order
            </ButtonLoading>
        </div>
    );
};
