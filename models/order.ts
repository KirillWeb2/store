const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const OrderSchema = new Schema(
    {
        userId: { type: String, required: true },
        items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orderitem' }],
        price: { type: Number, required: true },
        status: { type: String, required: true },
    },
    { timestamps: true },
);

export const OrderModel = mongoose.models.Order || mongoose.model('Order', OrderSchema);
