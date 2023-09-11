import { LikeLayout } from '@/components/layout';
import { LikeList } from '@/components/like/like-list';

export default async function LikePage() {
    return (
        <LikeLayout>
            <LikeList />
        </LikeLayout>
    );
}
