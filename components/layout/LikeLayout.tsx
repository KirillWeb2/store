'use client';

import { LikeContext } from '@/context';
import { useLike } from '@/hook/useLike';

type LikeLayoutProps = {
    children: React.ReactNode;
};

export const LikeLayout = ({ children }: LikeLayoutProps) => {
    const { like, deleteItem: deleteItemInLike, addItem: addItemInLike, createLike } = useLike();

    return (
        <LikeContext.Provider
            value={{
                like,
                addItemInLike,
                deleteItemInLike,
                createLike,
            }}
        >
            {children}
        </LikeContext.Provider>
    );
};
