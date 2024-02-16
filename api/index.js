import express from "express";
const app = express();

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log('MongoDB is connected!')}
).catch((err) => {
    console.log('ERROR: ', err);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
