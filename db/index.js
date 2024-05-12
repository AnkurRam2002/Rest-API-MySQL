import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = createPool({
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE_NAME,
    user: process.env.MYSQL_USER
});

const connectToDatabase = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MySQL database');
        return connection;
    } catch (error) {
        console.log('Error connecting to MySQL database: ', error);
    }
}

export { connectToDatabase,pool };