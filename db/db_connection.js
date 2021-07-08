const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/library", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Veritabanına Bağlandıldı."))
  .catch((hata) => console.log("Db bağlantı hatası"));
