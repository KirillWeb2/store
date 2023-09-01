'use client';

import { useContext } from 'react';
import { RootContext } from '@/context/root';
import { LikeItem } from '@/components/like-item';

type LikeListProps = {};
export const LikeList = ({}: LikeListProps) => {
  const { like } = useContext(RootContext);

  if (!like || like?.products.length === 0) {
    return (
      <div>
        <p>Любимых нет</p>
      </div>
    );
  }

  return (
    <div className="flex justify-start flex-wrap gap-3">
      {like?.products.map((el) => <LikeItem key={el._id} item={el} />)}
    </div>
  );
};
