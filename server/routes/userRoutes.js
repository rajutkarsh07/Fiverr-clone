const express = require('express');
const userController = require('./../controllers/userController');
const { response } = require('../app');

const router = express.Router();

router.get('/test', userController.deleteUser);

module.exports = router;
