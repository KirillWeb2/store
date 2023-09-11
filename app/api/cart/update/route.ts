import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { CartItemModel, CartModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { cartId, cartItemId, quantity } = await req.json();

        await CartItemModel.updateOne({ _id: cartItemId }, { $inc: { quantity: quantity } });

        let cart = await CartModel.findOne({ _id: cartId }).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        return NextResponse.json({ cart });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};

export const dynamic = 'force-static';
