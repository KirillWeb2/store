import { OrderModel } from '@/models';
import { connect } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    try {
        await connect();

        const userId = req.url.split('/').at(-2) || '';

        const orders = await OrderModel.find({ userId: userId }).populate({
            path: 'items',
            populate: { path: 'product' },
        })

        return NextResponse.json({ orders });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ msg: 'error' });
    }
};
