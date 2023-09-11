import { ProductType } from '@/types/product';
import { formatPrice } from '@/utils/format-price';
import { ProductManagement } from '../product-management';

type ProductSpecificationsProps = {
    product: ProductType;
};

export const ProductSpecifications = ({ product }: ProductSpecificationsProps) => {
    return (
        <div className="w-[59%]">
            <h4 className="text-xl font-thin">{product.name}</h4>
            <div className="text-lg font-thin mt-4">
                Price: <span className="font-bold">{formatPrice(product.price)}</span>
            </div>
            <div className="text-xl font-thin">
                Maker: <span className="font-bold">{product.maker}</span>
            </div>
            <ProductManagement product={product} />
        </div>
    );
};
