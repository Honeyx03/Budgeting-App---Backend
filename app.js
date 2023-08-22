//DEPENDENCIES
const express = require("express");
const cors = require("cors");

//CONFIGURATION
const app = express();
//connect controller for bugdet here in app.js:
const bugdetController = require("./controllers/budget_controller.js");

//MIDDLEWARE
app.use(express.json());
//this middleware is responsible for parsing incoming requests with JSON payloads (data in body); It allows the application to access the data sent by clients in the request body using req.body

app.use(cors());
//Cross-Origin Resource Sharing (CORS) enables cross-origin requests from different domains, allowing the server to handle request coming from other origins (ex: frontend apps running on a diff domain)

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Budgtr - Your Budgetting App");
});

//I am using /budget as the base of for all the routes defined in the "budgetController". It means that anu route defined in the budgetController will be accessed with the "/budget" prefix. for example if there is a route in the budgetController with the path "expenses", it will be accesible at "/budget/expenses" in the app.
app.use("/budget", bugdetController);


//404 PAGE
app.get("*", (req, res) => {
    res.status(404).json ({ error: "Page not found" });
});
//the asterisk denotes any page that does not have a specified route

//EXPORT
module.exports = app;