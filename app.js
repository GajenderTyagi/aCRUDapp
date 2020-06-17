
// app.js
const express = require('express');
const bodyParser = require('body-parser');

const employee = require('./routes/employee.routes'); // Imports routes for the products
// initialize our express app
const app = express();
app.use('/employee', employee);

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
