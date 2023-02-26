import mongoose from "mongoose"
const mong = "mongodb+srv://Matthewjoel:Matthew2024@cluster0.5ig47cj.mongodb.net/Matthew-app?retryWrites=true&w=majority&appName=Cluster0"
async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!)
    } catch (error){
        throw new Error('Connection failed!')
    }
}

export default dbConnect