'use client';

import Link from 'next/link';
import { Heart, ShoppingBasket, Trash2 } from 'lucide-react';

import { Button } from './ui/button';
import { ButtonLoading } from './ui/button-loading';

import { useProduct } from '@/hook/useProduct';

import { ProductType } from '@/types/product';

type ProductManagementProps = {
    product: ProductType;
};
export const ProductManagement = ({ product }: ProductManagementProps) => {
    const {
        handleSetItemInCart,
        handleDeleteItemInCart,
        containedInTheCart,
        containedInTheLike,
        handleAddItemInLike,
        handleDeleteItemInLike,
        isLoadingCart,
        isLoadingLike,
    } = useProduct({ product });

    return (
        <div className="mt-4 flex items-center justify-between w-[100%]">
            {containedInTheCart ? (
                <div className="flex items-center gap-2">
                    <Link href={'/cart'}>
                        <Button disabled={isLoadingCart} variant={'outline'}>
                            In Cart
                        </Button>
                    </Link>
                    <ButtonLoading disabled={isLoadingCart} onClick={handleDeleteItemInCart} variant={'outline'}>
                        <Trash2 color={'red'} strokeWidth={1} absoluteStrokeWidth />
                    </ButtonLoading>
                </div>
            ) : (
                <ButtonLoading disabled={isLoadingCart} onClick={handleSetItemInCart} variant={'outline'}>
                    <ShoppingBasket strokeWidth={1} absoluteStrokeWidth />
                </ButtonLoading>
            )}

            {containedInTheLike ? (
                <ButtonLoading disabled={isLoadingLike} onClick={handleDeleteItemInLike} variant={'outline'}>
                    <Heart color={'red'} fill={'red'} strokeWidth={1} absoluteStrokeWidth />
                </ButtonLoading>
            ) : (
                <ButtonLoading disabled={isLoadingLike} onClick={handleAddItemInLike} variant={'outline'}>
                    <Heart strokeWidth={1} absoluteStrokeWidth />
                </ButtonLoading>
            )}
        </div>
    );
};
