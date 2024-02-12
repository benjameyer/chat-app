import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import conversationRoutes from "./routes/conversationRoutes.js";

import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/conversations", conversationRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server listening on port http://localhost:${PORT}`)
});