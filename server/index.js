import express from 'express';
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import newsRouter from "./routes/news.js";


const app = express();
dotenv.config();

//Middlewares
app.use(express.json());
app.use(cors());

//ROUTES
app.use('/', newsRouter);


const PORT = process.env.PORT || 3005;
const DB_NAME = process.env.DB_NAME;



async function start() {
    try {
        // await mongoose.connect(`mongodb+srv://${process.env.mongoUser}@clusterzlatmax.kdrp7zk.mongodb.net/${DB_NAME}`);
        app.listen(PORT, () => console.log(`Connection to server on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();







//https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=60821d8da82efddc7040a50bc511c640&lang=ru&units=metric&q=bratsk

//https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=100&apiKey=7c5bf92a51e04e629562b39598462ba4