const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const flightRoutes = require("./routes/flightRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(flightRoutes);

app.listen(3000, () => {
  console.log("Server running at PORT:3000");
});
