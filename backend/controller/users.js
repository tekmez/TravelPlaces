const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

let DUMMY_USER = [
  {
    id: "u1",
    name: "Tuncay Ekmez",
    email: "test@test.com",
    password: "test",
  },
];

const getUsers = (req, res, next) => {
  res.status(200).json({ users: DUMMY_USER });
};

const signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("check your data", 422);
  }
  const { name, email, password } = req.body;
  const hasUser = DUMMY_USER.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("email already exits", 401);
  }
  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  DUMMY_USER.push(createdUser);
  res.status(201).json({ user: createdUser });
};
const login = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("check your data", 422);
  }
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USER.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError("Could not identify user", 401);
  }
  res.status(200).json({ message: "logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
