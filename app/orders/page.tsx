import { OrderLayout } from '@/components/layout/OrderLayout';
import { OrderList } from '@/components/order/order-list';

export default async function OrdersPage() {
    return (
        <OrderLayout isAdmin={false}>
            <OrderList />
        </OrderLayout>
    );
}
