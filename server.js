//DEPENDENCIES
const app = require("./app.js");
//importing the app object from the app.js file. this indicates that the main application logic is defined in the app.js file. I am using this file to configure and start the server

//CONFIGURATION
require("dotenv").config();
const PORT=process.env.PORT;

//LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});