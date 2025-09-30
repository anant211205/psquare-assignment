import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

const url = process.env.MONGODB_URL;
console.log("MongoDB URL:", url);

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(url);
        console.log(`\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1)
    }
} 

export { connectDB };