import express from "express";
import cors from "cors";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import SeedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import axios from "axios";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error", err.msg);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/seed", SeedRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  // const url = "http://localhost:5000/api/seed";

  // axios
  //   .get(url)
  //   .then((response) => {
  //     console.log("Response:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
});
