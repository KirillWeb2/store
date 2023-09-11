'use client';

import { createContext } from 'react';

import { CreateOrderBody, OrderFilterEnum, OrderType, UpdateOrderBody } from '@/types/order';

type OrderContextType = {
    orders: OrderType[] | null;
    isAdmin: boolean;
    updateOrder: (body: UpdateOrderBody) => void;
    createOrder: (body: CreateOrderBody) => void;
    updateInfo: () => void;
    isLoadingOrder: boolean;
    updateStatusFilter: (status: OrderFilterEnum) => void;
    statusFilter: OrderFilterEnum
};

export const OrderContext = createContext<OrderContextType>({
    orders: null,
    isAdmin: false,
    updateOrder: () => {},
    createOrder: () => {},
    updateInfo: () => {},
    isLoadingOrder: true,
    updateStatusFilter: () => {},
    statusFilter: OrderFilterEnum.CREATE
});
