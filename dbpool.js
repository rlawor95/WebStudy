const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 5000,
    host     : 'localhost',
    user     : 'user',
    password : 'worud0370',
    database : 'TESTDB',
});

function getConnection(callback) {
    pool.getConnection(function (err, conn) {
        if (!err) {
            callback(conn);
        }
        else {
            switch (err.code) {
                case "PROTOCOL_CONNECTION_LOST":
                    console.error("Database connection was closed.");
                    break;
                case "ER_CON_COUNT_ERROR":
                    console.error("Database has too many connections.");
                    break;
                case "ECONNREFUSED":
                    console.error("Database connection was refused.");
                    break;
            }
        }
    });
}
// 쓰고나서 릴리즈 처리 필요

module.exports = getConnection;