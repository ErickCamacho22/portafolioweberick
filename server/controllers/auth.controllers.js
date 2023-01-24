import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { KEY } from "../config.js";
import Role from "../models/Role.js";

export const singUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  //const userFound = User.find({email})

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "admin" });
    newUser.roles = [role._id];
  }

  const saveUser = await newUser.save();
  console.log(saveUser);

  const token = jwt.sign({ id: saveUser._id }, KEY, {
    expiresIn: 86400, //day
  });

  res.status(200).json({ token });
};

export const singIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );

  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid password" });

  const token = jwt.sign({ id: userFound._id }, KEY, {
    expiresIn: 86400, //day
  });

  res.status(200).json({ token });
};
