const express = require('express');
let data = require('../data.js')
const app = express();

let filterByDepartmentName = async (req, res) => {
   try {
    console.log("@@@req",  req.query)
    let departmentname =  req.query.departmentname;
    let result = data.filter(emp => emp.department == departmentname)
    if(result.length) {
        res.status(200).send(result)
    }
    else{
        res.status(200).json({"message": "No data found"})
    }
   } catch (error) {
    res.status(400).json({"message": "Error occured"})
   }
    

}

let sortBySalary = async (req, res) => {
    try {
    //  console.log("@@@req",  req.query)
    //  let departmentname =  req.query.departmentname;
     let result = data.sort((a,b) => a.salary > b.salary ? 1 : -1)
     if(result.length) {
         res.status(200).send(result)
     }
     else{
         res.status(200).json({"message": "No data found"})
     }
    } catch (error) {
     res.status(400).json({"message": "Error occured"})
    }
     
 
 }

 let searchByEmployeeId = async (req, res) => {
    try {
     console.log("@@@req",  req.query)
     let employeeId =  req.query.employeeId;
     let result = data.filter(emp => emp.employee_id == employeeId)

     if(result.length) {
         res.status(200).send(result)
     }
     else{
         res.status(200).json({"message": "No data found"})
     }
    } catch (error) {
     res.status(400).json({"message": "Error occured"})
    }
     
 
 }

 let searchByEmployeeName = async (req, res) => {
    try {
     console.log("@@@req",  req.query)
     let name =  req.query.name;
     let result = data.filter(emp => (emp.first_name == name || emp.last_name == name))
     if(result.length) {
         res.status(200).send(result)
     }
     else{
         res.status(200).json({"message": "No data found"})
     }
    } catch (error) {
     res.status(400).json({"message": "Error occured"})
    }
     
 
 }

module.exports = {filterByDepartmentName, sortBySalary, searchByEmployeeId, searchByEmployeeName}