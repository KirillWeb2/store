import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {CartModel} from "@/models/cart";


export const POST = async (req) => {
    try {
        await connect()

        const {userId, products} = await req.json()

        const cart = await CartModel.create({userId, products})

        return NextResponse.json({cart})
    } catch (e) {
        console.log(e)
        return NextResponse.json({msg: "error"})
    }
}
