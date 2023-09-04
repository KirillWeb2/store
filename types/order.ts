import { CartItemType, CartType } from './cart';
import { ProductType } from './product';

export enum OrderEnum {
    'CREATE' = 'CREATE',
    'FORMED_SENDING' = 'FORMED_SENDING',
    'SHIPPED' = 'SHIPPED',
    'DELIVERED' = 'DELIVERED',
}

export type OrderType = {
    _id: string
    userId: string;
    items: OrderItemType[];
    price: number;
    status: OrderEnum;
};

export type OrderItemType = {
    quantity: number;
    product: ProductType;
};

export type GetAllOrdersResponse = {
    orders: OrderType[];
};

export type GetOrdersForUserBody = {
    userId: string;
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
    userId: string;
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
