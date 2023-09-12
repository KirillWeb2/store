import { getAuth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { CartModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { userId } = getAuth(req);

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' });
        }

        const cart = await CartModel.findOne({ userId: userId }).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        return NextResponse.json({ cart });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
