const mongoose = require("mongoose");
const PaintingSchema = require("./painting.model");
const SubscriberSchema = require("./subscriber.model");

const Painting = mongoose.model("Painting", PaintingSchema);

const Subscriber = mongoose.model("Subscriber", SubscriberSchema);

module.exports = {
  Painting,
  Subscriber,
};
