import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { OrderModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { orderId, status } = await req.json();

        await OrderModel.updateOne({ _id: orderId }, { status: status });

        const orders = await OrderModel.find().populate({
            path: 'items',
            populate: { path: 'product' },
        });

        return NextResponse.json({ orders });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};

