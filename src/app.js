import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import cors from "cors"
import indexRoutes from "./routes/index.routes.js";
import "./config.js"
import { pool } from "./db.js";

const app = express();

// console.log(pool);

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cors({
  origin: ["https://danielroman11.github.io/Consuming-a-Basic-APIrestful", "https://danielroman11.github.io/"], 
  optionsSuccessStatus: 200
}));

app.use("/api", 
(req, res, next) =>  {
  res.header("Access-Control-Allow-Origin", "https://danielroman11.github.io/Consuming-a-Basic-APIrestful/");
  next();
}, employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "endpoint not found"
  })
})

export default app;