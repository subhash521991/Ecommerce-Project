import express from "express";
import cors from "cors"
import conn from "./db/config.js";
import userModel from "./db/User.js";


let app = express();
app.use(express.json());
app.use(cors());
//const connectDB = async ()=>{

    //mongoose.connect("mongodb://0.0.0.0:27017/ecom");
   // await mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(()=>console.log("Connect DB")).catch((err)=>console.log(err));
    //const productSchema = new mongoose.Schema({name:String});
    //const productModel = mongoose.model("products", productSchema);
    //const result = await productModel.find({});
    //console.log(result);


//}

//connectDB(); 

app.get('/', async (req,res)=>{ 
    let user = userModel;
    let result = await user.find({});
    res.send((JSON.stringify(result)));

});

app.post('/register', async (req,res)=>{ 
    let user = new userModel(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);

});
app.post('/login', async (req,res)=>{

    if(req.body.email && req.body.password){

        let user = userModel;
        let result = await user.findOne(req.body).select("-password");;
        if(result){
            res.send((JSON.stringify(result)));
        }
        else {
            res.send('No User Found'); 
        }

        
    }
    else {

        res.send('Please enter Valid user Name and Password');

    }

   
});

app.listen(5000);    