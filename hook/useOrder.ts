'use client';

import { useCallback, useContext, useEffect, useState } from 'react';

import { OrderEnum, OrderFilterEnum, OrderType, UpdateOrderBody } from '@/types/order';

import { orderService } from '@/service/order-service';

import { CartContext } from '@/context';

export const useOrder = ({ isAdmin }: { isAdmin: boolean }) => {
    const [isLoadingOrder, setIsLoadingOrder] = useState(true);
    const [statusFilter, setStatusFilter] = useState(OrderFilterEnum.ALL);

    const { setCart } = useContext(CartContext);

    const [orders, setOrders] = useState<null | OrderType[]>(null);

    const getOrders = useCallback(async () => {
        setIsLoadingOrder(true);

        if (isAdmin) {
            const { orders } = await orderService.getAll({ statusFilter });
            setOrders(orders);
            setIsLoadingOrder(false);
            return;
        }

        const { orders } = await orderService.getAllForUser({ statusFilter });
        setOrders(orders);
        setIsLoadingOrder(false);
    }, [statusFilter]);

    const updateInfo = useCallback(async () => {
        await getOrders();
    }, []);

    const updateOrder = useCallback(async (body: UpdateOrderBody) => {
        const { orders } = await orderService.updateOrder(body);
        setOrders(orders);
    }, []);

    const createOrder = useCallback(
        async (body: { items: { itemId: string; quantity: number }[]; status: OrderEnum; price: number }) => {
            const { cart, orders } = await orderService.createOrder({ ...body });
            setCart(cart);
            setOrders(orders);
        },
        [],
    );

    const updateStatusFilter = useCallback((status: OrderFilterEnum) => {
        setStatusFilter(status);
    }, []);

    useEffect(() => {
        getOrders();
    }, [statusFilter]);

    useEffect(() => {
        if (!orders) {
            getOrders();
        }
    }, [orders]);

    return { orders, updateOrder, createOrder, updateInfo, isLoadingOrder, updateStatusFilter, statusFilter } as const;
};
