const express = require('express'),
      route = express.Router(),
      Rental = require('../controllers/rental');

route.get('/user/:id',  Rental.getUserRentals);
route.post('', Rental.postRental );

module.exports = route;