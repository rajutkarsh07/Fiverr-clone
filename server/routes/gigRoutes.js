const express = require('express');
const gigController = require('./../controllers/gigController');
const { verifyToken } = require('../middleware/token');

const router = express.Router();

router.get('/', verifyToken, gigController.getGigs);
router.post('/', verifyToken, gigController.createGig);
router.get('/single/:id', verifyToken, gigController.getGig);
router.delete('/:id', verifyToken, gigController.deleteGig);

module.exports = router;
