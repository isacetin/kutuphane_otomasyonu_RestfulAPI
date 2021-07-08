const router = require("express").Router();
const Book = require("../models/book_model");

router.get("/", async (req, res) => {
  try {
    const sonuc = await Book.find({});
    return res.status(200).json(sonuc);
  } catch (e) {
    console.log(" Tüm kitaplar Get Hata : " + e);
    return res.status(400).json({
      mesaj: "Hata",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const eklenecekKitap = Book(req.body).save();
    return res.status(200).json(eklenecekKitap);
  } catch (e) {
    console.log(" Tüm kitaplar Post Hata : " + e);
    return res.status(400).json({
      mesaj: "Hata",
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const güncellecekKitap = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (güncellecekKitap) {
      return res.status(200).json(güncellecekKitap);
    } else {
      return res.status(404).json({
        mesaj: "Kitap bulunamadı ve güncellenemedi",
      });
    }
  } catch (e) {
    console.log("Kitap Güncellerken Hata : " + e);
    return res.status(404).json({
      mesaj: "Kitap bulunumadı",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const sonuc = await Book.findByIdAndDelete(req.params.id);
  if (sonuc) {
    return res.status(200).json({ mesaj: "Başarıyla silindi" });
  } else {
    return res.status(404).json({
      mesaj: "Kitap bulunamadı ve silinemedi",
    });
  }
});

module.exports = router;
