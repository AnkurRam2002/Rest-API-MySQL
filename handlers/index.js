import { find } from "../db/queries.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await find();
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getProduct = async (req, res) => {
    return res.send('Get a single product')
};

export const createProduct = async (req, res) => {
    return res.send('Create a product')
};

export const updateProduct = async (req, res) => {
    return res.send('Update a product')
};

export const deleteProduct = async (req, res) => {
    return res.send('Delete a product')
};