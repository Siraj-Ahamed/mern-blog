import express from "express";
const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB is connected!");
        // app.listen(3000, () => {
        //     console.log("Server is running on port 3000");
        // });
    })
    .catch((err) => {
        console.log("ERROR: ", err);
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use('/api/user', userRoutes)