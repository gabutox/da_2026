import mongoose from "mongoose";

export default mongoose.model ('users', new mongoose.Schema({
    user_name: {type: String, required: true },
    password: {type: String, required: true },
    role: {type: String, enum: ["admin", "user"], default: "user"}
}));
