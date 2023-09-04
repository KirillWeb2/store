'use client';

import { RootContext } from '@/context/root';
import { useCart } from '@/hook/useCart';
import { useLike } from '@/hook/useLike';

type DataLayoutProps = {
    children: React.ReactNode;
};

export const DataLayout = ({ children }: DataLayoutProps) => {
    const { cart, createCart, addItem, deleteItem, updateItem, setCart } = useCart();
    const { like, deleteItem: deleteItemInLike, addItem: addItemInLike, createLike } = useLike();

    return (
        <RootContext.Provider
            value={{
                cart,
                createCart,
                addItemInCart: addItem,
                deleteItemInCart: deleteItem,
                updateItemInCart: updateItem,
                setCart,
                like,
                addItemInLike,
                deleteItemInLike,
                createLike,
            }}
        >
            {children}
        </RootContext.Provider>
    );
};
