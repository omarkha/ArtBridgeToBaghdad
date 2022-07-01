const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paintingSchema = new Schema(
  {
    likes: {
      type: Number,
    },
    shares: {
      type: Number,
    },
    title: {
      type: String,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
    is_sold: {
      type: Boolean,
      default: false,
    },
    is_shipped: {
      type: Boolean,
      default: false,
    },
    datesold: {
      type: String,
    },
    shipping_code: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Painting = mongoose.model("Painting", paintingSchema);

module.exports = Painting;
