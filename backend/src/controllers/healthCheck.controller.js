// Import necessary utilities
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Enhanced healthCheck function
const healthCheck = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(200, null, 'Service is up and running')
    );
});

// Export the healthCheck function
export { healthCheck };