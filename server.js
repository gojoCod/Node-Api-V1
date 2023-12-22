require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./Routes/productRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
// routes
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("Hello node api");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog, My name is unknown.");
});
app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
      console.log(`NODE API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
