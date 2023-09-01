const mongoose = require("mongoose");

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const ProductSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        text: {type: String, required: true},
        reviews: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], default: [] },
        small_image: {
            type: {
                front: String,
                back: String,
            },
            required: true
        },
        maker: {type: String, required: true},
        gallery: [{type: String, required: true}]
    },
    {timestamps: true}
);

export const ProductModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);
