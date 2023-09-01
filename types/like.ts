import {ProductType} from "@/types/product";

export type LikeType = {
    _id: string;
    userId: string;
    products: ProductType[];
}

export type GetLikeBody = {
    userId: string;
}

export type GetLikeResponse = {
    like: LikeType;
}

export type CreateLikeBody = {
    userId: string;
    products: string[];
}

export type CreateLikeResponse = {
    like: LikeType;
}

export type AddItemInLikeBody = {
    productId: string;
    likeId: string;
}
export type AddItemInLikeResponse = {
    like: LikeType;
}

export type DeleteItemInLikeBody = {
    productId: string;
    likeId: string;
}
export type DeleteItemInLikeResponse = {
    like: LikeType;
}