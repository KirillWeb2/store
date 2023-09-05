'use client';

import { CartContext } from '@/context';

import { useCart } from '@/hook/useCart';

type CartLayoutProps = {
    children: React.ReactNode;
};

export const CartLayout = ({ children }: CartLayoutProps) => {
    const { addItem, cart, createCart, deleteItem, setCart, updateItem } = useCart();

    return (
        <CartContext.Provider
            value={{
                addItemInCart: addItem,
                cart,
                createCart,
                deleteItemInCart: deleteItem,
                setCart,
                updateItemInCart: updateItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
