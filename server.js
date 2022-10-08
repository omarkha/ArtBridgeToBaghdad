const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const path = require("path");
const paintingRoute = require("./routes/paintings");
const bodyParser = require("body-parser");
const Stripe = require("stripe")(process.env.SECRET_KEY);

app.use(bodyParser.json());
require("dotenv").config(); // Add this line
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/client/build`));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api running");
});

const mongoose = require("mongoose");
require("dotenv").config(); // Add this line

let dbUrl =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://Copyres:Soridl846@cluster0.ohmco.mongodb.net/gallerydb?retryWrites=true&w=majority"
    : "mongodb://127.0.0.1:27017/gallerydb";

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
mongoose.set("debug", true);
mongoose.connection;

//Stripe

app.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  console.log(token);
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: usd,
    });
    status = "success";
  } catch (err) {
    console.log(err);
    status = "fail";
  }

  res.json({ error, status });
});

// Routes
app.use("/api/paintings", require("./routes/paintings"));
app.use("/api/subscribers", require("./routes/subscribers"));
//
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
