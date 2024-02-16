const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { generateResponse } = require("./controllers/index.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(bodyParser.json());

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
