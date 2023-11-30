const express = require('express');

const app = express();
const departmentRouter = require('./routers/department.js')

// Create a basic endpoints using nodeJS use the following schema for same.

// 1) Create a API to filter by department.
// 2) Create a API to sort by salary.
// 3) Create a API to search by employee_id.

// {
// employee_id:'123'
// first_name:"xyz",
// last_name:"xyz",
// department:"IT",
// Address:"xyz",
// hire_date:"01-02-2023",
// dob:"01-02-2012",
// joiningDate:"20-02-2023",
// salary:'123'
// }

// 1) Filter by Department : like HR, Developer etc.
// 2) Sort by salary : Ascending descending.
// 3) Search by name : like first name, last name

app.use('/api',  departmentRouter)
app.listen(8800, () => {
    console.log("server stared on port ", 8800)
})