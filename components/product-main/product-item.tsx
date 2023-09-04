'use client';

import Link from 'next/link';
import { useCallback, useContext } from 'react';
import { Heart, ShoppingBasket, Trash2 } from 'lucide-react';

import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { ProductType } from '@/types/product';
import { truncateText } from '@/utils/truncate-text';
import { RootContext } from '@/context/root';
import { formatPrice } from '@/utils/format-price';

type ProductItemProps = { item: ProductType };
export const ProductItem = ({ item }: ProductItemProps) => {
    const { cart, deleteItemInCart, addItemInCart, deleteItemInLike, addItemInLike, like } = useContext(RootContext);

    const handleSetItemInCart = useCallback(async () => {
        if (cart) {
            await addItemInCart({ quantity: 1, productId: item._id, cartId: cart._id });
        }
    }, [cart, addItemInCart]);

    const handleDeleteItemInCart = useCallback(async () => {
        if (cart) {
            await deleteItemInCart({ cartId: cart._id, productId: item._id });
        }
    }, [cart, deleteItemInCart]);

    const handleDeleteItemInLike = useCallback(async () => {
        if (like) {
            await deleteItemInLike({ likeId: like._id, productId: item._id });
        }
    }, [like, deleteItemInLike]);

    const handleAddItemInLike = useCallback(async () => {
        if (like) {
            await addItemInLike({ likeId: like._id, productId: item._id });
        }
    }, [like, addItemInLike]);

    const containedInTheCart = cart?.items!.find((i) => i.product?._id === item._id);

    const containedInTheLike = like?.products!.find((i) => i._id === item._id);

    return (
        <Card className="max-w-[350px] min-w-[200px]">
            <CardHeader>
                <div className="h-[210px]">
                    <Link href={`/product/${item._id}`}>
                        <img className="object-cover h-[100%] w-[100%]" src={`/product.png`} alt="" />
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <Link href={`/product/${item._id}`}>
                    <CardTitle>{truncateText(item.name, 30)}</CardTitle>
                </Link>
                <CardDescription className={'mt-4'}>{truncateText(item.text, 30)}</CardDescription>
                <CardDescription className={'mt-2'}>Price: {formatPrice(item.price)}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                {containedInTheCart ? (
                    <div className="flex items-center gap-2">
                        <Link href={'/cart'}>
                            <Button variant={'outline'}>In Cart</Button>
                        </Link>
                        <Button onClick={handleDeleteItemInCart} variant={'outline'}>
                            <Trash2 color={'red'} strokeWidth={1} absoluteStrokeWidth />
                        </Button>
                    </div>
                ) : (
                    <Button onClick={handleSetItemInCart} variant={'outline'}>
                        <ShoppingBasket strokeWidth={1} absoluteStrokeWidth />
                    </Button>
                )}

                {containedInTheLike ? (
                    <Button onClick={handleDeleteItemInLike} variant={'outline'}>
                        <Heart color={'red'} fill={'red'} strokeWidth={1} absoluteStrokeWidth />
                    </Button>
                ) : (
                    <Button onClick={handleAddItemInLike} variant={'outline'}>
                        <Heart strokeWidth={1} absoluteStrokeWidth />
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
