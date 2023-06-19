import mongoose from "mongoose";

const DB_URL = "mongodb://0.0.0.0:27017/bookStoreDatabase"


export const dbConfig = async() =>{
    try {
        const dbConnect = await mongoose.connect(DB_URL)
        console.log(`connected to ${dbConnect.connection.host}` )
    } catch (error) {
        console.log(`failed to connect to database` , error)
    }
}

