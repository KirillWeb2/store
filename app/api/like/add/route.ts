import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { LikeModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { likeId, productId } = await req.json();

        const like = await LikeModel.findOneAndUpdate(
            { _id: likeId },
            { $push: { products: productId } },
            { new: true },
        ).populate('products');

        return NextResponse.json({ like });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};

