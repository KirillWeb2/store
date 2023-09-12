import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { ProductModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { productId } = await req.json();

        const product = await ProductModel.findById(productId);

        return NextResponse.json({ product });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
