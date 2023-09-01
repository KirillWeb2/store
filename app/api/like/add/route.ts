import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {LikeModel} from "@/models/like";


export const POST = async (req) => {
    try {
        await connect()

        const {likeId, productId} = await req.json()

        const like = await LikeModel.findOneAndUpdate({_id: likeId}, {$push: {products: productId}}, {new: true})
            .populate("products").exec()

        return NextResponse.json({like})
    } catch (e) {
        console.log(e)
        return NextResponse.json({msg: "error"})
    }
}
