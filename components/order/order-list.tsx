'use client';

import { useOrder } from '@/hook/useOrder';
import { OrderItem } from './order-item';

type OrderListtProps = {
    isAdmin: boolean;
};

export const OrderList = ({ isAdmin }: OrderListtProps) => {
    const { orders } = useOrder({ isAdmin });

    return <div>{orders?.map((el) => <OrderItem key={el._id} isAdmin={isAdmin} order={el} />)}</div>;
};
