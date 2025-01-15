import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoutes.js";






dotenv.config();

const app = express();
const port=process.env.PORT || 5000;
const database=process.env.DATABASE_URL; 

app.use(cors({
    origin:[process.env.ORIGIN],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());

 app.use("/api/auth",authRoutes);

const server=app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(database).
then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err.message));

