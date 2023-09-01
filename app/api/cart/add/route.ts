import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {CartModel} from "@/models/cart";
import {CartItemModel} from "@/models/cart-item";


export const POST = async (req) => {
    try {
        await connect()

        const {cartId, productId, quantity} = await req.json()

        const cartItem = await CartItemModel.create({
            quantity: quantity || 1,
            product: productId,
        })

        const cart = await CartModel.findOneAndUpdate({_id: cartId}, {$push: {products: cartItem._id}}, {new: true})

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
