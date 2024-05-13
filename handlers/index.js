import { find, create, findById, update, remove } from "../db/queries.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await find();
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await findById(id);
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createProduct = async (req, res) => {
   const { title, description, price } = req.body;
   if (!title || !description || !price) {
       return res.status(400).json({ error: 'Invalid input' })
   }
    try {
        const newProduct = await create(title, description, price);
        return res.status(201).json({ product: newProduct });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { title, description, price } = req.body;
    const id = req.params.id;
    if (!title || !description || !price) {
        return res.status(400).json({ error: 'Invalid input' })
    }
     try {
         const newProduct = await update(title, description, price, id);
         return res.status(201).json({ product: newProduct });
     } catch (error) {
         return res.status(500).json({ error: error.message });
     } 
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const newProduct = await remove(id);
        return res.status(201).json({ product: newProduct });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};