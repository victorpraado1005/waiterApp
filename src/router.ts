import { Router } from 'express';

export const router = Router();

//list categories
router.get('/categories', (req, res) => {
  res.send('Ok');
});
// create category
router.post('/categories', (req, res) => {
  res.send('Ok');
});
//list products
router.get('/products', (req, res) => {
  res.send('Ok');
});
//create product
router.post('/products', (req, res) => {
  res.send('Ok');
});
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
