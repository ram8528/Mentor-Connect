// Import necessary modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an Express application
const app = express();

// Enable CORS with specific origin and credentials support
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionSuccessStatus: 200 // For successful preflight requests
}));

// Parse incoming JSON requests with a limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Parse URL-encoded data with a limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies from incoming requests
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import healthCheckRouter from "./routes/healthCheck.routes.js";

//routes declaration
app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/users", userRouter);


// Export the Express application
export { app };