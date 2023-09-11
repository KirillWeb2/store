import { productService } from '@/service/product-service';
import { ProductItem } from './product-item';

export const ProductList = async () => {
    const { products } = await productService.getAll();

    return (
        <div className="flex justify-start flex-wrap gap-3">
            {products.map((item) => (
                <ProductItem key={item._id} item={item} />
            ))}
        </div>
    );
};
