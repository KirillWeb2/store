'use client';

import { OrderContext } from '@/context';
import { useOrder } from '@/hook/useOrder';

type OrderLayoutProps = {
    children: React.ReactNode;
    isAdmin: boolean;
};

export const OrderLayout = ({ children, isAdmin }: OrderLayoutProps) => {
    const { createOrder, orders, updateInfo, updateOrder } = useOrder();

    return (
        <OrderContext.Provider
            value={{
                createOrder,
                orders,
                updateInfo,
                updateOrder,
                isAdmin
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};
