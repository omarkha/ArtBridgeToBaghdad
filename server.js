const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const path = require("path");
const paintingRoute = require("./routes/paintings");
require("dotenv").config(); // Add this line
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/client/build`));
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api running");
});

const mongoose = require("mongoose");
require("dotenv").config(); // Add this line

let dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : process.env.ATLAS_URI;

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

// Routes
app.use("/api/paintings", require("./routes/paintings"));
//

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
