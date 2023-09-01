const mongoose = require("mongoose");

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const CartItemSchema = new Schema(
    {
        quantity: {type: Number, default: 1},
        product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"}
    },
    {timestamps: true}
);

export const CartItemModel = mongoose.models.CartItem || mongoose.model("CartItem", CartItemSchema);
