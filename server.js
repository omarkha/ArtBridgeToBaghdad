const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(`${__dirname}/client/build`));
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

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
const db = mongoose.connection;

// Routes
const paintingsRouter = require("./routes/paintings");
app.use("/api/paintings", paintingsRouter);

const antiquesRouter = require("./routes/antiques");
app.use("/api/antiques", antiquesRouter);
//

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on Port: ${port}`);
});
