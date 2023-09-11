import { OrderFilterEnum } from '@/types/order';
import { Button } from '../ui/button';

type OrderFilteringProps = {
    updateStatusFilter: (status: OrderFilterEnum) => void;
    statusFilter: OrderFilterEnum;
};
export const OrderFiltering = ({ updateStatusFilter, statusFilter }: OrderFilteringProps) => {
    const handleSetCreateStatus = (status: OrderFilterEnum) => {
        updateStatusFilter(status);
    };

    const renderFilters = () => {
        return Object.keys(OrderFilterEnum).map((key) => {
            return (
                <Button
                    variant={statusFilter === key ? 'secondary' : 'ghost'}
                    onClick={() => handleSetCreateStatus(key as OrderFilterEnum)}
                >
                    {key}
                </Button>
            );
        });
    };

    return <div className="flex justify-end w-[100%] items-center gap-1 my-4">{renderFilters()}</div>;
};
