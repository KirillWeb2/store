'use client';

import { useContext } from 'react';

import { OrderContext } from '@/context';

import { OrderItem } from './order-item';
import { Loading } from '../loading';
import { Nothing } from '../nothing';
import { OrderFiltering } from './order-filtering';

type OrderListtProps = {};

export const OrderList = ({}: OrderListtProps) => {
    const { orders, isLoadingOrder, updateStatusFilter, statusFilter } = useContext(OrderContext);

    if (!orders || isLoadingOrder) {
        return (
            <div>
                <OrderFiltering updateStatusFilter={updateStatusFilter} statusFilter={statusFilter} />
                <Loading />;
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div>
                <OrderFiltering updateStatusFilter={updateStatusFilter} statusFilter={statusFilter} />
                <Nothing />;
            </div>
        );
    }

    return (
        <div>
            <OrderFiltering updateStatusFilter={updateStatusFilter} statusFilter={statusFilter} />
            {orders?.map((el) => <OrderItem key={el._id} order={el} />)}
        </div>
    );
};
