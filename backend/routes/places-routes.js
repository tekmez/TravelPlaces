const express = require("express");
const router = express.Router();
const placeControllers = require("../controller/places");

router.get("/:id", placeControllers.getPlaceById);
router.get("/user/:id", placeControllers.getPlacesByUserId);
router.post("/", placeControllers.createPlace);
router.patch("/:id", placeControllers.updatePlaceById);
router.delete("/:id", placeControllers.deletePlace);

module.exports = router;
