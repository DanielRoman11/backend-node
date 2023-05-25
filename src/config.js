import { config } from "dotenv";

config()

const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_PORT = process.env.DB_PORT
const PORT = process.env.PORT

export{
  DB_NAME, DB_HOST, DB_USER, DB_PASS, DB_PORT, PORT
}