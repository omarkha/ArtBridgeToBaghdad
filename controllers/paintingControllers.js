const Painting = require("../models/painting.model");

const getPaintings = async (req, res) => {
  try {
    const paint = await Painting.find();
    res.json(paint);
  } catch (err) {
    res.send("err " + err);
  }
};

const getPainting = async (req, res) => {
  const { productId } = req.params;
  try {
    const paint = await Painting.findById(productId);

    if (!paint) {
      throw Error(`Painting Not Found For ID: ${productId}`);
    }
    res.json({ paint });
  } catch (err) {
    res.send("err " + err);
  }
};

const postPainting = async (req, res) => {
  const paint = await new Painting(req.body);

  try {
    paint.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postPainting,
  getPaintings,
  getPainting,
};
