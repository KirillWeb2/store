import { NextResponse, NextRequest } from 'next/server';

import { connect } from '@/utils/db';
import { ProductModel } from '@/models';

export const POST = async () => {
    try {
        await connect();

        const products = await ProductModel.find();

        return NextResponse.json({ products, max: products.length });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};

