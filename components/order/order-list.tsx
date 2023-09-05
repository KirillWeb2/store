'use client';

import { useContext } from 'react';

import { OrderContext } from '@/context';

import { OrderItem } from '.';

type OrderListtProps = {};

export const OrderList = ({}: OrderListtProps) => {
    const { orders } = useContext(OrderContext);

    return <div>{orders?.map((el) => <OrderItem key={el._id} order={el} />)}</div>;
};
