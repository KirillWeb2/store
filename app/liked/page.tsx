import { CartLayout, LikeLayout } from '@/components/layout';
import { LikeList } from '@/components/like';

export default async function LikePage() {
    return (
        <CartLayout>
            <LikeLayout>
                <LikeList />
            </LikeLayout>
        </CartLayout>
    );
}
