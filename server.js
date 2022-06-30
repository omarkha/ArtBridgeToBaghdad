const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(`${__dirname}/client/build`));
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.get("/", (req, res) => {
  res.send("Api running");
});

require("dotenv").config(); // Add this line

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://Copyres:Soridl846@cluster0.ohmco.mongodb.net/test?retryWrites=true&w=majority"
    : "mongodb://127.0.0.1:27017/gallerydb";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("gallerydb").collection("devices");
  // perform actions on the collection object
  client.close();
});

// Routes
app.use("/api/paintings", require("./routes/paintings"));
//

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
