import mongoose from "mongoose";
//let conn = mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(() => console.log("Connect My DB")).catch((err) => console.log(err));

let conn = mongoose.connect('mongodb+srv://subhash521991:Maurya%40123@cluster0.mzx155l.mongodb.net/e-com').then(() => console.log("Connect My DB")).catch((err) => console.log(err));

export default conn; 
