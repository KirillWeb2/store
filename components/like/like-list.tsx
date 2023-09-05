'use client';

import { useContext } from 'react';

import { LikeContext } from '@/context';
import { LikeItem } from '.';

type LikeListProps = {};
export const LikeList = ({}: LikeListProps) => {
    const { like } = useContext(LikeContext);

    if (!like || like?.products.length === 0) {
        return (
            <div>
                <p>Любимых нет</p>
            </div>
        );
    }

    return (
        <div className="flex justify-start flex-wrap gap-3">
            {like?.products.map((el) => <LikeItem key={el._id} item={el} />)}
        </div>
    );
};
