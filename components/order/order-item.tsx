'use client';
import { useCallback, useState } from 'react';

import { useOrder } from '@/hook/useOrder';

import { OrderEnum, OrderType } from '@/types/order';
import { formatPrice } from '@/utils/format-price';
import { AccordionOrderItem } from './accordion-item';

import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type OrderItemProps = {
    order: OrderType;
    isAdmin: boolean;
};

export const OrderItem = ({ order, isAdmin }: OrderItemProps) => {
    const { updateOrder, updateInfo } = useOrder({ isAdmin });
    console.log(order.status)
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

    const renderSelect = (
        <div className="flex items-center gap-1">
            <Select onValueChange={updateStatusEvent}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={order.status} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={OrderEnum.CREATE}>{OrderEnum.CREATE}</SelectItem>
                        <SelectItem value={OrderEnum.DELIVERED}>{OrderEnum.DELIVERED}</SelectItem>
                        <SelectItem value={OrderEnum.FORMED_SENDING}>{OrderEnum.FORMED_SENDING}</SelectItem>
                        <SelectItem value={OrderEnum.SHIPPED}>{OrderEnum.SHIPPED}</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button disabled={status === order.status || isLoading} onClick={handleSaveOrderInfo} variant={'outline'}>
                Save
            </Button>
        </div>
    );

    return (
        <Card className="p-6">
            <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                    <p className="flex items-center gap-3 text-sm font-thin">
                        Status: {isAdmin ? renderSelect : <span className="font-bold">{order.status}</span>}
                    </p>
                    <p className="text-sm font-thin">
                        Price: <span className="font-bold">{formatPrice(order.price)}</span>
                    </p>
                </div>
                <Button disabled={isLoading} onClick={handleUpdateInfo} variant={'outline'}>
                    Update info
                </Button>
            </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Order products?</AccordionTrigger>
                    <AccordionContent>
                        {order.items.map((orderItem) => (
                            <AccordionOrderItem key={orderItem.product._id} orderItem={orderItem} />
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    );
};
