import { Reviews } from './reviews-list';
import { ProductType } from '@/types/product';

import { ProductSpecifications, ProductGallery } from '.';

type SeparateProductProps = {
    product: ProductType;
};

export const SeparateProduct = ({ product }: SeparateProductProps) => {
    return (
        <div>
            <div className="flex gap-10 justify-between">
                <ProductGallery gallery={product.gallery} />
                <ProductSpecifications product={product} />
            </div>
            <div className="text-base font-thin my-10">{product.text}</div>
            <Reviews reviews={product.reviews} />
        </div>
    );
};
