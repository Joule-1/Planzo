import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

export default connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database Connected ", connectionInstance);
    }
    catch(error){
        console.log("MongoDB Connection Failed !!", error);
    }
}