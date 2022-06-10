const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    item_type: {
        type: String,
    },
    img_url: {
        type: String,
        required: true,
    },
    sold: {
        type: Boolean,
        required: true,
    },
    datesold: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    customer_id: {
        type: String,
        required: true,
    }
    }, {
        timestamps: true,
    });

    const Receipt = mongoose.model('Receipt', receiptSchema);

    module.exports = Receipt;