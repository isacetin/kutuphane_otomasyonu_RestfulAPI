const express = require("express");
require("./db/db_connection");
const adminRouter = require("./router/admin_router");
const bookRouter = require("./router/book_router");
const userRouter = require("./router/user_router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admins", adminRouter);
app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ mesaj: "Mersin Üniversitesi" });
});

app.listen(3000, () => {
  console.log("3000 portundan server ayaklandırıldı");
});
