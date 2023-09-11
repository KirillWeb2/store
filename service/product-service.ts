import { AxiosResponse } from 'axios';

import { request } from '@/lib/axios';
import { GetAllProductResponse, GetOneProductBody, GetOneProductResponse } from '@/types/product';

export const productService = {
    getAll: async () => {
        return request.get<void, AxiosResponse<GetAllProductResponse>>('/data/get-all').then((res) => res.data);
    },
    getOne: async (params: GetOneProductBody) => {
        return request
            .get<void, AxiosResponse<GetOneProductResponse>>('/data/get-one', {
                params: { productId: params.productId },
            })
            .then((res) => res.data);
    },
};
