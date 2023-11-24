import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import cors from "cors"
import indexRoutes from "./routes/index.routes.js";
import "./config.js"

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cors({origin: "https://danielroman11.github.io/Consuming-a-Basic-APIrestful/"}));

app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "endpoint not found"
  })
})

export default app;