// I set the default module type in package.json which means I import express instead of require it
import express from "express";

// I think this means "make a new instance of the express object, called app"?
const app = express();

// view engine ejs needed for reactive views (see heart)
app.set("view engine", "ejs");

// If the default function in calculator.js is unnamed, I can call it whatever here
import calculate from "./calculator.js";

// default GET request
app.get("/", function (req, res) {
  res.send("Hello friend.");
});

// sloppy calculator formula
app.get("/calculator/:num1/:operator/:num2", function (req, res) {
  res.send(
    // for some reason I can't return the calculate directly but adding an empty string here works?
    "" + calculate(req.params.num1, req.params.operator, req.params.num2),
  );
});

// route that renders a prebuilt view
app.get("/heart", function (req, res) {
  res.render("heart");
});

// starts the app on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// calling the calculate function directly in the console vs. rendering it as a route
console.log(calculate(1, "minus", 2));
console.log(calculate(1, "-", 2));
