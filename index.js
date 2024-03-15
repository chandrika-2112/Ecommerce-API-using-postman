const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");
const productRoutes = require("./Routes/productRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const orderRoutes = require("./Routes/orderRoutes")

const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

const port = process.env.PORT || 6000;
const url = process.env.COMPASS_URL;

app.listen(port, (req, res) => {
  console.log(`server is up and running at port: ${port}`);
});

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to mongoDB"))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
