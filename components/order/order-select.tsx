import { OrderEnum, OrderType } from '@/types/order';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

type OrderSelectType = {
    updateStatusEvent: (status: OrderEnum) => void;
    order: OrderType;
    isLoading: boolean;
    handleSaveOrderInfo: () => void;
};
export const OrderSelect = ({ updateStatusEvent, order, handleSaveOrderInfo, isLoading }: OrderSelectType) => {
    return (
        <div className="flex items-center gap-1">
            <Select onValueChange={updateStatusEvent}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={order.status} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={OrderEnum.CREATE}>{OrderEnum.CREATE}</SelectItem>
                        <SelectItem value={OrderEnum.DELIVERED}>{OrderEnum.DELIVERED}</SelectItem>
                        <SelectItem value={OrderEnum.FORMED_SENDING}>{OrderEnum.FORMED_SENDING}</SelectItem>
                        <SelectItem value={OrderEnum.SHIPPED}>{OrderEnum.SHIPPED}</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button disabled={status === order.status || isLoading} onClick={handleSaveOrderInfo} variant={'outline'}>
                Save
            </Button>
        </div>
    );
};
