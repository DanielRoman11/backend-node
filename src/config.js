import { config } from "dotenv";

config()

const database = process.env.DB_NAME
const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASS
const dbport = process.env.DB_PORT
const port = process.env.PORT

export{
  database, host, user, password, dbport, port
}