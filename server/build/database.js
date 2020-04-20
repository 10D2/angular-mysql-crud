"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connect');
});
exports.default = pool;
// // import mysql from 'promise-mysql'
//MYLSQL2////////////////////////////////////////
// const mysql = require('mysql2/promise')()
// import keys from './keys'
// const  pool = mysql.createPool(keys.database);
// console.log(pool)
// pool.getConnection()
//     .then((connection: any) => {
//         pool.releaseConnection(connection)
//         console.log('Conexion realizada')
//     })
///////////////////////////////////////////////
// var pool = require('mysql2-promise')();
// pool.configure({
//     "host": "localhost",
//     "user": "root",
//     "password": "",
//     "database": "ng_games_db"
// });
// export default pool
