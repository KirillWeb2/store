import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { OrderModel } from '@/models';

export const GET = async (req: NextRequest) => {
    try {
        await connect();

        const orderId = req.nextUrl.searchParams.get('orderId') || '';

        await OrderModel.deleteOne({ _id: orderId });

        const oders = await OrderModel.find().populate('products');

        return NextResponse.json({ oders });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
