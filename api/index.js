import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.router.js";
const app = express();
dotenv.config();
app.use(express.json());

mongoose
.connect(process.env.MONGO)
.then(() => console.log("connected to Mongodb"))
.catch((err) => console.log(err));

app.use("/api/user", userRoute); 

app.listen(3000, () => {
  console.log("App has been started");
});
