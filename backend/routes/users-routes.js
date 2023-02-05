const express = require("express");
const router = express.Router();
const DUMMY_PLACES = [
  {
    id: "u1",
    title: "Tuncay Ekmez",
    places: [
      {
        id: "p1",
        title: "Empire State Building",
        address: "20 W 34th St, New York, NY 10001",
        description: "Awesome building",
        location: {
          lat: 40.7484474,
          lng: -73.9871516,
        },
      },
    ],
  },
];

router.get("/:id", (req, res, next) => {
  const userId = req.params.id;
  const user = DUMMY_PLACES.find((user) => user.id === userId);
  res.json({ user });
});

module.exports = router;
