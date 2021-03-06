const express = require('express');
const router = express.Router();

// Subrouters;
const itemsRouter = require('./items');
const ordersRouter = require('./orders');

// Mount our subrouters to assemble our apiRouter;
router.use('/items', itemsRouter);
router.use('/orders', ordersRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
