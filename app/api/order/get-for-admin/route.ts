import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { OrderModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { statusFilter } = await req.json();

        const filterQuery = () => {
            if (statusFilter === 'ALL') {
                return {};
            }

            return { status: statusFilter };
        };

        const orders = await OrderModel.find(filterQuery()).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        return NextResponse.json({ orders });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
