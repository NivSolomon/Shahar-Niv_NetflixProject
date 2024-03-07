import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "../routes/userRouter";
import mongoose from "mongoose";
import movieRouter from "../routes/contentRouter";
import seedRouter from "../routes/seedRouter";
import contentRouter from "../routes/contentRouter";
import myListRouter from "../routes/myListRouter";
import verifyTokenRouter from "../routes/verifyTokenRouter";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;

//routes:
app.use("/api/v1/seed", seedRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contents", contentRouter);
app.use("/api/v1/myList", myListRouter);
app.use("/api/v1/verifyToken", verifyTokenRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on " + PORT);
    });
  }).catch((err) => {
    console.log(err.message);
  });

  export default app;
