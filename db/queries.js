import { pool } from "./index.js";

export const find = async () => {
    const QUERY = 'SELECT * FROM products';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        console.log('Result: ', result);
        return result;
    } catch (error) {
        console.log('Error executing query: ', error);
        throw error;
    }   
};

export const findById = async () => {
    const QUERY = 'SELECT * FROM products WHERE id = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY[id]);
        console.log('Result: ', result);
        return result;
    } catch (error) {
        console.log('Error executing query: ', error);
        throw error;
    }   
};