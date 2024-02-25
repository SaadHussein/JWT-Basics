const express = require('express');
const LoginRouter = express.Router();
const { login, dashboard } = require('../controllers/main');
const authenticationMiddleware = require('../middleware/auth');

LoginRouter.route('/login').post(login);
LoginRouter.route('/dashboard').get(authenticationMiddleware, dashboard);

module.exports = LoginRouter;