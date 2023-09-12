import { OrderModel } from '@/models';
import { connect } from '@/utils/db';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    try {
        await connect();

        const { userId } = getAuth(req);
        const statusFilter = req.nextUrl.searchParams.get('statusFilter');

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' });
        }

        const filterQuery = () => {
            if (statusFilter === 'ALL') {
                return { userId };
            }

            return { userId, status: statusFilter };
        };

        const orders = await OrderModel.find(filterQuery()).populate({
            path: 'items',
            populate: { path: 'product' },
        });

        return NextResponse.json({ orders });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ msg: 'error' });
    }
};

