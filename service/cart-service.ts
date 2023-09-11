import {AxiosResponse} from "axios";

import {request} from "@/lib/axios";
import {
    AddItemInCartBody,
    AddItemInCartResponse,
    CreateCartResponse, DeleteItemInCartBody, DeleteItemInCartResponse,
    GetCartResponse, UpdateItemInCartBody, UpdateItemInCartResponse
} from "@/types/cart";


export const cartService = {
    getCart: async () => {
        return request.get<void, AxiosResponse<GetCartResponse>>("/cart/get")
            .then(res => res.data);
    },
    createCart: async () => {
        return request.post<void, AxiosResponse<CreateCartResponse>>("/cart/create")
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
