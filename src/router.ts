import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/Categories/createCategory';
import { listCategories } from './app/useCases/Categories/listCategories';
import { listProducts } from './app/useCases/Products/listProducts';
import { createProduct } from './app/useCases/Products/createProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    }
  })
});

//list categories
router.get('/categories', listCategories);
// create category
router.post('/categories', createCategory);
//list products
router.get('/products', listProducts);
//create product
router.post('/products', upload.single('image'), createProduct);
//get products by category
router.get('/products/:categoryId/products', (req, res) => {
  res.send('Ok');
});
//list orders
router.get('/orders', (req, res) => {
  res.send('Ok');
});
//create order
router.post('/orders', (req, res) => {
  res.send('Ok');
});
//change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});
//delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok');
});
