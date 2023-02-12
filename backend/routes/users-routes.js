const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const userController = require("../controller/users");

router.get("/", userController.getUsers);
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  userController.signup
);
router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  userController.login
);
module.exports = router;
