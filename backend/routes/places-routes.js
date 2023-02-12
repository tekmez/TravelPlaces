const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const placeControllers = require("../controller/places");

router.get("/:id", placeControllers.getPlaceById);
router.get("/user/:id", placeControllers.getPlacesByUserId);
router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placeControllers.createPlace
);
router.patch(
  "/:id",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placeControllers.updatePlaceById
);
router.delete("/:id", placeControllers.deletePlace);

module.exports = router;
