import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import userRouter from "../routes/userRouter";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;

//routes:
app.use("/api/v1/users", userRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on " + PORT);
    });
  }).catch((err) => {
    console.log(err.message);
  });
