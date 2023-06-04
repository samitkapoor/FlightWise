const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const flightRoute = require("./routes/flightRoute");

const getIataCode = require("./utils/getIataCode");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(flightRoute);

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.listen(3000, () => {
  console.log("Server running at PORT:3000");
});
