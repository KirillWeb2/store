import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/utils/db';
import { LikeModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { userId, products } = await req.json();

        const like = await LikeModel.create({ userId, products });

        return NextResponse.json({ like });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};
