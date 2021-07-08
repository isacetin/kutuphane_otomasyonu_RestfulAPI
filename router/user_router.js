const router = require("express").Router();
const User = require("../models/user_model");

router.get("/", async (req, res) => {
  try {
    const bulunanKullanicilar = await User.find({});
    res.status(200).json(bulunanKullanicilar);
  } catch (e) {
    res.status(400).json({ mesa: "Hata!" });
    console.log("Kullanıcı Bulunamadı");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bulunanKullanicilar = await User.findOne({ tcno: req.params.id });
    res.status(200).json(bulunanKullanicilar);
  } catch (e) {
    res.status(400).json({ mesa: "Hata!" });
    console.log("Kullanıcı Bulunamadı");
  }
});

router.post("/", async (req, res) => {
  try {
    const eklenecekUser = await User(req.body).save();
    res.status(200).json(eklenecekUser);
  } catch (e) {
    res.status(404).json({
      mesaj: "User kayıt ederken hata",
    });
    console.log("User kayıt ederken hata: " + e);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const güncellenecekUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (güncellenecekUser) {
      return res.status(200).json(güncellenecekUser);
    } else {
      return res.status(404).json({
        mesaj: "User Bulunamadı ve güncellenemedi",
      });
    }
  } catch (e) {
    console.log("User Güncellerken Hata : " + e);
    res.status(404).json({
      mesaj: "User Bulunumadı",
    });
  }
});

router.patch("/:id/al/:aldigikitap", async (req, res) => {
  try {
    const güncellenecekUserBook = await User.updateOne(
      { tcno: req.params.id },
      { $pullAll: { aldigikitaplar: [req.params.aldigikitap] } }
    );
    if (güncellenecekUserBook) {
      return res.status(200).json(güncellenecekUserBook);
    } else {
      return res.status(404).json({
        mesaj: "User Bulunamadı ve güncellenemedi",
      });
    }
  } catch (e) {
    console.log("User Güncellerken Hata : " + e);
    res.status(404).json({
      mesaj: "User Bulunumadı",
    });
  }
});

router.patch("/:id/ver/:aldigikitap", async (req, res) => {
  try {
    const güncellenecekUserBook = await User.updateOne(
      { tcno: req.params.id },
      { $push: { aldigikitaplar: [req.params.aldigikitap] } }
    );
    if (güncellenecekUserBook) {
      return res.status(200).json(güncellenecekUserBook);
    } else {
      return res.status(404).json({
        mesaj: "User Bulunamadı ve güncellenemedi",
      });
    }
  } catch (e) {
    console.log("User Güncellerken Hata : " + e);
    res.status(404).json({
      mesaj: "User Bulunumadı",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const sonuc = await User.findByIdAndDelete(req.params.id);
  if (sonuc) {
    return res.status(200).json({ mesaj: "Başarıyla Silindi" });
  } else {
    return res.status(404).json({
      mesaj: "User Bulunamadı ve Silinimedi",
    });
  }
});

module.exports = router;
