const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");

let DUMMY_PLACES = [
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
const createUser = (req, res) => {
  const { title, places } = req.body;
  const createdUser = {
    id: uuidv4(),
    title,
    places,
  };
  DUMMY_PLACES.push(createdUser);
  res.status(201).json({ user: createdUser });
};
const updateUserById = (req, res, next) => {
  const { title } = req.body;
  const userId = req.params.id;
  const user = { ...DUMMY_PLACES.find((u) => u.id === userId) };
  const userIndex = DUMMY_PLACES.findIndex((u) => u.id === userId);
  user.title = title;
  DUMMY_PLACES[userIndex] = user;
  res.status(200).json({ user });
};
const deleteUser = (req, res, next) => {
  const userId = req.params.id;
  DUMMY_PLACES = DUMMY_PLACES.filter((u) => u.id !== userId);
  res.status(200).json({ message: "deleted user" });
};
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUserById = updateUserById;
exports.deleteUser = deleteUser;
