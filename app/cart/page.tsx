import { CartList } from '@/components/cart';
import { CartLayout, OrderLayout } from '@/components/layout';
import { cartService } from '@/service/cart-service';

export default async function CartPage() {
    const { cart } = await cartService.getCart();
    
    return (
        <CartLayout cart={cart}>
            <OrderLayout isAdmin={false}>
                <CartList />
            </OrderLayout>
        </CartLayout>
    );
}
