const mongoose = require("mongoose");

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const LikeSchema = new Schema(
    {
        userId: {type: String, required: true},
        products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}]
    },
    {timestamps: true}
);

export const LikeModel = mongoose.models.Like || mongoose.model("Like", LikeSchema);
