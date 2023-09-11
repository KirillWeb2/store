import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { CartItemModel, CartModel } from '@/models';
import { CartItemType } from '@/types/cart';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { cartId, cartItemId } = await req.json();

        const cart = await CartModel.findOne({ _id: cartId }).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        cart.items = cart.items
            .filter((el: CartItemType) => String(el._id) !== cartItemId)
            .map((el: CartItemType) => el._id);

        await CartItemModel.deleteOne({ _id: cartItemId });

        await cart.save();

        await cart.populate({
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
