'use client';
import { useCallback, useContext, useState } from 'react';

import { OrderEnum, OrderType } from '@/types/order';
import { formatPrice } from '@/utils/format-price';
import { OrderContext } from '@/context';

import { Card } from '../ui/card';
import { Button } from '../ui/button';

import { OrderSelect, OrderAccordion } from '.';

type OrderItemProps = {
    order: OrderType;
};

export const OrderItem = ({ order }: OrderItemProps) => {
    const { updateOrder, updateInfo, isAdmin } = useContext(OrderContext);

    const [status, setStatus] = useState<OrderEnum>(order.status);
    const [isLoading, setIsLoading] = useState(false);

    const handleSaveOrderInfo = useCallback(async () => {
        if (status) {
            setIsLoading(true);
            await updateOrder({ orderId: order._id, status: status });
            setIsLoading(false);
        }
    }, [status]);

    const handleUpdateInfo = useCallback(async () => {
        setIsLoading(true);
        await updateInfo();
        setIsLoading(false);
    }, []);

    const updateStatusEvent = useCallback((status: OrderEnum) => {
        setStatus(status);
    }, []);

    return (
        <Card className="p-6">
            <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                    <p className="flex items-center gap-3 text-sm font-thin">
                        Status:
                        {isAdmin ? (
                            <OrderSelect
                                handleSaveOrderInfo={handleSaveOrderInfo}
                                isLoading={isLoading}
                                order={order}
                                updateStatusEvent={updateStatusEvent}
                            />
                        ) : (
                            <span className="font-bold">{order.status}</span>
                        )}
                    </p>
                    <p className="text-sm font-thin">
                        Price: <span className="font-bold">{formatPrice(order.price)}</span>
                    </p>
                </div>
                <Button disabled={isLoading} onClick={handleUpdateInfo} variant={'outline'}>
                    Update info
                </Button>
            </div>
            <OrderAccordion order={order} />
        </Card>
    );
};
