'use client';

import { useCallback, useContext } from 'react';
import { Heart } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { truncateText } from '@/utils/truncate-text';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/types/product';
import { RootContext } from '@/context/root';
import { formatPrice } from '@/utils/format-price';

type LikeItemProps = {
    item: ProductType;
};
export const LikeItem = ({ item }: LikeItemProps) => {
    const { like, deleteItemInLike } = useContext(RootContext);

    const handleDeleteItemInLike = useCallback(async () => {
        if (like) {
            await deleteItemInLike({ likeId: like._id, productId: item._id });
        }
    }, [like, item, deleteItemInLike]);

    return (
        <Card className="max-w-[350px] min-w-[200px]">
            <CardHeader>
                <div className="h-[210px]">
                    <img className="object-cover h-[100%] w-[100%]" src={`/product.png`} alt="" />
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle>{truncateText(item.text, 30)}</CardTitle>
                <CardDescription className={'mt-4'}>{truncateText(item.text, 30)}</CardDescription>
                <CardDescription className={'mt-2'}>Price: {formatPrice(item.price)}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <Button onClick={handleDeleteItemInLike} variant={'outline'}>
                    <Heart color={'red'} fill={'red'} strokeWidth={1} absoluteStrokeWidth />
                </Button>
            </CardFooter>
        </Card>
    );
};
