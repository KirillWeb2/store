import { AxiosResponse } from 'axios';

import { request } from '@/lib/axios';
import {
    CreateOrderBody,
    CreateOrderResponse,
    GetAllOrdersParams,
    GetAllOrdersResponse,
    UpdateOrderBody,
    UpdateOrderResponse,
} from '@/types/order';

export const orderService = {
    getAll: async (body: GetAllOrdersParams) => {
        return request
            .post<void, AxiosResponse<GetAllOrdersResponse>>('/order/get-for-admin', body)
            .then((res) => res.data);
    },
    getAllForUser: async (body: GetAllOrdersParams) => {
        return request
            .post<void, AxiosResponse<GetAllOrdersResponse>>(`/order/get-for-user`, body)
            .then((res) => res.data);
    },
    updateOrder: async (body: UpdateOrderBody) => {
        return request
            .post<UpdateOrderBody, AxiosResponse<UpdateOrderResponse>>('/order/update', body)
            .then((res) => res.data);
    },
    createOrder: async (body: CreateOrderBody) => {
        return request
            .post<CreateOrderBody, AxiosResponse<CreateOrderResponse>>('/order/create', body)
            .then((res) => res.data);
    },
};
