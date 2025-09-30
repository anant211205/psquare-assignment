import { app } from "./src/app.js";
import dotenv from "dotenv";
import { connectDB } from "./src/db/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`🧿 Server is running at port: ${PORT}`);
    });
})
.catch((error) => { 
    console.log("MongoDB connection failed:", error);
}); 