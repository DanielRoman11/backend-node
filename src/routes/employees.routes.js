import { Router } from "express"
import { deleteEmployee, getEmployees, createEmployee, getEmployee, deleteEmployees, updateEmployee } from "../controllers/employees.controller.js";
const router = Router();

router.get("/employees", getEmployees)
router.get("/employees/:id", getEmployee)

router.post("/employees", createEmployee)

router.delete("/employees", deleteEmployees)
router.delete("/employees/:id", deleteEmployee)

router.patch("/employees/:id", updateEmployee)

export default router;