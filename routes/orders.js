const express = require('express');
const router = express.Router();
const { Order } = require('../database/models');

router.post('/', function(req, res, next) {
  // iterate through the products on the request body;
  // check for the prices of those items based on the prices in our Items Table;
  // prior to creating an order, use the actual prices from the database and then submit the order;
  // set up the database differently, too;
  // DO NOT RELY ON THE TOTAL PRICE SENT FROM THE FRONTEND;
  // THE FRONTEND SHOULD PRIMARILY BE A VIEW LAYER;
  // MORE SPECIFICALLY, WE MUST ASSUME THAT ANYTHING THAT CAN BE CHANGED WILL BE CHANGED WHETHER IT IS ON THE DOM OR IN A SOURCE FILE;
  // IT ONLY TAKES ONE PERSON TO RUIN IT FOR EVERYONE;
  // THEREFORE, WE SHOULD HANDLE IMPORTANT MATTERS SUCH AS CREATING AN ORDER HERE IN THE BACKEND;
  
  Order.create(req.body)
    .then(createdOrder => res.json(createdOrder))
    .catch(err => next(err));
})

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
