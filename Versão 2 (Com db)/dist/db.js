"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const env = require('./../.env');
const connectionString = env.db;
const db = new pg_1.Pool({ connectionString });
exports.default = db;
