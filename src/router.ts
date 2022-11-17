import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/Categories/createCategory';
import { listCategories } from './app/useCases/Categories/listCategories';
import { listProducts } from './app/useCases/Products/listProducts';
import { createProduct } from './app/useCases/Products/createProduct';
import { listProductsByCategory } from './app/useCases/Categories/listProductsByCategory';
import { listOrders } from './app/useCases/Orders/listOrders';
import { createOrder } from './app/useCases/Orders/createOrders';
import { changeOrderStatus } from './app/useCases/Orders/changeOrderStatus';
import { deleteOrder } from './app/useCases/Orders/deleteOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
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
router.get('/products/:categoryId/products', listProductsByCategory);
//list orders
router.get('/orders', listOrders);
//create order
router.post('/orders', createOrder);
//change order status
router.patch('/orders/:orderId', changeOrderStatus);
//delete/cancel order
router.delete('/orders/:orderId', deleteOrder);
