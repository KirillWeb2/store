import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {CartModel} from "@/models/cart";


export const GET = async (req) => {
    try {
        await connect()

        const userId = req.nextUrl.searchParams.get("userId") || "";

        let cart = await CartModel.findOne({userId: userId})

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