import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String

});

let userModel = mongoose.model("users", userSchema);

export default userModel; 