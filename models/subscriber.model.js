const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscriberSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true },
    hasPurchased: { type: Boolean, default: false },
    phone: { type: String },
  },
  {
    timestamps: true,
  }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

module.exports = Subscriber;
