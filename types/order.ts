import { CartType } from './cart';
import { ProductType } from './product';

export enum OrderEnum {
    'CREATE' = 'CREATE',
    'FORMED_SENDING' = 'FORMED_SENDING',
    'SHIPPED' = 'SHIPPED',
    'DELIVERED' = 'DELIVERED',
}

export enum OrderFilterEnum {
    'CREATE' = 'CREATE',
    'FORMED_SENDING' = 'FORMED_SENDING',
    'SHIPPED' = 'SHIPPED',
    'DELIVERED' = 'DELIVERED',
    'ALL' = 'ALL',
}

export type OrderType = {
    _id: string;
    userId: string;
    items: OrderItemType[];
    price: number;
    status: OrderEnum;
};

export type OrderItemType = {
    quantity: number;
    product: ProductType;
};

export type GetAllOrdersParams = {
    statusFilter: OrderFilterEnum;
};

export type GetAllOrdersResponse = {
    orders: OrderType[];
};

export type GetOdersForUserResponse = {
    orders: OrderType[];
};

export type UpdateOrderBody = {
    orderId: string;
    status: OrderEnum;
};

export type UpdateOrderResponse = {
    orders: OrderType[];
};

export type CreateOrderBody = {
    items: {
        itemId: string;
        quantity: number;
    }[];
    status: OrderEnum;
    price: number;
};

export type CreateOrderResponse = {
    orders: OrderType[];
    cart: CartType;
};
