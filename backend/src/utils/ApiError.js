// Define a custom error class for API-related errors
class ApiError extends Error {
    constructor(
        statusCode, // HTTP status code for the error
        message = "Something went wrong!!", // Default error message
        errors = [], // Array to hold specific error details
        stack = "" // Custom stack trace (optional)
    ) {
        super(message) // Call the parent class (Error) constructor with the message
        this.statusCode = statusCode // Store the HTTP status code
        this.data = null // Placeholder for any additional data
        this.message = message // Store the error message
        this.success = false // Indicates the success status (false for errors)
        this.errors = errors // Store the array of specific errors

        if (stack) {
            this.stack = stack // Use the provided stack trace if available
        } else {
            Error.captureStackTrace(this, this.constructor) // Capture the stack trace for debugging
        }
    }
}

// Export the ApiError class for use in other modules
export { ApiError }