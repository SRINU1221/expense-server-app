const express = require('express');
const { registerUser, fetchUsersController, loginController } = require('../../controllers/users/UsersController');

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginController);
userRoute.get('/fetchusers',fetchUsersController);

module.exports = userRoute;