const mysql = require('mysql2/promise'); 
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0
});

const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Conexión a MySQL exitosa en el hilo:", connection.threadId);
        connection.release(); 
    } catch (error) {
        console.error("Error al conectar a MySQL:", error.message);
        process.exit(1);
    }
};

module.exports = {
    pool,
    testConnection
};