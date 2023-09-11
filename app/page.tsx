import { CartLayout } from '@/components/layout/CartLayout';
import { LikeLayout } from '@/components/layout/LikeLayout';
import { ProductList } from '@/components/product-main/product-list';

export default async function Home() {
    return (
        <CartLayout>
            <LikeLayout>
                <ProductList />
            </LikeLayout>
        </CartLayout>
    );
}
