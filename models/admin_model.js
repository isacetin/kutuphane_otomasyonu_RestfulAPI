const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLenght: 3,
      maxLenght: 50,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "yoneticiler", timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
