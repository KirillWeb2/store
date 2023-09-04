import { Minus, Plus, Trash2 } from 'lucide-react';

import { useCallback, useContext, useState } from 'react';

import { CartItemType } from '@/types/cart';
import { Button } from '@/components/ui/button';
import { truncateText } from '@/utils/truncate-text';
import { RootContext } from '@/context/root';
import { Card } from '../ui/card';
import Link from 'next/link';
import { formatPrice } from '@/utils/format-price';

type CartItemProps = {
    item: CartItemType;
};
export const CartItem = ({ item }: CartItemProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const { cart, updateItemInCart, deleteItemInCart } = useContext(RootContext);

    const handleDeleteItemInCart = useCallback(async () => {
        if (cart) {
            setIsLoading(true);
            await deleteItemInCart({
                cartId: cart._id,
                productId: item.product._id,
            });
            setIsLoading(false);
        }
    }, [setIsLoading, deleteItemInCart, cart, item]);

    const handleIncItemQuantity = useCallback(async () => {
        if (cart) {
            setIsLoading(true);
            await updateItemInCart({
                cartId: cart._id,
                cartItemId: item._id,
                quantity: 1,
            });
            setIsLoading(false);
        }
    }, [cart, updateItemInCart, item, setIsLoading]);

    const handleDecItemQuantity = useCallback(async () => {
        if (cart) {
            setIsLoading(true);
            await updateItemInCart({
                cartId: cart._id,
                cartItemId: item._id,
                quantity: -1,
            });
            setIsLoading(false);
        }
    }, [cart, updateItemInCart, item, setIsLoading]);

    const disabledDec = item.quantity === 1 || isLoading;
    const disabledInc = isLoading;
    const disabledDelete = isLoading;

    return (
        <Card className={'flex items-center justify-between py-4 px-6 mb-[20px]'}>
            <div className='flex gap-8 items-center'>
                <div className={'w-[100px] h-auto'}>
                    <Link href={`/product/${item.product._id}`}>
                        <img className={'w-[100%] h-[100%] object-cover'} src="/product.png" alt="" />
                    </Link>
                </div>
                <div>
                    <Link href={`/product/${item.product._id}`}>
                        <p className={'text-sm'}>{truncateText(item.product.name, 30)}</p>
                    </Link>
                    <p className={'text-sm'}>{truncateText(item.product.text, 40)}</p>
                    <p className={'text-sm mt-2'}>{formatPrice(item.product.price)}</p>
                </div>
            </div>
            <div className={'flex items-center gap-3'}>
                <Button onClick={handleIncItemQuantity} disabled={disabledInc} size={'sm'} variant={'outline'}>
                    <Plus />
                </Button>
                <span>{item.quantity}</span>
                <Button onClick={handleDecItemQuantity} disabled={disabledDec} size={'sm'} variant={'outline'}>
                    <Minus />
                </Button>
            </div>
            <Button onClick={handleDeleteItemInCart} disabled={disabledDelete}>
                <Trash2 />
            </Button>
        </Card>
    );
};
