// const User = require("../models/user")
// //const {validationResult} = require('express-validator')
// const user = require("../models/user")

// export const registerUser =  await (req, res) => {
//     try {
//       const salt = bcrypt.genSaltSync(10);
//       const hash = bcrypt.hashSync(req.body.password, salt);
  
//       // Validate Email
//       if (!validateEmail(req.body.email)) {
//         throw new Error("Please enter a valid Email !!");
//       }
  
//       // Validate Password
//       if (!validatePassword(req.body.password)) {
//         throw new Error(
//           "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!!"
//         );
//       }
  
//       const newUser = new User({
//         ...req.body,
//         password: hash,
//       });
  
//       await newUser.save();
//       res.status(200).send("User has been created !!");
//     } catch (err) {
//       console.log(err);
//       res.status(400).send(err.message);
//     }
//   };
  
//   export const updateUser = async (req, res) => {
//     try {
//       // Validate Email
//       if (!validateEmail(req.body.email)) {
//         throw new Error("Please enter a valid Email !!");
//       }
  
//       // Email exists ??
//       const emailFound = await findEmail(req.body.email);
//       if (!emailFound) {
//         throw new Error("Email Not found !!");
//       }
  
//       // Validate Password
//       if (!validatePassword(req.body.password)) {
//         throw new Error(
//           "New Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!!"
//         );
//       }
  
//       const updatedUser = await User.updateOne(
//         { email: req.body.email },
//         { $set: req.body },
//         { new: true }
//       );
//       res.status(200).json("Updated Record !!");
//     } catch (err) {
//       console.log(err);
//       res.status(400).send(err.message);
//     }
//   };
  
//   export const updateUser2 = async (req, res) => {
//     try {
//       // Validate Email
//       if (!validateEmail(req.body.email)) {
//         throw new Error("Please enter a valid Email !!");
//       }
  
//       // Email exists ??
//       if (!findEmail(req.body.email)) {
//         throw new Error("Email Not found !!");
//       }
  
//       // Validate Password
//       if (!validatePassword(req.params.password)) {
//         throw new Error(
//           "New Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!!"
//         );
//       }
  
//       const updatedUser = await User.updateOne(
//         { email: req.body.email },
//         {
//           $set: { username: req.params.username, password: req.params.password },
//         },
//         { new: true }
//       );
//       res.status(200).json("Updated Record !!");
//     } catch (err) {
//       console.log(err);
//       res.status(400).send(err.message);
//     }
//   };
  
//   export const deleteUser = async (req, res) => {
//     try {
//       // Validate Email
//       if (!validateEmail(req.body.email)) {
//         throw new Error("Please enter a valid Email !!");
//       }
  
//       // Email exists ??
//       if (!findEmail(req.body.email)) {
//         throw new Error("Email Not found !!");
//       }
  
//       await User.deleteOne({ email: req.body.email });
//       res.status(200).json("User has been deleted.");
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   export const getUsers = async (req, res) => {
//     try {
//       const users = await User.find();
//       res.status(200).json(users);
//     } catch (err) {
//       console.log(err);
//     }
//   };