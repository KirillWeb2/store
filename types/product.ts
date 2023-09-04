export type ProductType = {
    _id: string;
    name: string;
    price: number;
    text: string;
    reviews: any[];
    small_image: SmallImageType;
    maker: string;
    gallery: string[];
};

export type SmallImageType = {
    front: string;
    back: string;
};

export type ProductItemRequest = {
    id: number;
    quantity: number;
};

export type GetOneProductBody = {
    productId: string;
};

export type GetOneProductResponse = {
    product: ProductType;
};

export type GetAllProductResponse = {
  products: ProductType[];
  max: number;
};
