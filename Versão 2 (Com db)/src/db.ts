import { Pool } from "pg";
const env = require('./../.env')
const connectionString =
  env.db;

const db = new Pool({ connectionString });

export default db;
