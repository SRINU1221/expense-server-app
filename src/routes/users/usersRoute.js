const express = require('express');
const { registerUser, fetchUsersController } = require('../../controllers/users/UsersController');

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.get('/fetchusers',fetchUsersController);

module.exports = userRoute;