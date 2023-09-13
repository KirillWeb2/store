import { AxiosResponse } from 'axios';

import { request } from '@/lib/axios';
import { GetAllProductResponse, GetOneProductBody, GetOneProductResponse } from '@/types/product';

export const productService = {
    getAll: async () => {
        return request.post<void, AxiosResponse<GetAllProductResponse>>('/data/get-all').then((res) => res.data);
    },
    getOne: async (params: GetOneProductBody) => {
        return request
            .post<void, AxiosResponse<GetOneProductResponse>>('/data/get-one', { productId: params.productId })
            .then((res) => res.data);
    },
};
