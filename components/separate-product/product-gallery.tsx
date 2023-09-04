'use client';

import { useState, useRef } from 'react';

type ProductGalleryProps = {
    gallery: string[];
};

const ProductGallery = ({ gallery }: ProductGalleryProps) => {
    const [acitveImage, setActiveImage] = useState<string>(gallery[0]);

    const divRef = useRef<HTMLDivElement>(null);

    const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        const delta = event.deltaY;
        const div = divRef.current;

        if (div) {
            div.scrollTop += delta;
        }
    };

    const renderGallery = () => {
        return gallery.map((image, ind) => (
            <div
                className={`gallery__item ${acitveImage === image ? 'active' : ''}`}
                ref={divRef}
                onWheel={handleScroll}
                key={image}
                onClick={() => setActiveImage(image)}
            >
                <img className="w-[70px]" src={`/product.png`} alt="" />
            </div>
        ));
    };

    return (
        <div className={'flex items-center w-[40%]'}>
            <div className="gallery">{renderGallery()}</div>
            <div>
                <img className="w-[350px] pl-4" src={`/product.png`} alt="" />
            </div>
        </div>
    );
};

export default ProductGallery;
