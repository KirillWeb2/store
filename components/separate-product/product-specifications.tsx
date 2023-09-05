'use client';

import { useCallback, useContext } from 'react';
import Link from 'next/link';

import { CartContext } from '@/context';
import { ProductType } from '@/types/product';
import { formatPrice } from '@/utils/format-price';
import { Button } from '@/components/ui/button';

type ProductSpecificationsProps = {
    product: ProductType;
};

export const ProductSpecifications = ({ product }: ProductSpecificationsProps) => {
    const { cart, addItemInCart } = useContext(CartContext);

    const containedInTheCart = cart?.items.find((el) => el._id === product._id);

    const handleBuy = useCallback(async () => {
        if (cart) {
            await addItemInCart({ quantity: 1, productId: product._id, cartId: cart._id });
        }
    }, [cart, addItemInCart]);

    return (
        <div className="w-[59%]">
            <h4 className="text-xl font-thin">{product.name}</h4>
            <div className="text-lg font-thin mt-4">
                Price: <span className="font-bold">{formatPrice(product.price)}</span>
            </div>
            <div className="text-xl font-thin">
                Maker: <span className="font-bold">{product.maker}</span>
            </div>
            <div className="mt-4">
                {containedInTheCart ? (
                    <Link href="/cart">
                        <Button variant={'secondary'}>In Cart</Button>
                    </Link>
                ) : (
                    <Button onClick={handleBuy} variant={'secondary'}>
                        Buy
                    </Button>
                )}
            </div>
        </div>
    );
};
