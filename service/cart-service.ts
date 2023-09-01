import {AxiosResponse} from "axios";

import {request} from "@/lib/axios";
import {
    AddItemInCartBody,
    AddItemInCartResponse,
    CreateCartBody,
    CreateCartResponse, DeleteItemInCartBody, DeleteItemInCartResponse,
    GetCartBody,
    GetCartResponse, UpdateItemInCartBody, UpdateItemInCartResponse
} from "@/types/cart";


export const cartService = {
    getCart: async ({userId}: GetCartBody) => {
        return request.get<void, AxiosResponse<GetCartResponse>>("/cart/get", {params: {userId}})
            .then(res => res.data);
    },
    createCart: async (data: CreateCartBody) => {
        return request.post<CreateCartBody, AxiosResponse<CreateCartResponse>>("/cart/create", data)
            .then(res => res.data);
    },
    addItemInCart: async (data: AddItemInCartBody) => {
        return request.post<AddItemInCartBody, AxiosResponse<AddItemInCartResponse>>("/cart/add", data)
            .then(res => res.data)
    },
    updateItemInCart: async (data: UpdateItemInCartBody) => {
        return request.post<UpdateItemInCartBody, AxiosResponse<UpdateItemInCartResponse>>("/cart/update", data)
            .then(res => res.data)
    },
    deleteItemInCart: async (data: DeleteItemInCartBody) => {
        return request.post<DeleteItemInCartBody, AxiosResponse<DeleteItemInCartResponse>>("/cart/delete", data)
            .then(res => res.data)
    }
};
