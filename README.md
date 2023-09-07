# Budgeting-App---Backend
Backend application for establishing the backend for my Budgtr app. Uses JavaScript, Express, and RESTful Routes

## Budgtr Backend Server
The backend server for Budgtr is built using Express.js, providing a RESTful API to handle CRUD (Create, Read, Update, Delete) operations on a budget resource. This README outlines the key features, routes, and configurations of the backend server.

### Dependencies
* Express: A web application framework for building APIs and handling HTTP requests.
* budget: The main router instance created using Express.
* budgetArray: An array that acts as a data store for budget items.
* validateBudgetData: A middleware function to validate incoming budget data.

### Routes
1. GET /budget: Retrieves a list of all budget items.
* Responds with a JSON array containing all budget items.

2. GET /budget/:arrayIndex: Retrieves a single budget item by its index.
* Uses a URL parameter to specify the index.
* Responds with a JSON object containing the budget item if found, or a 404 error.

3. POST /budget: Creates a new budget item.
* Validates incoming budget data using the validateBudgetData middleware.
* Adds the new item to the budgetArray.
* Responds with the newly created budget item.

4. DELETE /budget/:indexArray: Deletes a budget item by its index.
* Uses a URL parameter to specify the index.
* Responds with the deleted budget item if found, or a 404 error.
  
5. PUT /budget/:arrayIndex: Updates an existing budget item.
* Uses a URL parameter to specify the index.
* Validates incoming budget data using the validateBudgetData middleware.
* Updates the budget item at the specified index with the new data.
* Responds with the updated budget item if found, or a 404 error.

### Middleware
* validateBudgetData: Middleware function to validate incoming budget data.
* Checks if the data includes item_name, amount, isDeduction, date, and category.
* Ensures that data types match the expected types (string, number, boolean).

### Configuration
* The backend server is configured to handle HTTP requests for CRUD operations on budget items. It uses Express.js to define routes that interact with the budgetArray. The server responds with appropriate status codes and JSON data for successful and error scenarios.

### Deployment
Make sure to deploy your backend server to a web hosting service (e.g., Heroku) to make the API accessible online. Include the deployed backend URL in your front-end code to connect the two parts of your application.

  
## Getting Started
To run the backend server locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies using npm install.
3. Run the server using npm start.

My server will be accessible at http://localhost:0325
Here is the link to the front-end of this project: https://github.com/Honeyx03/Budgeting-App---Frontend
