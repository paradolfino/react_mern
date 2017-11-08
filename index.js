const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.get("/lol", (req, res) => {
  res.send({ hi: "lol" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started.");
});
