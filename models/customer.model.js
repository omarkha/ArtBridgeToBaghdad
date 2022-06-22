const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
    },
    address: {
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      unit: {
        type: Number,
        required: true,
      },
    },
    contact_info: {
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
    },
    number_of_purchases: {
      type: Number,
      required: true,
    },
    net_payments: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
