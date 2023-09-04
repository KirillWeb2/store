import { OrderList } from '@/components/order/order-list';

export default async function AdminPage() {
    return (
        <div>
            <OrderList isAdmin={true} />
        </div>
    );
}
