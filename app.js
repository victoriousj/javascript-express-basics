const express = require("express");

const app = express();
app.set("view engine", "pug");

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "orange",
  "gray",
  "white",
  "black"
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/card", (req, res) => {
  res.render("card", {
    prompt: "Who is bured in Grand's Tomb?",
    hint: "think who's tomb it is",
    colors: colors
  });
});

app.get("/hello", (req, res) => {
  res.render("hello");
});

app.listen(3000, () => {
  console.log("The apllication is running on port 3000");
});
