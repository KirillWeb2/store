const mongoose = require("mongoose");

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const ReviewSchema = new Schema(
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        text: {type: String, required: true},
        stars: {type: Number, required: true},
        images: [String]
    },
    {timestamps: true}
);

export const ReviewModel = mongoose.models.Review || mongoose.model("Review", ReviewSchema);