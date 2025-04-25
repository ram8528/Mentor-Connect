import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app } from "../lib/socket.js";

// Enable CORS as the very first middleware
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}));

app.options('*', cors());


// ...rest of your middleware and routes...
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import and declaration...
// ...existing code...

//routes import
import userRouter from "./routes/user.routes.js";
import healthCheckRouter from "./routes/healthCheck.routes.js";

//routes declaration
app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/users", userRouter);

