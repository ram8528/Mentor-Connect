// Import the User model
import { User } from "../models/user.model.js";

// Import the custom ApiError class
import { ApiError } from "../utils/ApiError.js";

// Import the asyncHandler utility to handle asynchronous middleware
import { asyncHandler } from "../utils/asyncHandler.js";

// Import the jsonwebtoken library for handling JWTs
import jwt from "jsonwebtoken";

// Middleware to verify JWT
export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        // Retrieve the token from cookies or Authorization header
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        // If no token is found, throw an unauthorized error
        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        // Verify the token using the secret key
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Find the user by ID from the decoded token, excluding password and refreshToken fields
        const user = await User.findById(decodedToken._id).select("-password -refreshToken");

        // If no user is found, throw an unauthorized error
        if (!user) {
            throw new ApiError(401, "Unauthorized request");
        }

        // Attach the user to the request object
        req.user = user;

        // Proceed to the next middleware
        next();
    } catch (error) {
        // If an error occurs, pass it to the error handling middleware
        next(error);
    }
});