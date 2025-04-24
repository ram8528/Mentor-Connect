// Define a class for API responses
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode // HTTP status code for the response
        this.data = data // Data to be sent in the response
        this.message = message // Message to be sent in the response
        this.success = statusCode < 400 // Indicates the success status (true for status codes less than 400)
    }
}

// Export the ApiResponse class for use in other modules
export { ApiResponse }