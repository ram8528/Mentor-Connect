import 'dotenv/config';

// Import the function to connect to the database
import connectDB from "./db/index.js";

// Import the Express application
import { server, app } from "../lib/socket.js";

// import app from "./app.js";
// Connect to the database
connectDB()
  .then(() => {
    // Handle application errors
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    // Start the server and listen on the specified port
    server.listen(process.env.PORT || 8000, () => {
      console.log(`App listening on port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });