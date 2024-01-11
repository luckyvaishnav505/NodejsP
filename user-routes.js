const express = require('express');
const UserController = require('../contorllers/userController');
const userRoutes = express.Router();


userRoutes.post('/create', UserController.createUser);
userRoutes.post('/update/:id', UserController.updateUser);

module.exports = userRoutes;