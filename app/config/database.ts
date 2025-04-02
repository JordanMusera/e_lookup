import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/e_lookup_db");
        console.log("DB connection successful!");
    } catch (error) {
        console.error("DB connection failed:", error);
    }
};

export default dbConnect;
