
import {NextResponse} from "next/server";

import {connect} from "@/utils/db";
import {ProductModel} from "@/models/product";


export const GET = async (req) => {
    try {
        await connect()

        const products = await ProductModel.find()

        return NextResponse.json({products, max: products.length})
    } catch (e) {
        console.log(e)
        return NextResponse.json({msg: "error"})
    }
}
