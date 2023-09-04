import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { CartModel, CartItemModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { cartId, productId, quantity } = await req.json();

        const cartItem = await CartItemModel.create({
            quantity: quantity || 1,
            product: productId,
        });

        const cart = await CartModel.findOneAndUpdate(
            { _id: cartId },
            { $push: { items: cartItem._id } },
            { new: true },
        ).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        return NextResponse.json({ cart });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
