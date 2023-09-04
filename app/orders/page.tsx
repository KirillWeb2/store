import { OrderList } from '@/components/order/order-list';

export default async function OrdersPage() {
    return (
        <div>
            <OrderList isAdmin={false} />
        </div>
    );
}
