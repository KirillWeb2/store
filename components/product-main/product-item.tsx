'use client';

import Link from 'next/link';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

import { truncateText } from '@/utils/truncate-text';
import { formatPrice } from '@/utils/format-price';

import { ProductType } from '@/types/product';

import { ProductManagement } from '../product-management';

type ProductItemProps = { item: ProductType };
export const ProductItem = ({ item }: ProductItemProps) => {
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
            <CardFooter className='w-[100%]'>
                <ProductManagement product={item} />
            </CardFooter>
        </Card>
    );
};
