const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const OrderItemSchema = new Schema(
    {
        quantity: { type: Number, default: 1 },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    },
    { timestamps: true },
);

export const OrderItemModel = mongoose.models.Orderitem || mongoose.model('Orderitem', OrderItemSchema);
