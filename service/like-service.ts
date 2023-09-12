import { AxiosResponse } from 'axios';

import { request } from '@/lib/axios';

import {
    AddItemInLikeBody,
    AddItemInLikeResponse,
    CreateLikeBody,
    CreateLikeResponse,
    DeleteItemInLikeBody,
    DeleteItemInLikeResponse,
    GetLikeResponse,
} from '@/types/like';

export const likeService = {
    getLike: async () => {
        return request.post<void, AxiosResponse<GetLikeResponse>>('/like/get').then((res) => res.data);
    },
    createLike: async ({ products }: CreateLikeBody) => {
        return request
            .post<CreateLikeBody, AxiosResponse<CreateLikeResponse>>('/like/create', {
                products,
            })
            .then((res) => res.data);
    },
    addItemInLike: async ({ likeId, productId }: AddItemInLikeBody) => {
        return request
            .post<AddItemInLikeBody, AxiosResponse<AddItemInLikeResponse>>('/like/add', {
                likeId,
                productId,
            })
            .then((res) => res.data);
    },
    deleteItemInLike: async ({ likeId, productId }: DeleteItemInLikeBody) => {
        return request
            .post<DeleteItemInLikeBody, AxiosResponse<DeleteItemInLikeResponse>>('/like/delete', {
                likeId,
                productId,
            })
            .then((res) => res.data);
    },
};
