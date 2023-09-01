import {useCallback, useEffect, useState} from "react";
import {useSession} from "@clerk/nextjs";

import {AddItemInLikeBody, CreateLikeBody, DeleteItemInLikeBody, LikeType} from "@/types/like";
import {likeService} from "@/service/like-service";


export const useLike = () => {
    const {isLoaded, session} = useSession()

    const [like, setLike] = useState<LikeType | null>(null)

    const getLike = useCallback(async (userId: string) => {
        const {like} = await likeService.getLike({userId})

        if (like) {
            setLike(like)
        } else {
            await createLike({userId: userId, products: []})
        }
    }, [setLike])

    const createLike = useCallback(async (body: CreateLikeBody) => {
        const {like} = await likeService.createLike(body)
        setLike(like)
    }, [setLike])

    const deleteItem = useCallback(async (body: DeleteItemInLikeBody) => {
        const {like} = await likeService.deleteItemInLike(body)
        setLike(like)
    }, [setLike])

    const addItem = useCallback(async (body: AddItemInLikeBody) => {
        const {like} = await likeService.addItemInLike(body)
        setLike(like)
    }, [setLike])

    useEffect(() => {
        if (isLoaded && session && like === null) {
            getLike(session.user.id)
        }
    }, [isLoaded, session, like])

    return {
        like, createLike, addItem, setLike, deleteItem
    }
}