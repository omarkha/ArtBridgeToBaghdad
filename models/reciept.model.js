const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const receiptSchema = new Schema(
  {
    item_type: {
      type: String,
    },
    item_title: {
      type: Stirng,
    },
    img_url: {
      type: String,
      required: true,
    },
    is_sold: {
      type: Boolean,
      required: true,
    },
    datesold: {
      type: mongoose.SchemaTypes.Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    customer_address: {
      customer_unit: {
        type: Number,
        required: true,
      },
      customer_street: {
        type: String,
        required: true,
      },
      customer_city: {
        type: String,
        required: true,
      },
      customer_state: {
        type: String,
        required: true,
      },
      customer_country: {
        type: String,
        required: true,
      },
    },
    shipping_number: {
      type: String,
    },
    customer_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Receipt = mongoose.model("Receipt", receiptSchema);

module.exports = Receipt;
