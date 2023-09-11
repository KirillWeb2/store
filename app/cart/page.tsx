import { CartList } from '@/components/cart';
import { CartLayout, OrderLayout } from '@/components/layout';

export default async function CartPage() {
    return (
        <CartLayout>
            <OrderLayout isAdmin={false}>
                <CartList />
            </OrderLayout>
        </CartLayout>
    );
}
