const express = require("express");
const app = express();
const router = require("./routes/router");

// Define ports
const port = process.env.PORT || 3000;

//Routes
router(app);

//Start the app
app.listen(port, function () {
    console.log('Done!! Listening on port ' + port);
});