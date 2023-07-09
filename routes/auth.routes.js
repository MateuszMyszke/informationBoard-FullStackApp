const express = require('express');
const router = express.Router();

const AuthController = require('../contollers/Auth.controller');

router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.get('/user', AuthController.getUser);

module.exports = router;