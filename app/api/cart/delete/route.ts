import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {CartModel} from "@/models/cart";
import {CartItemModel} from "@/models/cart-item";


export const POST = async (req) => {
    try {
        await connect()

        const {cartId, productId} = await req.json()

        const cart = await CartModel.findOne({_id: cartId})

        await cart.populate({path: "products", name: "products"})

        if (cart?.products.length) {
            await cart.populate({path: "products.product", name: "product"})
        }

        let filterProducts = []

        cart.products.forEach(async (el) => {
            if (String(el.product._id) === productId) {
                await CartItemModel.deleteOne({_id: el._id})
            } else {
                filterProducts.push(el)
            }
        })

        cart.products = filterProducts

        await cart.save()

        return NextResponse.json({cart})
    } catch (e) {
        console.log(e)
        return NextResponse.json({msg: "error"})
    }
}