import express, {Application}  from 'express';
import { TodoRouter } from './routes/todoroutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();//configuring in order to access env variables
const app:Application = express();
//read environment variables from env file with non-null assertion operator (!)
const mongo_uri:string= process.env.MONGO_URI!;
const port:string = process.env.PORT!;
app.use(express.json());//using the middleware
app.use(TodoRouter);
mongoose.connect(mongo_uri).then(()=>{
    console.log("connected mongo");//db connected 
    app.listen(port,()=>{
        console.log("listening");//app started listening
    })
})

