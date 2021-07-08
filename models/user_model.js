const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    tcno: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    adsoyad: {
      type: String,
      required: true,
      trim: true,
    },
    telefon: {
      type: String,
      required: true,
      trim: true,
    },
    eposta: {
      type: String,
      required: true,
      trim: true,
    },
    adres: {
      type: String,
      required: true,
      trim: true,
    },
    aldigikitaplar: {
      type: [String],
      trim: true,
    },
  },
  { collection: "kullanicilar" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
