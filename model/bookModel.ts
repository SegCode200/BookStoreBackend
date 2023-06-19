import mongoose from "mongoose";
// import { Document , Schema  , model} from "mongoose";
import { iBooks } from "../interfaces/allInterfaces";

// interface books extends iBooks , Document{}

interface books extends iBooks , mongoose.Document{}



const bookSchema = new mongoose.Schema<iBooks>({
    title : {
        type : String,
        unique : true,
        required: [true , "please enter a title"]
    },
    authorName :{
        type : String,

    },
    ISBN : {
        type : String,
        unique : true,
    },
    isBoring : {
        type : Boolean
    },
    price : {
        type : Number
    },
    details : {
        type : String
    },
    
    } , {timestamps : true})
    


 const bookModel = mongoose.model<books>("Books" , bookSchema)

 export default bookModel

