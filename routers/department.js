const express = require('express');
const departmentController = require("../controllers/department.js")
const app = express();

const router = express.Router();

router.get('/filterByDepartmentname', departmentController.filterByDepartmentName)
router.get('/sortBySalary', departmentController.sortBySalary)
router.get('/searchByEmployeeId', departmentController.searchByEmployeeId)
router.get('/searchByEmployeeName', departmentController.searchByEmployeeName)
module.exports = router