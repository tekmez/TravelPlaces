const express = require("express");
const bodyParse = require("body-parser");
const placesRoute = require("./routes/places-routes");
const userRoute = require("./routes/users-routes");

const app = express();

app.use("/api/places", placesRoute);
app.use("/api/user", userRoute);

app.listen(5000);
