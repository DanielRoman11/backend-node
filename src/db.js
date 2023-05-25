import { createPool }from "mysql2/promise";

import dotenv from "dotenv";
import { database, dbport, host, password, user } from "./config.js";
dotenv.config({path: "../.env"})

const pool = createPool({
  host,
  user,
  password,
  port: dbport,
  database
});


export {
  pool
}
