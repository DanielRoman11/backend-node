import { pool } from "../db.js"

const getEmployees = async(req, res) => {
  try {
    const [ rows ] = await pool.query("SELECT * FROM employee")
    res.json(rows)
  } catch (error) {
    return res.status(500).json({msg: "Something went wrong 😿"})
  }
  
}
const getEmployee = async(req, res) => {
  const { id } = req.params;
  try {
    const [ rows ] = await pool.query(`SELECT * FROM employee WHERE id = ?;`, [id])
  
    return rows.length > 0 ? res.status(200).json(rows[0]) : res.status(404).json({msg: "Employee not found"})
  } catch (error) {
    return res.status(500).json({msg: "Something went wrong 😿"})
  }
}

const createEmployee = async(req, res) => {
  const { name, salary } = req.body
  console.log(name);
  console.log(salary);
  try {
    const [ rows ] = await pool.query("INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]);
    res.status(200).json({msg: "Employee Created 🙆", name: name , salary: salary});
  } catch (error) {
    return res.status(500).json({msg: "Something went wrong 😿"})
  }
}

const deleteEmployees = async(req, res) => {
  try {
    await pool.query("TRUNCATE TABLE employee");
    res.json({msg: "All employees deleted"});
  } catch (error) {
    return res.status(500).json({msg: "Something went wrong 😿"})
  }
}

const deleteEmployee = async(req, res) => {
  const { id } = req.params
  try {
    const [ result ] = await pool.query("DELETE FROM employee WHERE id = ?", [id])
    return result.affectedRows > 0 ? res.sendStatus(204) : res.status(404).json({msg: "Employee not found"})
  } catch (error) {
    return res.status(500).json({msg: "Something went wrong 😿"})
  }
}

const updateEmployee = async(req, res) => {
  const { id } = req.params
  const { name, salary } = req.body

  console.log(name,"...");

  try {
    const [ result ] = await pool.query("UPDATE employee SET name = IFNULL(?, trim(name)), salary = IFNULL(?, salary) WHERE id = ?;", [name, salary, id])
    const [ rows ] = await pool.query(`SELECT * FROM employee WHERE id = ?;`, [id])

    return result.affectedRows > 0 ? res.status(200).json(rows[0]) : res.status(404).json({msg: "Employee not found"})
  } catch (error) {
    return res.status(500).json({msg: "Something went wrong 😿"})
  }
}


export {
  getEmployees, getEmployee,
  deleteEmployees, deleteEmployee, 
  createEmployee,
  updateEmployee
}