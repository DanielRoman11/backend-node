import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import cors from "cors"
import indexRoutes from "./routes/index.routes.js";
import "./config.js"
import { pool } from "./db.js";

const app = express();

console.log(pool);

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cors());

app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "endpoint not found"
  })
})

export default app;