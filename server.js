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

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Copyres:Soridl846@cluster0.ohmco.mongodb.net/?retryWrites=true&w=majority";
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
//

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on Port: ${port}`);
});
