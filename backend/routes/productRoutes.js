import express from 'express';
import { importProducts, getAllProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/import', importProducts); // bulk import
router.get('/', getAllProducts);       // fetch all

export default router;













