'use client';

import { useSession } from '@clerk/nextjs';
import { useCallback, useContext, useEffect, useState } from 'react';

import { orderService } from '@/service/order-service';
import { OrderEnum, OrderType, UpdateOrderBody } from '@/types/order';
import { CartContext } from '@/context';

type UseOrderType = {
    isAdmin?: boolean;
};
export const useOrder = () => {
    const { isLoaded, session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const { setCart } = useContext(CartContext);

    const [orders, setOrders] = useState<null | OrderType[]>(null);

    const getOrders = useCallback(async (userId?: string) => {
        setIsLoading(true);

        if (userId) {
            const { orders } = await orderService.getAllForUser({ userId });
            setOrders(orders);
            return;
        }

        const { orders } = await orderService.getAll();
        setOrders(orders);
        setIsLoading(false);
    }, []);

    const updateInfo = useCallback(async () => {
        await getOrders();
    }, []);

    const updateOrder = useCallback(async (body: UpdateOrderBody) => {
        const { orders } = await orderService.updateOrder(body);
        setOrders(orders);
    }, []);

    const createOrder = useCallback(
        async (body: { items: { itemId: string; quantity: number }[]; status: OrderEnum; price: number }) => {
            const { cart, orders } = await orderService.createOrder({ ...body, userId: session?.user.id! });
            setCart(cart);
            setOrders(orders);
        },
        [session],
    );

    useEffect(() => {
        if (session) {
            getOrders(session.user.id);
        }
    }, [session]);

    return { orders, updateOrder, createOrder, updateInfo } as const;
};
