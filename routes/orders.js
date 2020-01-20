const express = require('express');
const router = express.Router();
const { Order } = require('../database/models');

router.post('/', function(req, res, next) {
  Order.create(req.body)
    .then(createdOrder => res.json(createdOrder))
    .catch(err => next(err));
})

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
