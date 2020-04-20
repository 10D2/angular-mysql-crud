"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // import mysql from 'promise-mysql'
const mysql = require('mysql2/promise')();
const keys_1 = __importDefault(require("./keys"));
const pool = mysql.createPool(keys_1.default.database);
console.log(pool);
pool.getConnection()
    .then((connection) => {
    pool.releaseConnection(connection);
    console.log('Conexion realizada');
});
// var pool = require('mysql2-promise')();
// pool.configure({
//     "host": "localhost",
//     "user": "root",
//     "password": "",
//     "database": "ng_games_db"
// });
exports.default = pool;
