// CONFIG
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const config = require("./src/config/index");

// SERVER
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// CORS
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

// MIDDLEWARE
app.use(express.json());

// DB
const mongoose = require("mongoose");
const db = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
db.then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
}).catch((err) => console.log(err));

// REDIRECT TO BASE PATH
app.get("/", (_, res) => {
  res.redirect(config.BASE_PATH);
});

// ROUTES
const initRoutes = require("./src/routes/index");
initRoutes(app);

// 404 ERROR
app.use((_, res) => {
  res.status(404).json({ message: "Resource not found" });
});