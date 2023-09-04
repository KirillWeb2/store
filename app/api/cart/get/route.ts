import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { CartModel } from '@/models';

export const GET = async (req: NextRequest) => {
    try {
        await connect();

        const userId = req.nextUrl.searchParams.get('userId') || '';

        const cart = await CartModel.findOne({ userId: userId }).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        // await cart.populate();

        return NextResponse.json({ cart });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
