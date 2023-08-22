//DEPENDENCIES
const express = require("express");
const budget = express.Router();
const budgetArray = require("../models/budget_table.js");
const { validateBudgetData } = require("../models/validations.js");

//CONFIGURATION
budget.get('/', (req, res) => {
    res.json(budgetArray);
});
/* this route is triggered when a "GET" request is made to the base URL ("/budget"). It responds by sending the entire budgetArrau as a JSON in the res body - this retrieves a list of items in the budget array
*/

//with error handling:
budget.get("/:arrayIndex", (req,res) => {
    if(budgetArray[req.params.arrayIndex]) {
        res.json(budgetArray[req.params.arrayIndex]);
    } else {
        res.status(404).json({error: "Not Found"});
    }
});
/* this route uses a URL parameter (":arrayIndex") to specify an index value in the URL such as "/budget/0". it checj if the index value provideed in the URL corresponds to a valid index in budgetArray. if not, it response by sending an errror message.
*/

budget.post("/", validateBudgetData, (req, res) => {
    budgetArray.push(req.body);
    res.json(budgetArray[budgetArray.length - 1])
});


//DELETE with error handling
budget.delete("/:indexArray", (req, res) => {
    if (budgetArray[req.params.indexArray]) {
        const deletedItem = budgetArray.splice(req.params.indexArray, 1);
        res.status(200).json(deletedItem);
    } else {
        res.status(404).json({ error: "Not Found" });
    }
})

/*
Here's what's happening in this route:

>>>>If the budgetArray contains an element at the index specified by the value of req.params.indexArray, it means the item exists, and it can be deleted.
>>>>The code uses the splice method to remove the item from the array. The method takes the index of the element to remove and the number of elements to delete (1 in this case).
>>>>If the item is successfully deleted, the server responds with a status code of 200 (OK) and sends back the deleted item as JSON in the response body.
>>>>If the item does not exist at the specified index, the server responds with a status code of 404 (Not Found) and sends a JSON object with an error message.
*/

//UPDATE/change already existing data (HTTP verb PUT) with error handling
budget.put("/:arrayIndex", validateBudgetData, async (req, res) => {
    if (budgetArray[req.params.arrayIndex]) {
        budgetArray[req.params.arrayIndex] = req.body; //adds the incoming data at index tp the request body
        res.status(200).json(budgetArray[req.params.arrayIndex]);
    } else {
        res.status(404).json({ error: "Not found" })
    }
});



//EXPORT
module.exports = budget;