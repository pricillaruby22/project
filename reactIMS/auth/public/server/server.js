/*const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors=require("cors");

app.use(cors());
// Middleware to set COOP and COEP headers correctly
app.use((req, res, next) => {
    // These headers allow the popup to work
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups"); // Allow popups
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp"); // Required for some security policies
    next();
});

// Serve the React App (optional: in case you are serving it from the same Express server)
app.use(express.static('build'));  // Assuming your React app is in a 'build' folder

// Example route (this can be replaced with other routes you have)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
