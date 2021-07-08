const router = require("express").Router();
const Admin = require("../models/admin_model");

router.get("/", async (req, res) => {
  try {
    const tumAdminler = await Admin.find({});
    if (tumAdminler) {
      return res.json(tumUserler);
    } else {
      console.log("Admin Bulunamadı");
      return res.status(400).json({
        mesaj: "Adminler Bulunamadı",
      });
    }
  } catch (e) {
    console.log("Admin giriş ederken hata: " + e);
  }
});

router.get("/:username", async (req, res) => {
  try {
    const sonuc = await Admin.findOne({
      username: req.params.username,
    });
    if (sonuc) {
      res.status(200).json(sonuc);
      console.log("Admin Bulundu");
    } else {
      console.log("Admin Bulunamadı");
      res.status(400).json({
        mesaj: "Hatalı Sorgu",
      });
    }
  } catch (e) {
    console.log("Admin giriş ederken hata: " + e);
  }
});

router.post("/", async (req, res) => {
  try {
    const eklenecekUser = await Admin(req.body).save();
    res.status(200).json(eklenecekUser);
  } catch (e) {
    res.status(404).json({
      mesaj: "Admin kayıt ederken hata",
    });
    console.log("Admin kayıt ederken hata: " + e);
  }
});

module.exports = router;
