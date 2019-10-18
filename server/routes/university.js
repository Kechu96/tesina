const express = require('express'),
      route = express.Router(),
      University = require('../controllers/university');

route.get('/all',  University.getAllUniversities);


module.exports = route;