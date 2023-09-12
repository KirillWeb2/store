import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { OrderModel } from '@/models';

export const GET = async (req: NextRequest) => {
    try {
        await connect();

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

export const dynamic = 'force-static';