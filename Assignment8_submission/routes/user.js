import User from "../models/user.js";
import express from "express";
import bcrypt from "bcryptjs";
//const { signup, updateUser, updateUser2, deleteUser, getUsers } = require("../controllers/user")
const router = express.Router();
//const {check} = require('express-validator')

const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
  
    return false;
  };
  
  const validatePassword = (password) => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
        password
      )
    ) {
      return true;
    }
  
    return false;
  };
  
  const presentEmail = async (email) => {
    const user = await User.findOne({ email: email });
  
    if (user) {
      return true;
    }
  
    return false;
  };
  
  export const registerUser = async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      // Validate Email
      if (!validateEmail(req.body.email)) {
        throw new Error("Please enter a valid Email !!");
      }
  
      // Validate Password
      if (!validatePassword(req.body.password)) {
        throw new Error(
          "Enter valid password of 10 characters!!"
        );
      }
  
      const newUser = new User({
        ...req.body,
        password: hash,
      });
  
      await newUser.save();
      res.status(200).send("User has been created !!");
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      // Validate Email
      if (!validateEmail(req.body.email)) {
        throw new Error("Please enter a valid Email !!");
      }
  
      // Email exists ??
      const emailFound = await presentEmail(req.body.email);
      if (!emailFound) {
        throw new Error("Email Not found !!");
      }
  
      // Validate Password
      if (!validatePassword(req.body.password)) {
        throw new Error(
          "Enter valid password of 10 characters!!"
        );
      }
  
      const updatedUser = await User.updateOne(
        { email: req.body.email },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json("Updated Record !!");
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  };
  

  
  export const deleteUser = async (req, res) => {
    try {
      // Validate Email
      if (!validateEmail(req.body.email)) {
        throw new Error("Please enter a valid Email !!");
      }
  
      // Email exists ??
      if (!presentEmail(req.body.email)) {
        throw new Error("Email Not found !!");
      }
  
      await User.deleteOne({ email: req.body.email });
      res.status(200).json("User has been deleted.");
    } catch (err) {
      console.log(err);
    }
  };
  
  export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
    }
  };

//CREATE
router.post("/signup", registerUser);

//UPDATE
router.put("/edit", updateUser);


//DELETE
router.delete("/delete", deleteUser);

//GET ALL
router.get("/getAll", getUsers);

//module.exports = router;

export default router;