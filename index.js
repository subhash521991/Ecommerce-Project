import express from "express";
// Using ES6 imports
import mongoose from 'mongoose';
let app = express();

app.get('/', (req,res)=>{

res.send("App is Working");


});

app.listen(6000); 