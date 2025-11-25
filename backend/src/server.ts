import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";

import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';

// ❌ MongoDB disabled — using sample_foods only
// import { dbConnect } from './configs/database.config';
// dbConnect();

const app = express();

app.use(express.json());

// ✅ FIXED CORS — allow ANY localhost port
app.use(cors({
    credentials: true,
    origin: true   // <-- important
}));

// API Routes
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// Port
const port = 5001;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
    console.log("✔ MongoDB Disabled — Using sample_foods only");
});
