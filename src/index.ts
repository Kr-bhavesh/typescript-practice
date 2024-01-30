import express from 'express';
import { json } from 'body-parser';
import { TodoRouter } from './routes/todoroutes';
import mongoose from 'mongoose';
const app = express();
app.use(json());
app.use(TodoRouter);
mongoose.connect("mongodb+srv://bhaveshb:LFiPjneEkrTIskDs@new-cluster.q7jnalj.mongodb.net/Test-db?retryWrites=true&w=majority").then(()=>{
    console.log("connected mongo");
    app.listen(3000,()=>{
        console.log("listening")
    })
})

