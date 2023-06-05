const express = require('express');
const gigController = require('./../controllers/gigController');
const { verifyToken } = require('../middleware/token');

const router = express.Router();

router.get('/', gigController.getGigs);
router.get('/single/:id', gigController.getGig);
router.post('/', verifyToken, gigController.createGig);
router.delete('/:id', verifyToken, gigController.deleteGig);

module.exports = router;
