import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    salt: String,
  }, {timestamps: true})
  
//   userSchema.virtual("password")
//     .set(function(password) {
//       this._password = password
//       this.salt = uuidv1()
//       this.encry_password = this.securePassword(password)
//     })
//     .get(function() {
//       return this._password
//     })


export default mongoose.model("User", userSchema);