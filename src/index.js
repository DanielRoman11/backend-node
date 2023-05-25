import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import "./config.js"

const app = express()

app.use(express.json())

app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "endpoint not found"
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listen on port: ' + port))