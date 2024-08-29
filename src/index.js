// require('dotenv').config({path:"./env"})
import dotenv from "dotenv";
import connectDB from "./db/DBconnection.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 7000,()=>{
        console.log(`server is listening at ${process.env.PORT}`)
    });
})
.catch(
    (error)=>{console.log("MONGO DB connection failed!!!");
});


























































































// const app = express()

// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error: ",error);
//             throw error
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`);
//         });
//     }
//     catch (error){
//         console.log(error)
//         throw error
//     }
// })()