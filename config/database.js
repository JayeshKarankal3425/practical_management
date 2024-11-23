import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// const dbConnect=async()=>{
//    try
//    {
//        await mongoose.connect(process.env.MONGODB_URL)
//        console.log("MongoDb connected sussfully");
//    }
//    catch(error)
//    {
//        console.log("Connection failed",error);
//    }
// }
// dbConnect();
// const mongoose = require('mongoose');

const dbConnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;
// const dbConnect = async () => {
//     try {
//       await mongoose.connect('mongodb+srv://jayesh:jayeshkarankal%40345@cluster0.lr6xk.mongodb.net/review_system', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("Connected to MongoDB");
//     } catch (error) {
//       console.error("Connection ", error);
//     }
//   };
  
//   export default dbConnect;