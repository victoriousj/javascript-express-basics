const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Way to go, young'n");
});

app.listen(3000);
