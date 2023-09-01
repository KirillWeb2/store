const mongoose = require("mongoose");

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const CartSchema = new Schema(
    {
        userId: {type: String, required: true},
        products: [{type: mongoose.Schema.Types.ObjectId, ref: "CartItem"}]
    },
    {timestamps: true}
);

export const CartModel = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
