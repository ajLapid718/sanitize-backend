const express = require('express');
const router = express.Router();
const { Item } = require('../database/models');

router.get('/', function(req, res, next) {
  Item.findAll()
    .then(items => res.json(items))
    .catch(err => next(err));
});

router.post('/', function(req, res, next) {
  Item.create(req.body)
    .then(createdItem => res.json(createdItem))
    .catch(err => next(err));
})

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
