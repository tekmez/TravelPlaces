const HttpError = require("../models/http-error");
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Awesome building",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];
const getPlaceById = (req, res, next) => {
  const placeId = req.params.id;
  const place = DUMMY_PLACES.find((place) => place.id === placeId);
  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404)
    );
  }
  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.id;
  const place = DUMMY_PLACES.find((user) => user.creator === userId);
  if (!place) {
    return next(
      new HttpError("Could not find a user for the provided id.", 404)
    );
  }
  res.json({ place });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
