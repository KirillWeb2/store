'use client';

import { CartContext } from '@/context';

import { useCart } from '@/hook/useCart';

type CartLayoutProps = {
    children: React.ReactNode;
};

export const CartLayout = ({ children }: CartLayoutProps) => {
    const { addItem, createCart, deleteItem, setCart, updateItem, isLoadingCart, cart } = useCart();

    return (
        <CartContext.Provider
            value={{
                addItemInCart: addItem,
                cart,
                createCart,
                deleteItemInCart: deleteItem,
                setCart,
                updateItemInCart: updateItem,
                isLoadingCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
