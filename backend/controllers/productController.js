import Product from '../models/productModel.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// For ESM compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const importProducts = async (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/products.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    const products = JSON.parse(data);

    await Product.deleteMany(); // clear existing
    const inserted = await Product.insertMany(products);

    res.status(201).json({
      message: '✅ Products imported',
      count: inserted.length
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '❌ Failed to import products' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: '❌ Failed to get products' });
  }
};











