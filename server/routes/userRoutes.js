const express = require('express');
const userController = require('./../controllers/userController');
const { response } = require('../app');
const { verifyToken } = require('../middleware/token');

const router = express.Router();

// router.get('/test', userController.deleteUser);
router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
