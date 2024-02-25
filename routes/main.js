const express = require('express');
const LoginRouter = express.Router();
const { login, dashboard } = require('../controllers/main');

LoginRouter.route('/login').post(login);
LoginRouter.route('/dashboard').get(dashboard);

module.exports = LoginRouter;