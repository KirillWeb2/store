import { OrderType } from '@/types/order';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { AccordionOrderItem } from '.';

type OrderAccordionType = {
    order: OrderType;
};
export const OrderAccordion = ({ order }: OrderAccordionType) => {
    return (
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
    );
};
