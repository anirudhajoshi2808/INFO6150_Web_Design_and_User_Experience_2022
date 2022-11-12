import mongoose from "mongoose";
import express from "express";
const app = express()

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config()

// DB Connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("DB CONNECTED")
}).catch(() => {
  console.log("UNABLE to connect to DB")
})

// Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// // Import the routes
 import userRoutes from "./routes/user.js";
 

// // Using routes
 app.use('/api', userRoutes) 


const port = process.env.PORT || 8000

// Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`)
})