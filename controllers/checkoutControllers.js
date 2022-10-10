const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const axios = require("axios");
const { validateCartItems } = require("use-shopping-cart/utilities");
const Painting = require("../models/painting.model");

const uri =
  process.env.NODE_ENV === "production"
    ? "https://artbridgetobaghdad.herokuapp.com"
    : "http://localhost:5000";

const getCheckoutSession = async (req, res) => {
  const sessionId = req.params;
  try {
    if (!sessionId.startsWith("cs_")) {
      throw Error("Incorrect checkout Session Id");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(
      sessionId,
      {
        expand: ["payment_intent"],
      }
    );
    res.status(200).json(checkout_session);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};

const createCheckoutSession = async (req, res) => {
  try {
    let line_items;
    const cartItems = req.body;
    const origin =
      process.env.NODE_ENV === "production"
        ? req.headers.origin
        : "http://localhost:5000";
    await axios.get(`${uri}/api/paintings`).then((res) => {
      line_items = validateCartItems(res.data, cartItems);
    });

    console.log(line_items);
    const params = {
      submit_type: "pay",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      currency: "USD",
      line_items,
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: origin,
      mode: "payment",
    };

    const checkoutSession = await stripe.checkout.sessions.create(params);

    res.status(200).json(checkoutSession);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
    console.log(err);
  }
};

module.exports = {
  createCheckoutSession,
};
