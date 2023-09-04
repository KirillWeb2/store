import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { LikeModel } from '@/models';
import { ProductType } from '@/types/product';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { likeId, productId } = await req.json();

        const like = await LikeModel.findOne({ _id: likeId }).populate('products');

        like.products = like.products.filter((el: ProductType) => String(el._id) !== productId);

        await like.save();

        return NextResponse.json({ like });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
