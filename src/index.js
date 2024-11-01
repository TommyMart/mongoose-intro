// Purpose: 
// First point of entry 
// Initiate the server 
// Get the port
// Tell the server to listen to web traffic 

// Run .env at start
require("dotenv").config();

// Server is configured in server.js, not in index.js
// Destructure app and dbConnect to use properties 
// in app.listen() call back function
const {app} = require("./server.js");
// Connect to DB
const { dbConnect } = require("./utils/database.js");

// Get the PORT value from environment variables
const PORT = process.env.PORT || 8080;


// Same as below
// dbConnect().then(() => {
//     app.listen();
// })

// app.listen(port, callback)
app.listen(PORT, async () => {

    await dbConnect();
	// Server is running if we reach this point in the code!
	console.log("Server is running on port " + PORT);
});
