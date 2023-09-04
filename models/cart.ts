import mongoose from "mongoose";

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const CartSchema = new Schema(
    {
        userId: {type: String, required: true},
        items: [{type: mongoose.Schema.Types.ObjectId, ref: "Cartitem"}]
    },
    {timestamps: true}
);

export const CartModel = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
