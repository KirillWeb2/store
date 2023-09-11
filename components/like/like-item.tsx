'use client';

import { useCallback, useContext } from 'react';
import { Heart } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { truncateText } from '@/utils/truncate-text';
import { ProductType } from '@/types/product';
import { formatPrice } from '@/utils/format-price';
import { LikeContext } from '@/context';
import { ButtonLoading } from '../ui/button-loading';
import Link from 'next/link';

type LikeItemProps = {
    item: ProductType;
};
export const LikeItem = ({ item }: LikeItemProps) => {
    const { like, deleteItemInLike } = useContext(LikeContext);

    const handleDeleteItemInLike = useCallback(async () => {
        if (like) {
            await deleteItemInLike({ likeId: like._id, productId: item._id });
        }
    }, [like, item, deleteItemInLike]);

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
                    <CardTitle>{truncateText(item.text, 30)}</CardTitle>
                </Link>
                <CardDescription className={'mt-4'}>{truncateText(item.text, 30)}</CardDescription>
                <CardDescription className={'mt-2'}>Price: {formatPrice(item.price)}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <ButtonLoading onClick={handleDeleteItemInLike} variant={'outline'}>
                    <Heart color={'red'} fill={'red'} strokeWidth={1} absoluteStrokeWidth />
                </ButtonLoading>
            </CardFooter>
        </Card>
    );
};
