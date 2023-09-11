import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

import { connect } from '@/utils/db';
import { LikeModel } from '@/models';

export const POST = async (req: NextRequest) => {
    try {
        await connect();

        const { products } = await req.json();

        const { userId } = getAuth(req);

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' });
        }

        const like = await LikeModel.create({ userId, products });

        return NextResponse.json({ like });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ msg: 'error' });
    }
};

export const dynamic = 'force-static';
