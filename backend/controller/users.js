const HttpError = require("../models/http-error");

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

const getUserById = (req, res, next) => {
  const userId = req.params.id;
  const user = DUMMY_PLACES.find((user) => user.id === userId);
  if (!user) {
    return next(new HttpError("Could not find a user", 404));
  }
  res.json({ user });
};
exports.getUserById = getUserById;
