import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

//export a db function to connect to database
const db = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to mongoDB database");

        })
        .catch((err) => {
            console.error("Error:", err);

        })
}
export default db