const mongoose = require("mongoose");
const PaintingSchema = require("./painting.model");

const Painting = mongoose.model("Book", PaintingSchema);

module.exports = {
  Painting,
};
