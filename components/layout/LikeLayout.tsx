'use client';

import { LikeContext } from '@/context';
import { useLike } from '@/hook/useLike';

type LikeLayoutProps = {
    children: React.ReactNode;
};

export const LikeLayout = ({ children }: LikeLayoutProps) => {
    const { like, deleteItem: deleteItemInLike, addItem: addItemInLike, createLike, isLoadingLike } = useLike();

    return (
        <LikeContext.Provider
            value={{
                like,
                addItemInLike,
                deleteItemInLike,
                createLike,
                isLoadingLike
            }}
        >
            {children}
        </LikeContext.Provider>
    );
};
