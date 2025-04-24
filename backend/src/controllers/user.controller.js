// Import necessary modules and utilities
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const options = {
    httpOnly: true, // Set the cookie to be accessible only by the web server.
    secure: true // Ensure the cookie is sent only over HTTPS.
}

// Function to generate access and refresh tokens for a user
const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId); // Fetch the user from the database using their ID.
        const accessToken = user.generateAccessToken(); // Generate a new access token for the user.
        const refreshToken = user.generateRefreshToken(); // Generate a new refresh token for the user.

        user.refreshToken = refreshToken; // Update the user's refresh token in the database.
        await user.save({ validateBeforeSave: false }); // Save the user object without validating the fields.

        return { accessToken, refreshToken }; // Return the generated tokens.
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh tokens"); // Handle errors by throwing a custom API error.
    }
}

// Function to handle user registration
const registerUser = asyncHandler(async (req, res) => {
    // Extract user details from the request body
    const { fullName, username, email, password } = req.body;

    // Validate that all required fields are provided
    if ([fullName, username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required!!"); // Throw an error if any field is empty.
    }

    // Check if a user with the same username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        throw new ApiError(409, "User  with email or username already exists"); // Throw an error if user already exists.
    }

    // Retrieve the local path of the uploaded avatar image
    // const avatarLocalPath = req.files?.avatar[0]?.path;

    // Check for cover image if provided
    // let coverImageLocalPath;
    // if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    //     coverImageLocalPath = req.files.coverImage[0].path; // Get the cover image path if available.
    // }

    // Ensure an avatar image is provided
    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar file is required"); // Throw an error if avatar is missing.
    // }

    // Upload avatar and cover image to Cloudinary
    // const avatar = await uploadOnCloudinary(avatarLocalPath); // Upload avatar and get the URL.
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath); // Upload cover image and get the URL.

    // Ensure the avatar upload was successful
    // if (!avatar) {
    //     throw new ApiError(400, "Avatar file is required"); // Throw an error if avatar upload fails.
    // }

    // Create a new user entry in the database
    const user = await User.create({
        fullName,
        username,
        email,
        // avatar: {
        //     public_id: , // Store the public ID of the uploaded avatar.
        //     url: avatar.url // Store the URL of the uploaded avatar.
        // }, // Store the URL of the uploaded avatar.
        // coverImage: {
        //     public_id: coverImage?.public_id || "", // Use empty string if no cover image is provided.
        //     url: coverImage?.url || "" // Use empty string if no cover image is provided.
        // }, // Store the URL of the uploaded cover image.
        password, // Store the user's password (should be hashed in a real application).
    });

    // Fetch the created user without sensitive information
    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user"); // Handle errors during user creation.
    }

    // Return a success response with the created user data
    return res.status(201).json(new ApiResponse(200, createdUser, "User  Registered Successfully"));
});

// Function to handle user login
const loginUser = asyncHandler(async (req, res) => {
    // Extract login details from the request body
    const { username, email, password } = req.body;

    // Validate that either username or email is provided
    if (!username && !email) {
        throw new ApiError(400, "Username or Email Required"); // Throw an error if neither is provided.
    }

    // Find the user based on username or email
    const user = await User.findOne({ $or: [{ username }, { email }] }); // Search for the user in the database using either username or email.

    if (!user) {
        throw new ApiError(404, "User  does not exist"); // Throw an error if the user is not found.
    }

    const isPasswordValid = await user.isPasswordCorrect(password); // Check if the provided password matches the stored password.

    if (!isPasswordValid) {
        throw new ApiError(404, "Invalid user credentials"); // Throw an error if the password is incorrect.
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id); // Generate access and refresh tokens for the user.

    const loggedInUser = await User.findById(user._id) // Fetch the logged-in user without sensitive information.
        .select("-password -refreshToken");

    return await res // Send the response with cookies for access and refresh tokens.
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken // Return user data along with tokens.
                },
                "User  logged in Successfully" // Success message.
            )
        );
});

// Function to handle user logout
const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate( // Update the user's refresh token to undefined to log them out.
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // Remove the refresh token from the user document.
            }
        },
        {
            new: true // Return the updated user document.
        }
    );

    return res // Send the response confirming the user has logged out.
        .status(200)
        .clearCookie("accessToken", options) // Clear the access token cookie.
        .clearCookie("refreshToken", options) // Clear the refresh token cookie.
        .json(
            new ApiResponse(
                200, {}, "User  Logged Out" // Success message.
            )
        );
});

// Function to refresh access token
const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken; // Get the refresh token from cookies or request body.

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized Request"); // Throw an error if no refresh token is provided.
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET // Verify the refresh token using the secret.
        );

        const user = await User.findById(decodedToken?._id); // Find the user based on the decoded token.

        if (!user) {
            throw new ApiError(401, "Invalid Refresh Token"); // Throw an error if the user is not found.
        }

        if (incomingRefreshToken !== user.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used"); // Throw an error if the refresh token does not match.
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id); // Generate new tokens.

        res
            .status(200)
            .cookie("accessToken", accessToken, options) // Set the new access token cookie.
            .cookie("refreshToken", refreshToken, options) // Set the new refresh token cookie.
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken }, // Return the new tokens.
                    "Access Token Refreshed" // Success message.
                )
            );
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Refresh token"); // Handle errors during token verification.
    }
});


export {
    // changeCurrentPassword,
    // getCurrentUser,
    // getUserChannelProfile,
    // getWatchHistory,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    // updateAccountDetails,
    // updateCoverImage,
    // updateAvatar
}; // Export the functions for use in other parts of the application.