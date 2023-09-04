import Link from 'next/link';

import { Card } from '../ui/card';
import { OrderItemType } from '@/types/order';
import { truncateText } from '@/utils/truncate-text';
import { formatPrice } from '@/utils/format-price';

type AccordionItemProps = {
    orderItem: OrderItemType;
};
export const AccordionOrderItem = ({ orderItem }: AccordionItemProps) => {
    return (
        <Card className={'flex items-center justify-between py-4 px-6 mb-[20px]'}>
            <div className="flex gap-8 items-center">
                <div className={'w-[100px] h-auto'}>
                    <Link href={`/product/${orderItem.product._id}`}>
                        <img className={'w-[100%] h-[100%] object-cover'} src="/product.png" alt="" />
                    </Link>
                </div>
                <div>
                    <Link href={`/product/${orderItem.product._id}`}>
                        <p className={'text-sm'}>{truncateText(orderItem.product.name, 30)}</p>
                    </Link>
                    <p className={'text-sm mt-2'}>{truncateText(orderItem.product.text, 40)}</p>
                </div>
            </div>
            <div className={'flex flex-col items-center gap-3'}>
                <div className="text-sm font-thin">
                    Quantity: <span className="font-bold">{orderItem.quantity}</span>
                </div>
                <div className="text-sm font-thin">
                    Price: <span className="font-bold">{formatPrice(orderItem.product.price)}</span>
                </div>
            </div>
        </Card>
    );
};
