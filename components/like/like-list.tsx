'use client';

import { useContext } from 'react';

import { LikeContext } from '@/context';
import { LikeItem } from './like-item';
import { Loading } from '../loading';
import { Nothing } from '../nothing';

type LikeListProps = {};
export const LikeList = ({}: LikeListProps) => {
    const { like, isLoadingLike } = useContext(LikeContext);

    if (!like || isLoadingLike) {
        return <Loading />;
    }

    if (like?.products.length === 0) {
        return <Nothing />
    }

    return (
        <div className="flex justify-start flex-wrap gap-3">
            {like?.products.map((el) => <LikeItem key={el._id} item={el} />)}
        </div>
    );
};
