const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paintingSchema = new Schema(
  {
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
    sold: {
      type: Boolean,
      default: false,
    },
    datesold: {
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
