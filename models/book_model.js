const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema(
  {
    kitapadi: {
      type: String,
      required: true,
      trim: true,
    },
    kitapyazar: {
      type: String,
      required: true,
      trim: true,
    },
    kitapyayinevi: {
      type: String,
      required: true,
      trim: true,
    },
    kitapturu: {
      type: String,
      required: true,
      trim: true,
    },
    sayfasayisi: {
      type: String,
      required: true,
      trim: true,
    },
    ciltno: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "kitaplar" }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
