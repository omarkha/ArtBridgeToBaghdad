const Subscriber = require("../models/subscriber.model");

const getSubscribers = async (req, res) => {
  try {
    const sub = await Subscriber.find();
    res.json(sub);
  } catch (err) {
    res.send("err " + err);
  }
};

const postSubsriber = async (req, res) => {
  const sub = await new Subscriber(req.body);

  try {
    sub.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postSubsriber,
  getSubscribers,
};
