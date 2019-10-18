const express = require('express'),
      route = express.Router(),
      User = require('../controllers/user'),
      multer = require('multer'),
      path = require('path'),
      UPLOAD_PATH = path.resolve(__dirname,'../upload/usersProfile');
      upload = multer({
          dest: UPLOAD_PATH,
          limits: { fileSize:100000000000000, files:10}
      })

route.post('/uploadProfilePicture/:id', upload.single("image"), User.uploadProfilePicture);
route.post('/logUp', User.logUpUser);
route.post('/logIn', User.logInUser);
route.get('/:id', User.getUserById);
route.patch('editProfile/:id', User.editProfile);
//route.post('/logUp', multiPartMiddleware)


module.exports = route;