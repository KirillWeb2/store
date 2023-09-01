"use client"

import {useCallback, useEffect, useState} from "react";
import {useSession} from "@clerk/nextjs";

import {cartService} from "@/service/cart-service";
import {AddItemInCartBody, CartType, CreateCartBody, DeleteItemInCartBody, UpdateItemInCartBody} from "@/types/cart";


export const useCart = () => {
    const {isLoaded, session} = useSession()

    const [cart, setCart] = useState<CartType | null>(null)

    const getCart = useCallback(async (userId: string) => {
        const {cart} = await cartService.getCart({userId})

        if (cart) {
            setCart(cart)
        } else {
            await createCart({userId: userId, products: []})
        }
    }, [setCart])

    const createCart = useCallback(async (body: CreateCartBody) => {
        const {cart} = await cartService.createCart(body)
        setCart(cart)
    }, [setCart])

    const deleteItem = useCallback(async (body: DeleteItemInCartBody) => {
        const {cart} = await cartService.deleteItemInCart(body)
        setCart(cart)
    }, [setCart])

    const updateItem = useCallback(async (body: UpdateItemInCartBody) => {
        const {cart} = await cartService.updateItemInCart(body)
        setCart(cart)
    }, [setCart])

    const addItem = useCallback(async (body: AddItemInCartBody) => {
        const {cart} = await cartService.addItemInCart(body)
        setCart(cart)
    }, [setCart])

    useEffect(() => {
        if (isLoaded && session && cart === null) {
            getCart(session.user.id)
        }
    }, [isLoaded, session, cart])

    return {
        cart, createCart, addItem, setCart, deleteItem, updateItem
    }
}