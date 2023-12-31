import { CartLayout, LikeLayout } from '@/components/layout';
import { SeparateProduct } from '@/components/separate-product/separate-product';
import { productService } from '@/service/product-service';

export default async function PageProduct({ params: { id } }: { params: { id: string } }) {
    const { product } = await productService.getOne({ productId: id });

    return (
        <CartLayout>
            <LikeLayout>
                <SeparateProduct product={product} />
            </LikeLayout>
        </CartLayout>
    );
}
