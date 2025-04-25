import { Router } from "express"; // Importing Router from express framework
import {
    checkAuth,
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
} from "../controllers/user.controller.js"; // Importing user-related controller functions
// import { upload } from "../middlewares/multer.middleware.js"; // Importing middleware for handling file uploads
import { verifyJWT } from "../middlewares/auth.middleware.js"; // Importing middleware for JWT verification

const router = Router(); // Creating a new router instance

// Route for user registration
router
    .route("/register")
    .post(
        // Middleware to handle file uploads for avatar and cover image
        // upload.fields([
        //     {
        //         name: 'avatar', // Field name for avatar
        //         maxCount: 1 // Maximum number of files for avatar
        //     },
        //     {
        //         name: 'coverImage', // Field name for cover image
        //         maxCount: 1 // Maximum number of files for cover image
        //     }
        // ]),
        registerUser // Controller function to handle registration
    );

// Route for user login
router
    .route("/login")
    .post(loginUser); // Controller function to handle login

// Route for refreshing access token
router
    .route("/refresh-token")
    .get(refreshAccessToken); // Controller function to handle token refresh

// Protected Route for user logout
router
    .route("/logout")
    .get(verifyJWT, logoutUser); // Middleware to verify JWT before logging out

router
    .route("/check-auth")
    .get(verifyJWT, checkAuth); // Middleware to verify JWT before logging out

// Protected Route for changing user password
// router
//     .route("/change-password")
//     .patch(verifyJWT, changeCurrentPassword); // Middleware to verify JWT before changing password

// Protected Route for getting current user information
// router
//     .route("/curr-user")
//     .get(verifyJWT, getCurrentUser); // Middleware to verify JWT before getting user

// Route for updating account details
// router
//     .route("/update-account-details")
//     .patch(verifyJWT, updateAccountDetails); // Middleware to verify JWT before updating account details

// Route for updating user avatar
// router
//     .route("/update-avatar")
//     .patch(verifyJWT,
//         upload.single('avatar'), // Middleware to handle single file upload for avatar
//         updateAvatar // Controller function to handle avatar update
//     ); // Middleware to verify JWT before updating avatar

// Route for updating cover image
// router
//     .route("/update-cover-image")
//     .patch(verifyJWT,
//         upload.single('coverImage'), // Middleware to handle single file upload for cover image
//         updateCoverImage // Controller function to handle cover image update
//     ); // Middleware to verify JWT before updating cover image

// Route for getting user channel profile
// router
//     .route("/c/:username")
//     .get(verifyJWT, getUserChannelProfile); // Controller function to get user channel profile

// // Route for getting user watch history
// router
//     .route("/watch-history")
//     .get(verifyJWT, getWatchHistory); // Controller function to get user channel profile

export default router; // Exporting the router for use in other parts of the application