import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {CartModel} from "@/models/cart";
import {CartItemModel} from "@/models/cart-item";
import {LikeModel} from "@/models/like";


export const POST = async (req) => {
    try {
        await connect()

        const {likeId, productId} = await req.json()

        const like = await LikeModel.findOne({_id: likeId}).populate("products")

        like.products = like.products.filter((el) => String(el._id) !== productId)

        await like.save()

        return NextResponse.json({like})
    } catch (e) {
        console.log(e)
        return NextResponse.json({msg: "error"})
    }
}