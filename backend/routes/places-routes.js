const express = require("express");
const router = express.Router();
const placeControllers = require("../controller/places");

router.get("/:id", placeControllers.getPlaceById);

router.get("/user/:id", placeControllers.getPlaceByUserId);

module.exports = router;
