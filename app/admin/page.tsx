import { OrderLayout } from '@/components/layout/OrderLayout';
import { OrderList } from '@/components/order/order-list';

export default async function AdminPage() {
    return (
        <OrderLayout isAdmin={true}>
            <OrderList />
        </OrderLayout>
    );
}
