import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { ProductModel } from '@/models';

export const GET = async (req: NextRequest) => {
    try {
        await connect();

        const productId = req.nextUrl.searchParams.get('productId');

        const product = await ProductModel.findById(productId);

        return NextResponse.json({ product });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};

export const dynamic = 'force-static';
