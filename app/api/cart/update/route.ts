import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {CartModel} from "@/models/cart";
import {CartItemModel} from "@/models/cart-item";


export const POST = async (req) => {
    try {
        await connect()

        const {cartId, cartItemId, quantity} = await req.json()

        await CartItemModel.updateOne({_id: cartItemId}, {$inc: {quantity: quantity}});

        let cart = await CartModel.findOne({_id: cartId})

        await cart.populate({path: "products", name: "products"})

        if (cart?.products.length) {
            await cart.populate({path: "products.product", name: "product"})
        }

        return NextResponse.json({cart})
    } catch (e) {
        console.log(e)
        return NextResponse.json({msg: "error"})
    }
}