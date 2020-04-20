import mysql from 'promise-mysql'

import  keys  from './keys'

const pool =mysql.createPool(keys.database)

pool.getConnection()
.then (connection => {
    pool.releaseConnection(connection)
    console.log('DB is connect')

})

export default pool






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


