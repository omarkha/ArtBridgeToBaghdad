const Stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const axios = require("axios");
const { validateCartItems } = require("use-shopping-cart/utilities");
const Painting = require("../models/painting.model");

const getPaintings = async (req, res) => {
  try {
    const paint = await Painting.find();
    res.json(paint);
  } catch (err) {
    res.send("err " + err);
  }
};

const createCheckoutSession = async (req, res) => {
  try {
    const origin =
      process.env.NODE_ENV === "production"
        ? req.headers.origin
        : "http://localhost:5000";

    const products = await Painting.find();

    const cartItems = req.body;
    const line_items = validateCartItems(products, cartItems);

    const params = {
      submit_type: "pay",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "UK"],
      },
      line_items,
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: origin,
      mode: "payment",
    };

    const checkoutSession = await Stripe.checkout.sessions.create(params);

    res.status(200).json(checkoutSession);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
    console.log(err);
  }
};

module.exports = {
  createCheckoutSession,
};
