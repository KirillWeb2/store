'use client';

import { createContext } from 'react';

import { CreateOrderBody, OrderType, UpdateOrderBody } from '@/types/order';

type OrderContextType = {
    orders: OrderType[] | null;
    isAdmin: boolean;
    updateOrder: (body: UpdateOrderBody) => void;
    createOrder: (body: CreateOrderBody) => void;
    updateInfo: () => void;
};

export const OrderContext = createContext<OrderContextType>({
    orders: null,
    isAdmin: false,
    updateOrder: () => {},
    createOrder: () => {},
    updateInfo: () => {},
});
