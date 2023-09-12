import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

import { OrderItemModel, OrderModel, CartItemModel, CartModel, ProductModel } from '@/models';
import { connect } from '@/utils/db';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { items, price, status } = await req.json();

        const { userId } = getAuth(req);

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' });
        }

        const orderPromises = await items.map(async (el: { itemId: string; quantity: number }) => {
            return await OrderItemModel.create({ quantity: el.quantity, product: el.itemId });
        });

        const orderItems = await Promise.all(orderPromises);

        await OrderModel.create({ userId, items: orderItems, price, status });

        const cart = await CartModel.findOne({ userId: userId });

        cart.items.forEach(async (el: string) => {
            await CartItemModel.deleteOne({ _id: el });
        });

        cart.items = [];

        await cart.save();

        const orders = await OrderModel.find({ userId }).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        return NextResponse.json({ cart, orders });
    } catch (error) {
        return NextResponse.json({ msg: 'error' });
    }
};

