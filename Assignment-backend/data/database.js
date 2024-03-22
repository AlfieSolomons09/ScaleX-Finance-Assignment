import mongoose from 'mongoose'

const mongoURL = "mongodb://localhost:27017";

export const connectDB = async () => {
    mongoose.connect(mongoURL, {
        dbName: "backend-assignement"
    }).then(() => console.log("Database connected"))
        .catch((e) => console.log(e))
}