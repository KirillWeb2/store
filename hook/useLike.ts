import { useCallback, useEffect, useState } from 'react';

import { AddItemInLikeBody, CreateLikeBody, DeleteItemInLikeBody, LikeType } from '@/types/like';
import { likeService } from '@/service/like-service';

export const useLike = () => {
    const [isLoadingLike, setIsLoadingLike] = useState(true);
    const [like, setLike] = useState<LikeType | null>(null);

    const getLike = useCallback(async () => {
        setIsLoadingLike(true);

        const { like } = await likeService.getLike();

        if (like) {
            setLike(like);
            setIsLoadingLike(false);
        } else {
            await createLike({ products: [] });
            setIsLoadingLike(false);
        }
    }, [setLike]);

    const createLike = useCallback(
        async (body: CreateLikeBody) => {
            const { like } = await likeService.createLike(body);
            setLike(like);
        },
        [setLike],
    );

    const deleteItem = useCallback(
        async (body: DeleteItemInLikeBody) => {
            const { like } = await likeService.deleteItemInLike(body);
            setLike(like);
        },
        [setLike],
    );

    const addItem = useCallback(
        async (body: AddItemInLikeBody) => {
            const { like } = await likeService.addItemInLike(body);
            setLike(like);
        },
        [setLike],
    );

    useEffect(() => {
        if (like === null) {
            getLike();
        }
    }, [like]);

    return {
        like,
        createLike,
        addItem,
        setLike,
        deleteItem,
        isLoadingLike,
    };
};
