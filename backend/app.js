const express = require("express");
const bodyParser = require("body-parser");
const placesRoute = require("./routes/places-routes");
const userRoute = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const port = 5000;
const app = express();
app.use(bodyParser.json());
app.use("/api/places", placesRoute);
app.use("/api/user", userRoute);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

app.listen(port);
