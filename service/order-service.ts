import { AxiosResponse } from 'axios';

import { request } from '@/lib/axios';
import {
    CreateOrderBody,
    CreateOrderResponse,
    GetAllOrdersResponse,
    GetOrdersForUserBody,
    UpdateOrderBody,
    UpdateOrderResponse,
} from '@/types/order';

export const orderService = {
    getAll: async () => {
        return request.get<void, AxiosResponse<GetAllOrdersResponse>>('/order/get-all').then((res) => res.data);
    },
    getAllForUser: async (params: GetOrdersForUserBody) => {
        return request
            .get<void, AxiosResponse<GetAllOrdersResponse>>(`/order/${params.userId}/get`)
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
