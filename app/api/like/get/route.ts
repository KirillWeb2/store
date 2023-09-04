import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { LikeModel } from '@/models';

export const GET = async (req: NextRequest) => {
    try {
        await connect();

        const userId = req.nextUrl.searchParams.get('userId') || '';

        const like = await LikeModel.findOne({ userId: userId }).populate('products');

        return NextResponse.json({ like });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
