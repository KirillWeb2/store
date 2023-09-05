'use client';

import { createContext } from 'react';

import { AddItemInLikeBody, CreateLikeBody, DeleteItemInLikeBody, LikeType } from '@/types/like';

type LikeContextType = {
    like: LikeType | null;
    createLike: (body: CreateLikeBody) => void;
    addItemInLike: (body: AddItemInLikeBody) => void;
    deleteItemInLike: (body: DeleteItemInLikeBody) => void;
};

export const LikeContext = createContext<LikeContextType>({
    like: null,
    createLike: () => {},
    addItemInLike: () => {},
    deleteItemInLike: () => {},
});
