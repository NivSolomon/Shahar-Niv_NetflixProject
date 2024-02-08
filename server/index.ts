import express from 'express';
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 8080;

//routes:

app.listen(PORT, () =>{
    console.log("listening on " + PORT);
})
