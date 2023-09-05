import { CartList } from '@/components/cart';
import { CartLayout, LikeLayout } from '@/components/layout';

export default async function CartPage() {
    return (
        <CartLayout>
            <LikeLayout>
                <CartList />
            </LikeLayout>
        </CartLayout>
    );
}
