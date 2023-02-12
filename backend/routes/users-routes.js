const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.patch("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUser);
module.exports = router;
