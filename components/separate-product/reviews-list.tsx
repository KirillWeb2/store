type ReviewsProps = {
    reviews: any[];
};

export const Reviews = ({ reviews }: ReviewsProps) => {
    if (!reviews) {
        return <p className="text-lg font-thin">Отзывов для данного продукта нет</p>;
    }

    if (reviews && reviews.length === 0) {
        return <p className="text-lg font-thin">Отзывов для данного продукта нет</p>;
    }

    return (
        <div className={'my-[30px]'}>
            <p className="text-lg font-thin">Отзывы</p>
        </div>
    );
};
