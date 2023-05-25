import { createPool }from "mysql2/promise";

import dotenv from "dotenv";
dotenv.config({path: "/.env"})

const pool = createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "D@n1ieLRom@n",
  port: process.env.DB_PORT || "3306",
  database: 'companydb'
});

export {
  pool
}
