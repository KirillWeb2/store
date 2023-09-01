import {AxiosResponse} from "axios";

import {request} from "@/lib/axios";

import {
    AddItemInLikeBody,
    AddItemInLikeResponse,
    CreateLikeBody,
    CreateLikeResponse, DeleteItemInLikeBody, DeleteItemInLikeResponse,
    GetLikeBody,
    GetLikeResponse
} from "@/types/like";


export const likeService = {
    getLike: async ({userId}: GetLikeBody) => {
        return request.get<void, AxiosResponse<GetLikeResponse>>("/like/get", {params: {userId}})
            .then(res => res.data);
    },
    createLike: async ({userId, products}: CreateLikeBody) => {
        return request.post<CreateLikeBody, AxiosResponse<CreateLikeResponse>>("/like/create", {
            userId,
            products,
        }).then(res => res.data);
    },
    addItemInLike: async ({likeId, productId}: AddItemInLikeBody) => {
        return request.post<AddItemInLikeBody, AxiosResponse<AddItemInLikeResponse>>("/like/add", {
            likeId, productId
        }).then(res => res.data)
    },
    deleteItemInLike: async ({likeId, productId}: DeleteItemInLikeBody) => {
        return request.post<DeleteItemInLikeBody, AxiosResponse<DeleteItemInLikeResponse>>("/like/delete", {
            likeId, productId
        }).then(res => res.data)
    }
};
