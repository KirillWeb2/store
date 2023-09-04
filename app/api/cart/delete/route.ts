import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { CartItemModel, CartModel } from '@/models';
import { CartItemType } from '@/types/cart';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { cartId, productId } = await req.json();

        const cart = await CartModel.findOne({ _id: cartId }).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        let filterItems: CartItemType[] = [];

        cart.items.forEach(async (el: CartItemType) => {
            if (String(el.product._id) === productId) {
                await CartItemModel.deleteOne({ _id: el._id });
            } else {
                filterItems.push(el);
            }
        });

        cart.items = filterItems;

        await cart.save();

        return NextResponse.json({ cart });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
