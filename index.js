const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const flightRoute = require("./routes/flightRoute");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(flightRoute);

app.use("/", (req, res, next) => {
  res.render("form");
});

app.listen(3000, () => {
  console.log("Server running at PORT:3000");
});
